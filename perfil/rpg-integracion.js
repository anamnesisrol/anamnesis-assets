/* ANAMNESIS · Hoja RPG en el perfil avanzado · lector de solo lectura. */
(function () {
  "use strict";

  function normalize(text) {
    return (text || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, " ").trim();
  }

  var layout = [
    ["situacion actual","prf-rpg-paper--now"],
    ["intereses narrativos","prf-rpg-paper--interests"],
    ["conexiones buscadas","prf-rpg-paper--links"],
    ["personalidad","prf-rpg-paper--personality"],
    ["gustos y disgustos","prf-rpg-paper--likes"],
    ["habitos y manias","prf-rpg-paper--habits"],
    ["aficiones","prf-rpg-paper--hobbies"],
    ["lugares frecuentes","prf-rpg-paper--places"],
    ["datos curiosos","prf-rpg-paper--curiosities"],
    ["un secreto a voces","prf-rpg-paper--secret"]
  ];
  function renderList(value, type) {
    var list = document.createElement("ul");
    list.className = "prf-rpg-items prf-rpg-items--" + type;
    var items = value.split(type === "notes" ? /\n+|[•●]\s*/ : /\n+|\s*[,;]\s*|[•●]\s*/);
    items.map(function (item) {return item.trim().replace(/^[-*□☐✓]\s*/, "");})
      .filter(Boolean).forEach(function (item) {
        var li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
      });
    return list;
  }

  function getFieldText(container) {
    /* Los campos Texto/Lista de Foroactivo pueden venir como textarea,
       aunque esta sea una página de consulta: no debemos eliminar su valor. */
    var textareas = Array.prototype.slice.call(container.querySelectorAll("textarea"));
    if (textareas.length) {
      return textareas.map(function (el) { return el.value || el.textContent || ""; }).join("\n").trim();
    }
    var fields = Array.prototype.slice.call(container.querySelectorAll("input:not([type=hidden]),select"));
    if (fields.length) {
      return fields.map(function (el) {
        if (el.tagName === "SELECT") return el.options[el.selectedIndex] ? el.options[el.selectedIndex].text : "";
        return el.value || "";
      }).filter(Boolean).join("\n").trim();
    }
    var clone = container.cloneNode(true);
    clone.querySelectorAll("script,style,iframe,form,button").forEach(function (node) { node.remove(); });
    return (clone.innerText || clone.textContent || "").trim();
  }

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
    function fallback(message) {
      mount.textContent = message;
      section.classList.add("prf-rpg-unavailable");
    }

    fetch(sheetUrl, { credentials: "same-origin" })
      .then(function (res) {
        if (!res.ok) throw new Error("Respuesta " + res.status);
        return res.text();
      })
      .then(function (html) {
        var doc = new DOMParser().parseFromString(html, "text/html");
        var rows = Array.prototype.slice.call(doc.querySelectorAll(".ana-rpg-view .rpg-view-field"));
        if (!rows.length) rows = Array.prototype.slice.call(doc.querySelectorAll(".column1 fieldset dl, .column2 fieldset dl"));
        if (!rows.length) {
          fallback("No hay registros RPG disponibles para este personaje.");
          return;
        }

        var records = {};
        rows.forEach(function (row) {
          var dt = row.querySelector("dt"), dd = row.querySelector("dd");
          if (!dt || !dd) return;
          var label = (dt.querySelector("label") || dt).textContent.replace(/\s*:\s*$/, "").trim();
          if (!label) return;
          var key = normalize(label);
          var value = getFieldText(dd);
          var card = document.createElement("article");
          card.className = "prf-rpg-record";
          var heading = document.createElement("h4");
          heading.className = "prf-rpg-label";
          heading.textContent = label;
          var body = document.createElement("div");
          body.className = "prf-rpg-value";
          body.textContent = value || "Sin anotaciones todavía.";
          if (!value) body.classList.add("is-empty");
          card.appendChild(heading);
          card.appendChild(body);
          records[key] = card;
        });

        var root = document.createElement("div");
        root.className = "prf-rpg-records prf-rpg-scrapbook";
        var count = 0;
        layout.forEach(function (item) {
          var key = item[0], card = records[key];
          if (!card) return;
          card.classList.add("prf-rpg-paper", item[1]);
          var body = card.querySelector(".prf-rpg-value");
          var value = body ? body.textContent.trim() : "";
          if (body && !body.classList.contains("is-empty")) {
            if (key === "intereses narrativos" || key === "conexiones buscadas" || key === "lugares frecuentes" || key === "datos curiosos") {
              var type = key === "lugares frecuentes" ? "places" : key === "datos curiosos" ? "notes" : "check";
              var list = renderList(value, type);
              if (list.children.length) body.replaceChildren(list);
            }
          }
          root.appendChild(card);
          delete records[key];
          count++;
        });
        Object.keys(records).forEach(function (key) {
          var card = records[key];
          card.classList.add("prf-rpg-paper", "prf-rpg-paper--extra");
          root.appendChild(card);
          count++;
        });
        if (!count) {
          fallback("No hay registros RPG disponibles para este personaje.");
          return;
        }
        mount.replaceChildren(root);
        section.classList.add("prf-rpg-loaded");
      })
      .catch(function () {
        fallback("No se pudo cargar la hoja de personaje. Puedes consultarla desde el enlace inferior.");
      });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
