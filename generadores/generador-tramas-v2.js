/* ANAMNESIS — Generador narrativo v2 */
(function () {
  "use strict";
  const URL = "https://raw.githubusercontent.com/anamnesisrol/foro-generador-tramas/main/situaciones.json";
  // Imágenes reutilizadas de remora-guide.css y remora-guide-expansion.css.
  const placePhotos = {
  "Sweet Nothings": "https://i.servimg.com/u/f68/20/65/25/08/pexels11.jpg",
  "Tándem": "https://images.unsplash.com/photo-1776993298422-3e8c397d0235?auto=format&fit=crop&w=1200&q=82",
  "Universidad de Rémora": "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=82",
  "Instituto Saint Maren": "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=82",
  "Hospital Universitario": "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=82",
  "Rostco": "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1200&q=82",
  "Hotel Rêverie": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=82",
  "FORGE": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=82",
  "The Bluebell": "https://i.servimg.com/u/f68/20/65/25/08/pexels12.jpg",
  "Leroy's": "https://i.servimg.com/u/f68/20/65/25/08/pexels15.jpg",
  "Scaredy Cat": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=82",
  "Acuario de Rémora": "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=1200&q=82",
  "Sendero de los Farallones": "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=82",
  "Faro de Saint Orla": "https://images.unsplash.com/photo-1515894347712-4d9164b20a51?auto=format&fit=crop&w=1200&q=82",
  "Escalinata de las Mareas": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=82",
  "Jardín Botánico": "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=82",
  "Museo Marítimo y Oceanográfico": "https://images.pexels.com/photos/37302564/pexels-photo-37302564.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "Biblioteca Central de Rémora": "https://images.pexels.com/photos/19238157/pexels-photo-19238157.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "Zoológico de Eastbrook": "https://images.pexels.com/photos/9247032/pexels-photo-9247032.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "Bastión Viejo": "https://images.pexels.com/photos/31691937/pexels-photo-31691937.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "Recinto Ferial de Eastbrook": "https://images.pexels.com/photos/5555853/pexels-photo-5555853.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "Mirador de Monte Kearney": "https://images.pexels.com/photos/33050274/pexels-photo-33050274.jpeg?auto=compress&cs=tinysrgb&w=1400"
};
  const districtPhotos = {
  "Centro Histórico": "https://i.servimg.com/u/f68/20/65/25/08/_top_t10.jpg",
  "Distrito Portuario": "https://i.servimg.com/u/f68/20/65/25/08/descar10.jpg",
  "Barrio Universitario": "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
  "Bellrose": "https://i.servimg.com/u/f68/20/65/25/08/pexels16.jpg",
  "Distrito Costero": "https://images.pexels.com/photos/37519550/pexels-photo-37519550.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "Distrito Eastbrook": "https://images.pexels.com/photos/30433829/pexels-photo-30433829.jpeg?auto=compress&cs=tinysrgb&w=1600"
};
  const bonds = ["Desconocidos","Conocidos","Amistad","Romance","Familia","Profesional","Académico","Rivalidad","Vínculos del pasado"];
  const trust = ["Nula","Baja","Media","Alta","Profunda"];
  const themes = ["Vida cotidiana","Ocio y entretenimiento","Humor","Romance","Celebraciones","Conflictos","Imprevistos","Desarrollo personal","Aventuras","Cambios vitales","Descubrimientos","Cooperación","Recuerdos y nostalgia"];
  const districts = ["Centro Histórico","Distrito Portuario","Distrito Costero","Barrio Universitario","Bellrose","Distrito Eastbrook","Corredor del Istmo","Fuera de Rémora"];
  const order = {vinculo:["vinculo","relacion","confianza","participantes","tematica","distrito","escenario"],escenario:["distrito","escenario","vinculo","relacion","confianza","participantes","tematica"]};
  const icons = [
    '<circle cx="12" cy="7" r="3"/><path d="M5 21v-3a7 7 0 0 1 14 0v3"/>',
    '<circle cx="8" cy="7" r="3"/><circle cx="17" cy="8" r="2.5"/><path d="M2 21v-3a6 6 0 0 1 12 0v3m2-7a5 5 0 0 1 6 5v2"/>',
    '<path d="m3 12 4-5 5 3 5-3 4 5-7 7a3 3 0 0 1-4 0Z"/><path d="m7 7-4-2-2 7 3 2m13-7 4-2 2 7-3 2m-8-4-3 3 3 3"/>',
    '<path d="M20.8 5.6a5.3 5.3 0 0 0-7.5 0L12 7l-1.3-1.4a5.3 5.3 0 0 0-7.5 7.5L12 22l8.8-8.9a5.3 5.3 0 0 0 0-7.5Z"/>',
    '<path d="m3 10 9-7 9 7v11H3zM9 21v-7h6v7"/>',
    '<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V4h8v3M3 13h18m-11 0v3h4v-3"/>',
    '<path d="M12 6C9 3 5 3 2 5v15c4-2 7-2 10 0 3-2 6-2 10 0V5c-3-2-7-2-10 1Zm0 0v14"/>',
    '<path d="m4 3 16 18M20 3 4 21M3 8l5-5m8 18 5-5M16 3l5 5M3 16l5 5"/>',
    '<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2M3 3v5h5"/>'
  ];
  const svg = p => '<svg viewBox="0 0 24 24" aria-hidden="true">'+p+'</svg>';
  const participantOptions = ["1","2","3","4","5","6","7+"];
  const uniq = a => [...new Set(a)];
  function countFits(rule,value){
    if(!value || rule==="Cualquiera") return true;
    const n=Number(value.replace("+",""));
    if(rule===String(n)) return true;
    if(rule==="2-3") return n>=2&&n<=3;
    if(rule==="4-6") return n>=4&&n<=6;
    if(rule==="2 o más") return n>=2;
    if(rule==="3 o más") return n>=3;
    if(rule==="4 o más") return n>=4;
    if(rule==="7 o más") return n>=7;
    return false;
  }
  function matches(row,key,value){
    if(!value) return true;
    if(key==="participantes") return countFits(row[key],value);
    if(key==="confianza" || key==="tematica") return row[key]===value||row[key]==="Cualquiera";
    // Los escenarios y distritos fijos se respetan; no trasladamos lugares inventando su ubicación.
    return row[key]===value;
  }
  function init(root){
    if(root.dataset.agReady) return;
    root.dataset.agReady="1";
    root.innerHTML='<header class="ag-header"><p class="ag-kicker">Anamnesis · Estación de tramas</p><h1>Una historia por escribir</h1><div class="ag-ornament">'+svg('<path d="m12 4 8 8-8 8-8-8Z" fill="currentColor"/>')+'</div><p class="ag-motto">Todo comienza con un encuentro.</p><p class="ag-intro">Elige lo que une a tus personajes o el lugar donde se encuentran. Nosotros te damos el comienzo; la historia es tuya.</p></header><nav class="ag-mode" aria-label="Modo de búsqueda"><button type="button" data-mode="vinculo" aria-pressed="true">Por vínculo</button><button type="button" data-mode="escenario" aria-pressed="false">Por escenario</button></nav><div class="ag-sections"></div><div class="ag-bottom"><p class="ag-hint">Al cambiar un filtro anterior, se restablecen los que le siguen. Todos son opcionales.</p><div class="ag-actions"><button type="button" class="ag-primary" data-action="generate" disabled>Encontrar inspiración</button><button type="button" class="ag-secondary" data-action="reset">Limpiar filtros</button></div><p class="ag-status" role="status" aria-live="polite">Cargando el banco de situaciones…</p></div><article class="ag-result" hidden aria-live="polite"><div class="ag-postmark"><p class="ag-eyebrow">Correspondencia de Rémora</p><span class="ag-card-id"></span></div><div class="ag-postcard"><figure class="ag-photo"><div class="ag-photo-frame"><img alt="" loading="lazy" hidden><span class="ag-photo-fallback" aria-hidden="true"></span></div><figcaption></figcaption></figure><div class="ag-letter"><p class="ag-letter-note">Tu próxima historia</p><h3></h3><div class="ag-meta"></div><p class="ag-story"></p><p class="ag-season" hidden></p></div></div><div class="ag-result-actions"><button type="button" data-action="copy">Copiar situación</button><button type="button" data-action="generate">Otra inspiración</button></div></article><p class="ag-footer">ANAMNESIS · El generador propone las circunstancias; tú escribes la historia.</p>';
    const section=root.querySelector(".ag-sections"), status=root.querySelector(".ag-status"), result=root.querySelector(".ag-result"), main=root.querySelector(".ag-primary");
    let data=[], selected={}, mode="vinculo", loaded=false, current=null, used=new Set();
    const el=(tag,cls,txt)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e;};
    const all=()=>data.filter(r=>Object.keys(selected).every(k=>matches(r,k,selected[k])));
    function preceding(key){const keys=order[mode].slice(0,order[mode].indexOf(key));return data.filter(r=>keys.every(k=>matches(r,k,selected[k])));}
    function choose(key,val){if((selected[key]||"")===val)return;const i=order[mode].indexOf(key);order[mode].slice(i).forEach(k=>delete selected[k]);if(val)selected[key]=val;result.hidden=true;current=null;render(key,val);}
    function makeButton(key,val,label,cls,available,icon){
      const b=el("button",cls);b.type="button";b.dataset.key=key;b.dataset.value=val;b.setAttribute("aria-pressed",String((selected[key]||"")===val));b.disabled=!available;
      if(icon){b.innerHTML=svg(icon);b.append(el("span","",label));}else b.textContent=label;
      return b;
    }
    function options(key){
      const pool=preceding(key);
      if(key==="vinculo")return bonds;
      if(key==="relacion")return uniq(pool.map(r=>r.relacion)).sort((a,b)=>a.localeCompare(b,"es"));
      if(key==="confianza")return trust;
      if(key==="participantes")return participantOptions;
      if(key==="tematica")return themes;
      if(key==="distrito")return districts;
      return uniq(pool.map(r=>r.escenario)).sort((a,b)=>a.localeCompare(b,"es"));
    }
    const questions={vinculo:"¿Qué relación tienen sus personajes?",relacion:"¿Qué tipo de relación tienen?",confianza:"¿Cuánta confianza existe entre ellos?",participantes:"¿Cuántos personajes participan?",tematica:"¿Qué clase de historia buscan?",distrito:"¿En qué distrito?",escenario:"¿En qué lugar quieren encontrarse?"};
    const anyText={vinculo:"Cualquier vínculo",relacion:"Cualquier relación",confianza:"No especificar",participantes:"Cualquier cantidad",tematica:"Cualquier temática",distrito:"Sorpréndeme",escenario:"Cualquier escenario"};
    function group(key){
      const wrap=el("div","ag-subgroup");wrap.append(el("p","ag-label",questions[key]));
      const pool=preceding(key), vals=options(key);
      if(key==="escenario"){
        const sel=el("select","ag-select");sel.dataset.key=key;sel.setAttribute("aria-label",questions[key]);
        const none=el("option","",anyText[key]);none.value="";sel.append(none);
        vals.forEach(v=>{const o=el("option","",v);o.value=v;sel.append(o);});
        sel.value=selected[key]||"";wrap.append(sel);
      }else{
        const box=el("div",key==="vinculo"?"ag-bonds":key==="confianza"?"ag-scale":"ag-options");
        vals.forEach((v,i)=>{
          const n=pool.filter(r=>matches(r,key,v)).length;
          const b=makeButton(key,v,key==="participantes"&&v==="7+"?"7 o más":v,key==="vinculo"?"ag-bond":key==="confianza"?"ag-trust":"ag-chip",n>0,key==="vinculo"?icons[i]:null);
          if(key==="vinculo")b.title=n+" propuestas compatibles";
          box.append(b);
        });
        wrap.append(box,makeButton(key,"",anyText[key],"ag-any",true));
      }
      if(key==="distrito")wrap.append(el("p","ag-hint","Al elegir un distrito solo aparecen lugares asignados a esa zona. Sorpréndeme incluye escenarios libres."));
      if(key==="confianza")wrap.append(el("p","ag-hint","Las situaciones sin una cercanía específica son compatibles con cualquier nivel."));
      return wrap;
    }
    function render(focusKey,focusValue){
      section.replaceChildren();
      const groups=mode==="vinculo"?[["El vínculo",["vinculo","relacion"]],["La cercanía",["confianza","participantes"]],["El encuentro",["tematica","distrito","escenario"]]]:[["El lugar",["distrito","escenario"]],["El vínculo",["vinculo","relacion"]],["La historia",["confianza","participantes","tematica"]]];
      groups.forEach(([title,keys],i)=>{
        const part=el("section","ag-section"),head=el("div","ag-section-head");head.append(el("span","ag-number","0"+(i+1)),el("h2","",title));part.append(head);
        keys.forEach(k=>{if(k==="relacion"&&!selected.vinculo)return;part.append(group(k));});section.append(part);
      });
      const pool=all(),remaining=pool.filter(r=>!used.has(r.id)).length;
      main.disabled=!loaded||!pool.length;
      status.textContent=loaded?(pool.length+" "+(pool.length===1?"situación compatible":"situaciones compatibles")+" · "+remaining+" sin mostrar"):"Cargando el banco de situaciones…";
      if(focusKey){const target=[...section.querySelectorAll("[data-key]")].find(e=>e.dataset.key===focusKey&&(e.tagName==="SELECT"||e.dataset.value===focusValue));if(target)target.focus({preventScroll:true});}
    }
    function generate(){
      if(!loaded)return;
      const pool=all();if(!pool.length){status.textContent="No hay situaciones compatibles. Ajusta los filtros.";return;}
      const fresh=pool.filter(r=>!used.has(r.id));
      if(!fresh.length){status.textContent="Ya viste todas las situaciones de esta combinación. Amplía los filtros o reinicia el sorteo.";if(!root.querySelector('[data-action="restart"]')){const b=el("button","ag-secondary","Reiniciar sorteo");b.type="button";b.dataset.action="restart";root.querySelector(".ag-actions").append(b);}return;}
      root.querySelector('[data-action="restart"]')?.remove();
      current=fresh[Math.floor(Math.random()*fresh.length)];used.add(current.id);
      result.querySelector("h3").textContent=current.titulo;
      result.querySelector(".ag-story").textContent=current.situacion;
      const img=result.querySelector(".ag-photo img"), caption=result.querySelector(".ag-photo figcaption"), frame=result.querySelector(".ag-photo-frame");
      const exact=placePhotos[current.escenario], view=districtPhotos[current.distrito];
      const photo=exact||view;
      img.hidden=true;frame.classList.remove("ag-has-photo");img.removeAttribute("src");
      caption.textContent=exact?current.escenario:view?"Vista de "+current.distrito+" · "+current.escenario:current.escenario;
      img.onload=()=>{img.hidden=false;frame.classList.add("ag-has-photo");};
      img.onerror=()=>{img.hidden=true;frame.classList.remove("ag-has-photo");caption.textContent=current.escenario;};
      if(photo){img.alt=exact?"Vista de "+current.escenario:"Vista del distrito "+current.distrito;img.src=photo;}
      result.querySelector(".ag-card-id").textContent="N.º "+current.id.replace(/^SIT/,"");
      const meta=result.querySelector(".ag-meta");meta.replaceChildren();
      [current.vinculo,current.relacion,current.tematica,current.distrito==="Cualquiera"?"":current.distrito,current.escenario].filter(Boolean).forEach(v=>meta.append(el("span","",v)));
      const season=result.querySelector(".ag-season");
      const seasonal=/Carnaval de las Máscaras|Procesión de las Luces|Noche de los Faroles|Festival de la Marea|feria de agosto|Festival de Otoño|Festival del Faro|Mercado de Invierno|nevada|helada|pleno invierno|invierno costero/i.test(current.escenario+" "+current.situacion);
      season.hidden=!seasonal;season.textContent=seasonal?"Escena estacional: verifica que la fecha in-rol coincida con las condiciones o la festividad del calendario de Rémora.":"";
      result.hidden=false;status.textContent=pool.length+" "+(pool.length===1?"situación compatible":"situaciones compatibles")+" · "+(fresh.length-1)+" sin mostrar";
      result.scrollIntoView({block:"nearest",behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});
    }
    root.addEventListener("click",async e=>{
      const b=e.target.closest("button");if(!b||!root.contains(b)||b.disabled)return;
      if(b.dataset.mode){if(mode===b.dataset.mode)return;mode=b.dataset.mode;selected={};result.hidden=true;current=null;root.querySelectorAll("[data-mode]").forEach(x=>x.setAttribute("aria-pressed",String(x.dataset.mode===mode)));root.querySelector('[data-action="restart"]')?.remove();render();return;}
      if(b.dataset.key){root.querySelector('[data-action="restart"]')?.remove();choose(b.dataset.key,b.dataset.value);return;}
      switch(b.dataset.action){
        case "generate":generate();break;
        case "reset":selected={};current=null;result.hidden=true;root.querySelector('[data-action="restart"]')?.remove();render();break;
        case "restart":all().forEach(r=>used.delete(r.id));generate();break;
        case "copy":if(current){const text=current.titulo+"\n"+current.escenario+"\n\n"+current.situacion;try{await navigator.clipboard.writeText(text);status.textContent="Situación copiada.";}catch(err){const area=el("textarea","",text);area.value=text;area.style.cssText="position:fixed;left:-9999px";root.append(area);area.select();let ok=false;try{ok=document.execCommand("copy");}catch(e){}area.remove();status.textContent=ok?"Situación copiada.":"No se pudo copiar automáticamente. Selecciona el texto del resultado.";} }break;
        case "retry":load();break;
      }
    });
    root.addEventListener("change",e=>{if(e.target.matches("select[data-key]")){root.querySelector('[data-action="restart"]')?.remove();choose(e.target.dataset.key,e.target.value);}});
    async function load(){
      root.querySelector('[data-action="retry"]')?.remove();
      status.textContent="Cargando el banco de situaciones…";
      try{
        const res=await fetch(URL,{cache:"no-cache"});if(!res.ok)throw Error("HTTP "+res.status);
        const raw=await res.json();const fields=["id","vinculo","relacion","confianza","participantes","tematica","distrito","escenario","titulo","situacion"];
        if(!Array.isArray(raw)||!raw.length||raw.some(r=>!r||fields.some(k=>typeof r[k]!=="string"||!r[k].trim()))||new Set(raw.map(r=>r.id)).size!==raw.length)throw Error("Datos incompletos o repetidos");
        data=raw;loaded=true;render();
      }catch(err){loaded=false;main.disabled=true;status.textContent="No se pudo cargar el banco de situaciones.";const retry=el("button","ag-secondary","Reintentar");retry.type="button";retry.dataset.action="retry";root.querySelector(".ag-actions").append(retry);console.error("ANAMNESIS generador:",err);}
    }
    load();
  }
  function boot(){document.querySelectorAll(".ana-gen[data-generator]").forEach(init);}
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot,{once:true});else boot();
})();