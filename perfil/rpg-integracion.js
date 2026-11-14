/* ANAMNESIS · Hoja RPG en el perfil avanzado · lector de solo lectura. */
(function () {
  "use strict";

  function normalize(text) {
    return (text || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, " ").trim();
  }

  var groupDefinitions = [
    { key: "tramas", heading: "Tramas y conexiones", fields: ["situacion actual", "intereses narrativos", "conexiones buscadas"] },
    { key: "retrato", heading: "Retrato cotidiano", fields: ["personalidad", "gustos y disgustos", "aficiones", "habitos y manias"] },
    { key: "notas", heading: "Notas personales", fields: ["lugares frecuentes", "datos curiosos", "un secreto a voces"] }
  ];

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
        root.className = "prf-rpg-records";
        var count = 0;
        groupDefinitions.forEach(function (def) {
          var group = document.createElement("section");
          group.className = "prf-rpg-group prf-rpg-group--" + def.key;
          var title = document.createElement("h3");
          title.className = "prf-rpg-group-heading";
          title.textContent = def.heading;
          var grid = document.createElement("div");
          grid.className = "prf-rpg-grid";
          def.fields.forEach(function (key) {
            var card = records[key];
            if (!card) return;
            if (key === "situacion actual" || key === "datos curiosos" || key === "un secreto a voces") card.classList.add("prf-rpg-record--wide");
            grid.appendChild(card);
            delete records[key];
            count++;
          });
          if (grid.childElementCount) {
            group.appendChild(title);
            group.appendChild(grid);
            root.appendChild(group);
          }
        });
        var extras = Object.keys(records);
        if (extras.length) {
          var other = document.createElement("section");
          other.className = "prf-rpg-group";
          var otherTitle = document.createElement("h3");
          otherTitle.className = "prf-rpg-group-heading";
          otherTitle.textContent = "Otros registros";
          var otherGrid = document.createElement("div");
          otherGrid.className = "prf-rpg-grid";
          extras.forEach(function (key) { otherGrid.appendChild(records[key]); count++; });
          other.appendChild(otherTitle);
          other.appendChild(otherGrid);
          root.appendChild(other);
        }
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
