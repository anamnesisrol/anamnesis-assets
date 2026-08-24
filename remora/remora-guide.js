(function(){
  'use strict';
  var guide=document.getElementById('rmGuide');
  if(!guide)return;
  var themeButton=document.getElementById('rmThemeToggle');
  var themeIcon=document.getElementById('rmThemeIcon');
  function setTheme(theme){guide.dataset.theme=theme;themeButton.setAttribute('aria-pressed',String(theme==='dark'));themeIcon.textContent=theme==='dark'?'☀':'☾';try{localStorage.setItem('remora-guide-theme',theme)}catch(e){}}
  var saved='light';try{saved=localStorage.getItem('remora-guide-theme')||'light'}catch(e){}
  setTheme(saved==='dark'?'dark':'light');
  themeButton.addEventListener('click',function(){setTheme(guide.dataset.theme==='dark'?'light':'dark')});

  guide.querySelectorAll('[data-tabs]').forEach(function(group){
    var tabs=[].slice.call(group.querySelectorAll('[role="tab"]'));
    var panels=[].slice.call(group.querySelectorAll('[role="tabpanel"]'));
    function activate(tab){var target=tab.dataset.tab;tabs.forEach(function(t){t.setAttribute('aria-selected',String(t===tab));t.tabIndex=t===tab?0:-1});panels.forEach(function(p){var show=p.dataset.panel===target;p.hidden=!show;p.classList.toggle('active',show)})}
    tabs.forEach(function(tab,index){tab.addEventListener('click',function(){activate(tab)});tab.addEventListener('keydown',function(event){var next=index;if(event.key==='ArrowRight')next=(index+1)%tabs.length;if(event.key==='ArrowLeft')next=(index-1+tabs.length)%tabs.length;if(next!==index){event.preventDefault();tabs[next].focus();activate(tabs[next])}})});
  });

  var filters=[].slice.call(guide.querySelectorAll('[data-filter]'));
  var cards=[].slice.call(guide.querySelectorAll('.rm-place'));
  var search=document.getElementById('rmSearch');
  var empty=document.getElementById('rmEmpty');
  var active='todos';
  function normalize(value){return(value||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')}
  function refresh(){var query=normalize(search.value),visible=0;cards.forEach(function(card){var categoryOK=active==='todos'||card.dataset.category===active;var textOK=!query||normalize(card.dataset.search+' '+card.textContent).indexOf(query)>-1;var show=categoryOK&&textOK;card.classList.toggle('hidden',!show);if(show)visible++});empty.hidden=visible!==0}
  filters.forEach(function(button){button.addEventListener('click',function(){active=button.dataset.filter;filters.forEach(function(item){item.classList.toggle('active',item===button)});refresh()})});
  search.addEventListener('input',refresh);
})();

