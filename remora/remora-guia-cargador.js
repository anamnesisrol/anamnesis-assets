(function(){"use strict";const target=document.getElementById("rm-guide-root");if(!target)return;const url="https://anamnesisrol.github.io/anamnesis-assets/remora/remora-guia-contenido.html";fetch(url,{mode:"cors"}).then(r=>{if(!r.ok)throw Error("HTTP "+r.status);return r.text()}).then(html=>{target.innerHTML=html;(function(){
(function () {
  "use strict";
  var guide = document.getElementById("rmGuide");
  if (!guide) return;
  guide.querySelectorAll("img.rm-media-photo").forEach(function (img) {
    var fallback = img.getAttribute("data-photo-fallback");
    var attemptedFallback = false;
    img.addEventListener("error", function () {
      if (!attemptedFallback && fallback && fallback !== img.getAttribute("src")) {
        attemptedFallback = true;
        img.setAttribute("src", fallback);
        return;
      }
      img.classList.add("rm-photo-unavailable");
      img.style.display = "none";
    });
  });
})();
})();
(function(){

(function () {
  "use strict";
  var guide = document.getElementById("rmGuide");
  if (!guide) return;

  guide.querySelectorAll("[data-tabs]").forEach(function (group) {
    var tabs = Array.prototype.slice.call(group.querySelectorAll('[role="tab"]'));
    var panels = Array.prototype.slice.call(group.querySelectorAll('[role="tabpanel"]'));
    function activate(tab) {
      var target = tab.getAttribute("data-tab");
      tabs.forEach(function (item) {
        var selected = item === tab;
        item.setAttribute("aria-selected", String(selected));
        item.tabIndex = selected ? 0 : -1;
      });
      panels.forEach(function (panel) {
        var selected = panel.getAttribute("data-panel") === target;
        panel.hidden = !selected;
        panel.classList.toggle("active", selected);
      });
    }
    tabs.forEach(function (tab, index) {
      tab.addEventListener("click", function () { activate(tab); });
      tab.addEventListener("keydown", function (event) {
        var next = index;
        if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
        if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
        if (next !== index) {
          event.preventDefault();
          tabs[next].focus();
          activate(tabs[next]);
        }
      });
    });
    if (tabs.length) activate(tabs.find(function (tab) {
      return tab.getAttribute("aria-selected") === "true";
    }) || tabs[0]);
  });

  var filters = Array.prototype.slice.call(guide.querySelectorAll("[data-filter]"));
  var cards = Array.prototype.slice.call(guide.querySelectorAll(".rm-place"));
  var search = document.getElementById("rmSearch");
  var empty = document.getElementById("rmEmpty");
  var active = "todos";
  function normalize(value) {
    return (value || "").toLowerCase().normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }
  function refresh() {
    var query = normalize(search ? search.value : "");
    var count = 0;
    cards.forEach(function (card) {
      var matchesCategory = active === "todos" || card.dataset.category === active;
      var matchesText = !query || normalize((card.dataset.search || "") + " " + card.textContent).indexOf(query) !== -1;
      var visible = matchesCategory && matchesText;
      card.classList.toggle("hidden", !visible);
      if (visible) count++;
    });
    if (empty) empty.hidden = count !== 0;
  }
  filters.forEach(function (button) {
    button.addEventListener("click", function () {
      active = button.dataset.filter;
      filters.forEach(function (item) { item.classList.toggle("active", item === button); });
      refresh();
    });
  });
  if (search) search.addEventListener("input", refresh);
  refresh();
})();

})();;if(location.hash){const anchor=document.getElementById(decodeURIComponent(location.hash.slice(1)));if(anchor)anchor.scrollIntoView();}}).catch(()=>{target.textContent="No se pudo cargar la guía. Recarga la página para intentarlo de nuevo.";});})();