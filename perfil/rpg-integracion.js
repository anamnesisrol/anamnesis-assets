/* ANAMNESIS · Hoja RPG pública · seis campos, lectura segura, scrapbook V2.29 */
(function () {
  "use strict";
  function normalize(value) {
    return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  }
  var definitions = [
    { key: "situacion actual", area:"opening", style:"current", mode:"text", subtitle:"Lo que está ocurriendo en su vida en este momento." },
    { key: "intereses narrativos", area:"left", style:"interests", mode:"check", subtitle:"Historias, conflictos y experiencias que le interesa explorar." },
    { key: "lugares frecuentes", area:"left", style:"places", mode:"places", subtitle:"Los rincones de Rémora que forman parte de su rutina." },
    { key: "pequenas particularidades", area:"right", style:"particularities", mode:"text", subtitle:"Gustos, disgustos, aficiones y costumbres que lo distinguen." },
    { key: "datos curiosos", area:"right", style:"curiosities", mode:"notes", subtitle:"Anécdotas y detalles que quizá no aparecen en su expediente." },
    { key: "un secreto a voces", area:"ending", style:"secret", mode:"text", subtitle:"Aquello que algunos saben, aunque no se cuente abiertamente." }
  ];
  function readValue(container) {
    var textareas = Array.prototype.slice.call(container.querySelectorAll("textarea"));
    if (textareas.length) return textareas.map(function (el) { return el.value || el.textContent || ""; }).join("\n").trim();
    var inputs = Array.prototype.slice.call(container.querySelectorAll("input:not([type=hidden]),select"));
    if (inputs.length) return inputs.map(function (el) {
      return el.tagName === "SELECT" ? (el.options[el.selectedIndex] || {}).text || "" : el.value || "";
    }).filter(Boolean).join("\n").trim();
    var copy = container.cloneNode(true);
    copy.querySelectorAll("script,style,iframe,form,button,.field_editable").forEach(function (node) { node.remove(); });
    var uneditable = copy.querySelector(".field_uneditable");
    return ((uneditable || copy).innerText || (uneditable || copy).textContent || "").trim();
  }
  function itemsFrom(text, mode) {
    // Curiosidades pueden contener frases con comas: no cortarlas.
    var parts = mode === "notes" ? text.split(/\n+|[•●]\s*/) :
      text.split(/\n+|\s*[,;]\s*|[•●]\s*|\.\s+(?=[A-ZÁÉÍÓÚÑ])/);
    return parts.map(function (s) {
      return s.replace(/^\s*[-*☐□✓•]+\s*/, "").trim().replace(/\.$/, "");
    }).filter(Boolean);
  }
  function renderBody(target, value, mode) {
    if (!value) { target.textContent = "Sin anotaciones todavía."; target.classList.add("is-empty"); return; }
    if (mode === "text") { target.textContent = value; return; }
    var items = itemsFrom(value,mode);
    if (!items.length) { target.textContent = value; return; }
    var list = document.createElement("ul");
    list.className = "prf-rpg-items prf-rpg-items--"+mode;
    items.forEach(function (item) {
      var li = document.createElement("li");li.textContent=item;list.appendChild(li);
    });
    target.replaceChildren(list);
  }
  function init() {
    var section = document.getElementById("prf-character-sheet");
    if (!section || section.dataset.rpgInitialized === "1") return;
    section.dataset.rpgInitialized = "1";
    var mount=section.querySelector("#prf-rpg-content"), userId=(section.getAttribute("data-rpg-user")||"").trim();
    if (!mount || !/^\d+$/.test(userId)) {
      if (mount) mount.textContent="No se pudo identificar la hoja de este personaje.";
      return;
    }
    var url="/u"+userId+"rpgsheet",link=section.querySelector(".prf-rpg-full-link");
    if (link) link.href=url;
    function fallback(msg) { mount.textContent=msg;section.classList.add("prf-rpg-unavailable"); }
    fetch(url,{credentials:"same-origin"})
      .then(function(res){if(!res.ok)throw new Error("HTTP "+res.status);return res.text();})
      .then(function(html){
        var doc=new DOMParser().parseFromString(html,"text/html");
        var rows=Array.prototype.slice.call(doc.querySelectorAll(".ana-rpg-view .rpg-view-field"));
        if(!rows.length)rows=Array.prototype.slice.call(doc.querySelectorAll(".column1 fieldset dl,.column2 fieldset dl"));
        if(!rows.length){fallback("No hay registros RPG disponibles para este personaje.");return;}
        var records={};
        rows.forEach(function(row){
          var dt=row.querySelector("dt"),dd=row.querySelector("dd");
          if(!dt||!dd)return;
          var label=(dt.querySelector("label")||dt).textContent.replace(/\s*:\s*$/,"").trim();
          if(!label)return;
          records[normalize(label)]={label:label,value:readValue(dd)};
        });
        var root=document.createElement("div");root.className="prf-rpg-scrapbook";
        var opening=document.createElement("div"), columns=document.createElement("div");
        var left=document.createElement("div"),right=document.createElement("div"),ending=document.createElement("div");
        opening.className="prf-rpg-opening";columns.className="prf-rpg-columns";
        left.className="prf-rpg-stack prf-rpg-stack--left";
        right.className="prf-rpg-stack prf-rpg-stack--right";
        ending.className="prf-rpg-ending";
        columns.appendChild(left);columns.appendChild(right);
        root.appendChild(opening);root.appendChild(columns);root.appendChild(ending);
        var targets={opening:opening,left:left,right:right,ending:ending},count=0;
        definitions.forEach(function(def){
          var record=records[def.key];if(!record)return;
          var article=document.createElement("article");article.className="prf-rpg-piece prf-rpg-piece--"+def.style;
          var title=document.createElement("h3");title.className="prf-rpg-piece-title";title.textContent=record.label;
          var body=document.createElement("div");body.className="prf-rpg-piece-text";
          renderBody(body,record.value,def.mode);
          var subtitle=document.createElement("p");subtitle.className="prf-rpg-piece-subtitle";subtitle.textContent=def.subtitle;article.appendChild(title);article.appendChild(subtitle);article.appendChild(body);targets[def.area].appendChild(article);count++;
        });
        if(!count){fallback("No hay registros RPG disponibles para este personaje.");return;}
        mount.replaceChildren(root);section.classList.add("prf-rpg-loaded");
      })
      .catch(function(){fallback("No se pudo cargar la hoja. Puedes consultarla desde el enlace inferior.");});
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);
  else init();
})();
