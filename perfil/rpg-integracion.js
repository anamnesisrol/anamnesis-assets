/* ANAMNESIS · hoja RPG dentro del perfil avanzado; lectura únicamente. */
(function () {
  "use strict";
  function init() {
    var section = document.getElementById("prf-character-sheet");
    if (!section || section.dataset.rpgInitialized === "1") return;
    section.dataset.rpgInitialized = "1";
    var mount = section.querySelector("#prf-rpg-content");
    var userId = (section.getAttribute("data-rpg-user") || "").trim();
    if (!mount || !/^\d+$/.test(userId)) {
      if (mount) mount.textContent = "No se pudo identificar la hoja de este personaje.";
      return;
    }
    var sheetUrl = "/u" + userId + "rpgsheet";
    var link = section.querySelector(".prf-rpg-full-link");
    if (link) link.href = sheetUrl;
    var fallback = function (message) {
      mount.textContent = message;
      section.classList.add("prf-rpg-unavailable");
    };
    fetch(sheetUrl, { credentials: "same-origin" })
      .then(function (res) {
        if (!res.ok) throw new Error("Respuesta " + res.status);
        return res.text();
      })
      .then(function (html) {
        var doc = new DOMParser().parseFromString(html, "text/html");
        var rows = Array.prototype.slice.call(
          doc.querySelectorAll(".ana-rpg-view .rpg-view-field")
        );
        if (!rows.length) {
          rows = Array.prototype.slice.call(
            doc.querySelectorAll(".column1 fieldset dl, .column2 fieldset dl")
          );
        }
        if (!rows.length) {
          fallback("No hay registros RPG disponibles para este personaje.");
          return;
        }
        var list = document.createElement("div");
        list.className = "prf-rpg-records";
        var count = 0;
        rows.forEach(function (row) {
          var name = row.querySelector("dt");
          var value = row.querySelector("dd");
          if (!name || !value) return;
          var title = name.querySelector("label") || name;
          var label = title.textContent.replace(/\s*:\s*$/, "").trim();
          if (!label) return;
          var card = document.createElement("article");
          card.className = "prf-rpg-record";
          var heading = document.createElement("h3");
          heading.className = "prf-rpg-label";
          heading.textContent = label;
          var text = document.createElement("div");
          text.className = "prf-rpg-value";
          var safe = value.cloneNode(true);
          safe.querySelectorAll("script,style,iframe,form,input,button,textarea,select").forEach(function (node) { node.remove(); });
          safe.querySelectorAll("*").forEach(function (el) {
            Array.prototype.slice.call(el.attributes).forEach(function (attr) {
              if (/^on/i.test(attr.name)) el.removeAttribute(attr.name);
            });
          });
          while (safe.firstChild) text.appendChild(safe.firstChild);
          if (!text.textContent.trim() && !text.querySelector("img")) {
            text.textContent = "Sin anotaciones todavía.";
            text.classList.add("is-empty");
          }
          card.appendChild(heading);
          card.appendChild(text);
          list.appendChild(card);
          count++;
        });
        if (!count) {
          fallback("No hay registros RPG disponibles para este personaje.");
          return;
        }
        mount.replaceChildren(list);
        section.classList.add("prf-rpg-loaded");
      })
      .catch(function () {
        fallback("No se pudo cargar la hoja de personaje. Puedes consultarla desde el enlace inferior.");
      });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
