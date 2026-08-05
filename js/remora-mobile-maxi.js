(function(){
  'use strict';

  if(window.__anamnesisMaxiDivNav)return;
  window.__anamnesisMaxiDivNav=true;

  var GO_PREFIX='am-maxi-go-';
  var SHOW_PREFIX='am-maxi-show-';

  function targetFrom(action){
    var classes=action.className.split(/\s+/);
    for(var i=0;i<classes.length;i++){
      if(classes[i].indexOf(GO_PREFIX)===0)return classes[i].slice(GO_PREFIX.length);
    }
    return'';
  }

  function screenFor(phone,target){
    var screens=phone.querySelectorAll('.am-maxi-screen');
    for(var i=0;i<screens.length;i++){
      if(screens[i].classList.contains('am-maxi-screen-'+target))return screens[i];
    }
    return null;
  }

  function show(phone,target){
    var next=screenFor(phone,target);
    if(!next)return;

    var screens=phone.querySelectorAll('.am-maxi-screen');
    for(var i=0;i<screens.length;i++)screens[i].classList.remove('is-active');

    var phoneClasses=Array.prototype.slice.call(phone.classList);
    for(var j=0;j<phoneClasses.length;j++){
      if(phoneClasses[j].indexOf(SHOW_PREFIX)===0)phone.classList.remove(phoneClasses[j]);
    }

    phone.classList.add(SHOW_PREFIX+target);
    next.classList.add('is-active');
  }

  function activate(action){
    var phone=action.closest('.am-phone-maxi');
    var target=targetFrom(action);
    if(phone&&target)show(phone,target);
  }

  document.addEventListener('click',function(event){
    var action=event.target.closest('.am-phone-maxi .am-maxi-action');
    if(action)activate(action);
  });

  document.addEventListener('keydown',function(event){
    if(event.key!=='Enter'&&event.key!==' ')return;
    var action=event.target.closest('.am-phone-maxi .am-maxi-action');
    if(!action)return;
    event.preventDefault();
    activate(action);
  });

  function initialize(){
    var phones=document.querySelectorAll('.am-phone-maxi');
    for(var i=0;i<phones.length;i++){
      if(phones[i].querySelector('.am-maxi-action'))show(phones[i],'lock');
    }
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initialize);
  else initialize();
})();
