(function (window, document) {
  'use strict';

  var definitions = {

    'sbu-baul': {
      title: 'Baúl journal',
      intro: 'Completa los datos principales del baúl. Puedes agregar tantos enlaces como necesites.',
      fields: [
        {id:'kicker',label:'Etiqueta superior',type:'text',value:'baúl de personaje'},
        {id:'title',label:'Nombre del personaje',type:'text'},
        {id:'subtitle',label:'Frase o subtítulo',type:'textarea'},
        {id:'img1',label:'Imagen 1',type:'text'},
        {id:'img2',label:'Imagen 2',type:'text'},
        {id:'note',label:'Frase final',type:'text',value:'todo lo que importa encuentra un lugar donde quedarse'},
        {
          id:'links',
          label:'Enlaces del baúl',
          type:'repeater',
          itemLabel:'Enlace',
          fields:[
            {id:'title',label:'Título',type:'text',value:'Expediente'},
            {id:'note',label:'Nota breve',type:'text',value:'datos principales'},
            {id:'url',label:'URL',type:'text',value:'#'}
          ]
        }
      ]
    },

    'scr-chrono': {
      title: 'Cronología',
      intro: 'Agrega los eventos importantes de la ruta del personaje.',
      fields: [
        {id:'kicker',label:'Etiqueta superior',type:'text',value:'cronología personal'},
        {id:'title',label:'Nombre del personaje',type:'text'},
        {id:'subtitle',label:'Frase o subtítulo',type:'textarea'},
        {id:'img',label:'Imagen',type:'text'},
        {id:'photoNote',label:'Texto bajo la imagen',type:'text',value:'memoria abierta'},
        {id:'note',label:'Frase final',type:'text',value:'ninguna historia avanza en línea recta'},
        {
          id:'events',
          label:'Eventos',
          type:'repeater',
          itemLabel:'Evento',
          fields:[
            {id:'date',label:'Fecha o etapa',type:'text'},
            {id:'title',label:'Título del evento',type:'text'},
            {id:'text',label:'Descripción',type:'textarea'},
            {id:'url',label:'URL opcional',type:'text'},
            {id:'linkText',label:'Texto del enlace',type:'text',value:'leer escena'}
          ]
        }
      ]
    },

    'ana-relations': {
      title: 'Relaciones',
      intro: 'Añade tantos vínculos como necesites. La imagen y el enlace son opcionales.',
      fields: [
        {id:'kicker',label:'Etiqueta superior',type:'text',value:'archivo de vínculos'},
        {id:'title',label:'Nombre del personaje',type:'text'},
        {id:'subtitle',label:'Frase o subtítulo opcional',type:'text'},
        {id:'note',label:'Nota final opcional',type:'textarea'},
        {
          id:'relations',
          label:'Relaciones',
          type:'repeater',
          itemLabel:'Relación',
          fields:[
            {id:'name',label:'Nombre',type:'text'},
            {id:'type',label:'Tipo de vínculo',type:'text',value:'amistad'},
            {id:'img',label:'Imagen opcional',type:'text'},
            {id:'text',label:'Historia de la relación',type:'textarea'},
            {id:'url',label:'Enlace opcional',type:'text'},
            {id:'linkText',label:'Texto del enlace',type:'text',value:'ver perfil'}
          ]
        }
      ]
    },

    'ana-search-v2': {
      title: 'Búsqueda múltiple',
      intro: 'Añade una o varias búsquedas. Cada propuesta funciona como un módulo independiente.',
      fields: [
        {id:'title',label:'Título general',type:'text',value:'Búsquedas de personaje'},
        {id:'subtitle',label:'Subtítulo opcional',type:'text'},
        {id:'contact',label:'Contacto general',type:'text',value:'MP'},
        {id:'note',label:'Nota general opcional',type:'textarea'},
        {
          id:'items',
          label:'Búsquedas',
          type:'repeater',
          itemLabel:'Búsqueda',
          fields:[
            {id:'label',label:'Etiqueta opcional',type:'text',value:'vínculo'},
            {
              id:'status',
              label:'Estado',
              type:'select',
              options:[
                {value:'available',label:'Disponible'},
                {value:'reserved',label:'Reservada'},
                {value:'closed',label:'Cerrada'}
              ]
            },
            {id:'title',label:'Título de la búsqueda',type:'text'},
            {id:'img',label:'Imagen opcional',type:'text'},
            {id:'text',label:'Información',type:'textarea'},
            {id:'url',label:'Enlace opcional',type:'text'},
            {id:'linkText',label:'Texto del enlace',type:'text',value:'más información'}
          ]
        }
      ]
    },

    'sbp-search': {
      title: 'Búsqueda de personaje',
      intro: 'Pensada para vínculos importantes o personajes necesarios dentro de una trama.',
      fields: [
        {id:'kicker',label:'Etiqueta superior',type:'text',value:'búsqueda de personaje'},
        {id:'title',label:'Título principal',type:'text',value:'SE BUSCA'},
        {id:'subtitle',label:'Nombre del vínculo o personaje',type:'text'},
        {id:'img',label:'Imagen',type:'text'},
        {id:'photoNote',label:'Texto bajo la polaroid',type:'text',value:'recorte de archivo'},
        {id:'tags',label:'Tags separados por coma',type:'text',value:'drama, vínculos, trama abierta'},
        {id:'contact',label:'Contacto',type:'text',value:'MP · Discord · Tumblr'},
        {id:'context',label:'Contexto',type:'textarea'},
        {id:'dynamic',label:'Dinámica',type:'textarea'},
        {id:'looking',label:'Qué busco',type:'textarea'},
        {id:'offer',label:'Qué ofrezco',type:'textarea'},
        {id:'notes',label:'Notas',type:'textarea'},
        {id:'foot',label:'Frase final',type:'text',value:'algunas historias empiezan buscando a quien todavía no ha llegado'}
      ]
    },

    'sbt-plot': {
      title: 'Búsqueda de tramas',
      intro: 'Para ideas de rol, cupos, propuestas abiertas y dinámicas narrativas.',
      fields: [
        {id:'kicker',label:'Etiqueta superior',type:'text',value:'búsqueda de tramas'},
        {id:'title',label:'Título de la propuesta',type:'text'},
        {id:'subtitle',label:'Subtítulo o frase breve',type:'textarea'},
        {id:'img',label:'Imagen',type:'text'},
        {id:'photoNote',label:'Texto bajo la polaroid',type:'text',value:'idea suelta'},
        {id:'intro',label:'Propuesta general',type:'textarea'},
        {id:'idea',label:'Idea',type:'textarea'},
        {id:'tone',label:'Tono',type:'textarea'},
        {id:'looking',label:'Busco',type:'textarea'},
        {id:'offer',label:'Ofrezco',type:'textarea'},
        {id:'rhythm',label:'Ritmo',type:'text',value:'medio / flexible'},
        {id:'slots',label:'Cupos',type:'text',value:'2 tramas'},
        {id:'contact',label:'Contacto',type:'text',value:'MP · Discord'},
        {id:'foot',label:'Frase final',type:'text',value:'a veces una escena basta para abrir una historia'}
      ]
    },

    'smr-search': {
      title: 'Mini búsqueda rápida',
      intro: 'Una tarjeta breve para pedir rol, anunciar cupos o dejar una idea abierta.',
      fields: [
        {
          id:'variant',
          label:'Variante de color',
          type:'select',
          options:[
            {value:'smr-sage',label:'Sage'},
            {value:'smr-rose',label:'Rose'},
            {value:'smr-ink',label:'Ink'},
            {value:'smr-warm',label:'Warm'}
          ]
        },
        {id:'kicker',label:'Etiqueta superior',type:'text',value:'búsqueda rápida'},
        {id:'title',label:'Título',type:'text',value:'Busco rol'},
        {id:'body',label:'Texto',type:'textarea'},
        {id:'rhythm',label:'Ritmo',type:'text',value:'medio'},
        {id:'slots',label:'Cupos',type:'text',value:'2'},
        {id:'contact',label:'Contacto',type:'text',value:'MP'},
        {id:'foot',label:'Firma o cierre',type:'text',value:'idea abierta'}
      ]
    },

    'stb-post': {
      title: 'Hoja scrapbook',
      intro: 'Una hoja base para textos decorativos, entradas especiales o publicaciones largas.',
      fields: [
        {id:'kicker',label:'Etiqueta superior',type:'text',value:'archivo personal'},
        {id:'title',label:'Título',type:'text'},
        {id:'subtitle',label:'Subtítulo',type:'textarea'},
        {id:'body',label:'Texto',type:'textarea'},
        {id:'foot',label:'Frase final',type:'text',value:'Toda historia deja algún rastro.'}
      ]
    },

    'stn-note': {
      title: 'Post-it',
      intro: 'Nota breve para avisos, pensamientos, mini textos o recordatorios.',
      fields: [
        {
          id:'variant',
          label:'Variante de color',
          type:'select',
          options:[
            {value:'stn-sage',label:'Sage'},
            {value:'stn-rose',label:'Rose'},
            {value:'stn-ink',label:'Ink'},
            {value:'stn-warm',label:'Warm'}
          ]
        },
        {
          id:'reverse',
          label:'Orientación',
          type:'select',
          options:[
            {value:'',label:'Normal'},
            {value:'stn-reverse',label:'Invertida'}
          ]
        },
        {id:'kicker',label:'Etiqueta superior',type:'text',value:'nota al margen'},
        {id:'title',label:'Título',type:'text'},
        {id:'body',label:'Texto',type:'textarea'},
        {id:'foot',label:'Firma o cierre',type:'text',value:'algo queda escrito'}
      ]
    },

    'am-starter': {
      title: 'Mini calendario',
      intro: 'Encabezado breve para starters o escenas.',
      fields: [
        {id:'day',label:'Día numérico',type:'text',value:'04'},
        {id:'month',label:'Mes abreviado',type:'text',value:'JUL'},
        {id:'place',label:'Lugar principal',type:'text',value:'Jardín de fiestas'},
        {id:'date',label:'Fecha completa',type:'text',value:'Sábado, 04 de julio'},
        {id:'time',label:'Hora',type:'text',value:'15:30 hrs'},
        {id:'zone',label:'Zona o ubicación',type:'text',value:'Centro de Rémora'}
      ]
    },

    'asp-spotify': {
      title: 'Soundtrack de Spotify',
      intro: 'Pega el enlace normal de una canción de Spotify. El generador conservará únicamente el identificador de la canción y eliminará cualquier parámetro del enlace compartido.',
      fields: [
        {id:'label',label:'Etiqueta',type:'text',value:'soundtrack'},
        {id:'spotifyUrl',label:'Enlace de la canción en Spotify',type:'text',value:'https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b'}
      ]
    },

    'snr-fragment': {
      title: 'Fragmento narrativo',
      intro: 'Hoja mínima para cartas, citas, diarios, pensamientos o textos especiales.',
      fields: [
        {id:'kicker',label:'Etiqueta superior',type:'text',value:'fragmento narrativo'},
        {id:'title',label:'Título breve',type:'text'},
        {id:'body',label:'Texto',type:'textarea'},
        {id:'foot',label:'Firma opcional',type:'text'}
      ]
    }

  };

  var currentType = '';
  var root = null;
  var previewModal = null;
  var previewTitle = null;
  var previewSlot = null;
  var formModal = null;
  var outputModal = null;
  var formTitle = null;
  var formSlot = null;
  var output = null;
  var importInput = null;
  var importStatus = null;
  var initialized = false;

  function refreshElements() {
    root = document.getElementById('anaTabGenerator');
    previewModal = document.getElementById('anaGenPreviewModal');
    previewTitle = document.getElementById('anaGenPreviewTitle');
    previewSlot = document.getElementById('anaGenPreviewSlot');
    formModal = document.getElementById('anaGenFormModal');
    outputModal = document.getElementById('anaGenOutputModal');
    formTitle = document.getElementById('anaGenFormTitle');
    formSlot = document.getElementById('anaGenFormSlot');
    output = document.getElementById('anaGenOutput');
    importInput = document.getElementById('anaGenImportInput');
    importStatus = document.getElementById('anaGenImportStatus');
  }

  function clean(value) {
    return value == null
      ? ''
      : String(value).replace(/^\s+|\s+$/g, '');
  }

  function esc(value) {
    return clean(value)
      .replace(/&/g,'&')
      .replace(/</g,'<')
      .replace(/>/g,'>');
  }

  function attr(value) {
    return esc(value)
      .replace(/"/g,'&quot;')
      .replace(/'/g,'&#39;');
  }

  function text(value) {
    return esc(value).replace(/\r?\n/g,'<br>');
  }

  function blocks(value) {
    var raw = clean(value);
    var parts;
    var html = '';
    var i;

    if (!raw) return '';

    parts = raw.split(/\r?\n\s*\r?\n/);

    for (i = 0; i < parts.length; i++) {
      html += '<div>' + text(parts[i]) + '</div>';
    }

    return html;
  }

  function url(value) {
    return clean(value) ? attr(value) : '#';
  }

  function image(value) {
    return clean(value) ? attr(value) : 'URL_IMAGEN';
  }

  function spotifyTrackId(value) {
    var raw = clean(value);
    var match;

    if (/^[A-Za-z0-9]{22}$/.test(raw)) {
      return raw;
    }

    match = raw.match(
      /spotify:track:([A-Za-z0-9]{22})/i
    );

    if (match) {
      return match[1];
    }

    match = raw.match(
      /open\.spotify\.com\/(?:intl-[^/]+\/)?(?:embed\/)?track\/([A-Za-z0-9]{22})/i
    );

    return match ? match[1] : '';
  }

  function spotifyTrackUrl(value) {
    var id = spotifyTrackId(value);

    return id
      ? 'https://open.spotify.com/track/' + id
      : '';
  }

  function addClass(el, name) {
    if (
      el &&
      (' ' + el.className + ' ').indexOf(' ' + name + ' ') < 0
    ) {
      el.className += ' ' + name;
    }
  }

  function removeClass(el, name) {
    if (!el) return;

    el.className = el.className
      .replace(
        new RegExp('(^|\\s)' + name + '(?=\\s|$)', 'g'),
        ' '
      )
      .replace(/\s+/g, ' ')
      .replace(/^\s+|\s+$/g, '');
  }

  function openModal(el) {
    if (!el) return;

    addClass(el, 'is-open');
    el.setAttribute('aria-hidden','false');
    el.style.display = 'flex';
  }

  function closeModal(el) {
    if (!el) return;

    removeClass(el, 'is-open');
    el.setAttribute('aria-hidden','true');
    el.style.display = 'none';
  }

  function findUp(node, attrName) {
    while (node && node !== document) {
      if (
        node.getAttribute &&
        node.getAttribute(attrName) !== null
      ) {
        return node;
      }

      node = node.parentNode;
    }

    return null;
  }

  function fieldHTML(field) {
    var value = field.value || '';
    var html = '';
    var i;
    var option;

    if (field.type === 'textarea') {
      return '<label class="tgen-field"><span>' +
        esc(field.label) +
        '</span><textarea data-ana-field="' +
        attr(field.id) +
        '">' +
        esc(value) +
        '</textarea></label>';
    }

    if (field.type === 'select') {
      for (i = 0; i < field.options.length; i++) {
        option = field.options[i];

        html += '<option value="' +
          attr(option.value) +
          '">' +
          esc(option.label) +
          '</option>';
      }

      return '<label class="tgen-field"><span>' +
        esc(field.label) +
        '</span><select data-ana-field="' +
        attr(field.id) +
        '">' +
        html +
        '</select></label>';
    }

    return '<label class="tgen-field"><span>' +
      esc(field.label) +
      '</span><input type="text" data-ana-field="' +
      attr(field.id) +
      '" value="' +
      attr(value) +
      '"></label>';
  }

  function repeatItemHTML(field) {
    var html = '';
    var i;

    for (i = 0; i < field.fields.length; i++) {
      html += fieldHTML(field.fields[i]);
    }

    return '<div class="tgen-repeat-item" data-ana-repeat-item="' +
      attr(field.id) +
      '"><div class="tgen-repeat-head"><strong>' +
      esc(field.itemLabel || 'Elemento') +
      '</strong><button type="button" class="tgen-repeat-remove" data-ana-remove>×</button></div>' +
      html +
      '</div>';
  }

  function renderField(field) {
    if (field.type !== 'repeater') {
      return fieldHTML(field);
    }

    return '<div class="tgen-repeat" data-ana-repeat="' +
      attr(field.id) +
      '"><div class="tgen-repeat-title">' +
      esc(field.label) +
      '</div><div class="tgen-repeat-list">' +
      repeatItemHTML(field) +
      '</div><button type="button" class="tgen-repeat-add" data-ana-add="' +
      attr(field.id) +
      '">Agregar ' +
      esc(field.itemLabel || 'elemento') +
      '</button></div>';
  }

  function openGenerator(type, initialData) {
    var def = definitions[type];
    var html = '';
    var i;

    if (!def || !formSlot || !formTitle) return;

    currentType = type;

    for (i = 0; i < def.fields.length; i++) {
      html += renderField(def.fields[i]);
    }

    formTitle.innerHTML = esc(def.title);

    formSlot.innerHTML =
      '<div class="tgen-real-form">' +
      '<div class="tgen-form-intro">' +
      esc(def.intro) +
      '</div>' +
      html +
      '</div>';

    if (initialData) {
      fillForm(initialData);
    }

    openModal(formModal);
  }

  function getRepeatDefinition(groupId) {
    var fields;
    var i;

    if (!definitions[currentType]) return null;

    fields = definitions[currentType].fields;

    for (i = 0; i < fields.length; i++) {
      if (
        fields[i].id === groupId &&
        fields[i].type === 'repeater'
      ) {
        return fields[i];
      }
    }

    return null;
  }

  function setInputValue(input, value) {
    if (!input) return;

    if (
      input.tagName &&
      input.tagName.toLowerCase() === 'select'
    ) {
      input.value =
        value == null ? '' : String(value);

      if (input.selectedIndex < 0) {
        input.selectedIndex = 0;
      }
    } else {
      input.value =
        value == null ? '' : String(value);
    }
  }

  function fillForm(data) {
    var def = definitions[currentType];
    var i;
    var j;
    var k;
    var field;
    var values;
    var group;
    var list;
    var item;
    var input;

    if (!def || !formSlot || !data) return;

    for (i = 0; i < def.fields.length; i++) {
      field = def.fields[i];

      if (field.type === 'repeater') {
        group = formSlot.querySelector(
          '[data-ana-repeat="' +
          field.id +
          '"]'
        );

        list = group
          ? group.querySelector('.tgen-repeat-list')
          : null;

        if (!list) continue;

        values =
          data[field.id] &&
          data[field.id].length
            ? data[field.id]
            : [{}];

        list.innerHTML = '';

        for (j = 0; j < values.length; j++) {
          list.insertAdjacentHTML(
            'beforeend',
            repeatItemHTML(field)
          );

          item = list.lastElementChild;

          for (
            k = 0;
            k < field.fields.length;
            k++
          ) {
            input = item.querySelector(
              '[data-ana-field="' +
              field.fields[k].id +
              '"]'
            );

            setInputValue(
              input,
              values[j][field.fields[k].id]
            );
          }
        }
      } else {
        input = formSlot.querySelector(
          '[data-ana-field="' +
          field.id +
          '"]'
        );

        setInputValue(
          input,
          data[field.id]
        );
      }
    }
  }

  function clearCurrentForm() {
    var def = definitions[currentType];
    var data = {};
    var i;
    var field;

    if (!def) return;

    for (i = 0; i < def.fields.length; i++) {
      field = def.fields[i];

      data[field.id] =
        field.type === 'repeater'
          ? [{}]
          : '';
    }

    fillForm(data);
  }

  function readForm() {
    var result = {};
    var def = definitions[currentType];
    var i;
    var field;
    var input;
    var group;
    var items;
    var j;
    var k;
    var item;
    var entry;

    if (!def) return result;

    for (i = 0; i < def.fields.length; i++) {
      field = def.fields[i];

      if (field.type === 'repeater') {
        result[field.id] = [];

        group = formSlot.querySelector(
          '[data-ana-repeat="' +
          field.id +
          '"]'
        );

        items = group
          ? group.querySelectorAll(
              '[data-ana-repeat-item]'
            )
          : [];

        for (j = 0; j < items.length; j++) {
          item = items[j];
          entry = {};

          for (
            k = 0;
            k < field.fields.length;
            k++
          ) {
            input = item.querySelector(
              '[data-ana-field="' +
              field.fields[k].id +
              '"]'
            );

            entry[field.fields[k].id] =
              input ? input.value : '';
          }

          result[field.id].push(entry);
        }
      } else {
        input = formSlot.querySelector(
          '[data-ana-field="' +
          field.id +
          '"]'
        );

        result[field.id] =
          input ? input.value : '';
      }
    }

    return result;
  }

  function tags(value) {
    var source = clean(value).split(',');
    var html = '';
    var i;
    var tag;

    for (i = 0; i < source.length; i++) {
      tag = clean(source[i]);

      if (tag) {
        html += '<span>' +
          text(tag) +
          '</span>';
      }
    }

    return html;
  }

  function defaultData(type) {
    var def = definitions[type];
    var result = {};
    var i;
    var j;
    var field;
    var entry;

    if (!def) return result;

    for (i = 0; i < def.fields.length; i++) {
      field = def.fields[i];

      if (field.type === 'repeater') {
        entry = {};

        for (
          j = 0;
          j < field.fields.length;
          j++
        ) {
          if (
            field.fields[j].type ===
            'select'
          ) {
            entry[field.fields[j].id] =
              field.fields[j]
                .options[0].value;
          } else {
            entry[field.fields[j].id] =
              field.fields[j].value ||
              '';
          }
        }

        result[field.id] = [entry];
      } else if (field.type === 'select') {
        result[field.id] =
          field.options[0].value;
      } else {
        result[field.id] =
          field.value || '';
      }
    }

    return result;
  }

  function stripCodeWrapper(value) {
    var raw = clean(value);

    raw = raw
      .replace(
        /^```(?:html)?\s*/i,
        ''
      )
      .replace(
        /\s*```$/i,
        ''
      );

    raw = raw
      .replace(
        /^\[code\]\s*/i,
        ''
      )
      .replace(
        /\s*\[\/code\]$/i,
        ''
      );

    return clean(raw);
  }

  function first(rootNode, selector) {
    return rootNode
      ? rootNode.querySelector(selector)
      : null;
  }

  function all(rootNode, selector) {
    return rootNode
      ? rootNode.querySelectorAll(selector)
      : [];
  }

  function readElementText(element) {
    var clone;
    var br;

    if (!element) return '';

    clone = element.cloneNode(true);
    br = clone.getElementsByTagName('br');

    while (br.length) {
      br[0].parentNode.replaceChild(
        document.createTextNode('\n'),
        br[0]
      );
    }

    return clean(
      clone.textContent ||
      clone.innerText ||
      ''
    ).replace(/\u00a0/g, ' ');
  }

  function readText(rootNode, selector) {
    return readElementText(
      first(rootNode, selector)
    );
  }

  function readBlocksElement(element) {
    var children;
    var parts = [];
    var i;
    var child;

    if (!element) return '';

    children = element.children || [];

    for (
      i = 0;
      i < children.length;
      i++
    ) {
      child = children[i];

      if (
        child.tagName &&
        child.tagName.toLowerCase() ===
          'div'
      ) {
        parts.push(
          readElementText(child)
        );
      }
    }

    return parts.length
      ? parts.join('\n\n')
      : readElementText(element);
  }

  function readBlocksFrom(
    rootNode,
    selector
  ) {
    return readBlocksElement(
      first(rootNode, selector)
    );
  }

  function readAttribute(
    rootNode,
    selector,
    name
  ) {
    var element =
      first(rootNode, selector);

    return element
      ? clean(
          element.getAttribute(name)
        )
      : '';
  }

  function readWithout(
    element,
    removeSelector
  ) {
    var clone;
    var remove;
    var i;

    if (!element) return '';

    clone = element.cloneNode(true);

    remove =
      clone.querySelectorAll(
        removeSelector
      );

    for (
      i = remove.length - 1;
      i >= 0;
      i--
    ) {
      if (remove[i].parentNode) {
        remove[i].parentNode.removeChild(
          remove[i]
        );
      }
    }

    return readElementText(clone);
  }

  function readListText(
    rootNode,
    selector
  ) {
    var nodes =
      all(rootNode, selector);
    var values = [];
    var i;
    var value;

    for (
      i = 0;
      i < nodes.length;
      i++
    ) {
      value =
        readElementText(nodes[i]);

      if (value) {
        values.push(value);
      }
    }

    return values.join(', ');
  }

  function hasClassName(
    element,
    name
  ) {
    return (
      element &&
      (
        ' ' +
        element.className +
        ' '
      ).indexOf(
        ' ' + name + ' '
      ) >= 0
    );
  }

  function parseImported(
    type,
    rootNode
  ) {
    var d = {};
    var nodes;
    var i;
    var link;
    var blocksList;
    var info;

    if (type === 'sbu-baul') {
      d.kicker =
        readText(
          rootNode,
          '.sbu-kicker'
        );

      d.title =
        readText(
          rootNode,
          '.sbu-title'
        );

      d.subtitle =
        readText(
          rootNode,
          '.sbu-subtitle'
        );

      d.img1 =
        readAttribute(
          rootNode,
          '.sbu-photo-one img',
          'src'
        );

      d.img2 =
        readAttribute(
          rootNode,
          '.sbu-photo-two img',
          'src'
        );

      d.note =
        readText(
          rootNode,
          '.sbu-note'
        );

      d.links = [];

      nodes =
        all(
          rootNode,
          '.sbu-list a'
        );

      for (
        i = 0;
        i < nodes.length;
        i++
      ) {
        d.links.push({
          title:
            readText(
              nodes[i],
              'strong'
            ),
          note:
            readText(
              nodes[i],
              'em'
            ),
          url:
            clean(
              nodes[i].getAttribute(
                'href'
              )
            )
        });
      }

      return d;
    }

    if (type === 'scr-chrono') {
      d.kicker =
        readText(
          rootNode,
          '.scr-kicker'
        );

      d.title =
        readText(
          rootNode,
          '.scr-title'
        );

      d.subtitle =
        readText(
          rootNode,
          '.scr-subtitle'
        );

      d.img =
        readAttribute(
          rootNode,
          '.scr-photo img',
          'src'
        );

      d.photoNote =
        readText(
          rootNode,
          '.scr-photo span'
        );

      d.note =
        readText(
          rootNode,
          '.scr-note'
        );

      d.events = [];

      nodes =
        all(
          rootNode,
          '.scr-event'
        );

      for (
        i = 0;
        i < nodes.length;
        i++
      ) {
        link =
          first(
            nodes[i],
            '.scr-box a'
          );

        d.events.push({
          date:
            readText(
              nodes[i],
              '.scr-date'
            ),
          title:
            readText(
              nodes[i],
              '.scr-box strong'
            ),
          text:
            readText(
              nodes[i],
              '.scr-box span'
            ),
          url:
            link
              ? clean(
                  link.getAttribute(
                    'href'
                  )
                )
              : '',
          linkText:
            readElementText(link)
        });
      }

      return d;
    }

    if (type === 'ana-relations') {
      d.kicker =
        readText(
          rootNode,
          '.ana-relations-kicker'
        );

      d.title =
        readText(
          rootNode,
          '.ana-relations-title'
        );

      d.subtitle =
        readText(
          rootNode,
          '.ana-relations-subtitle'
        );

      d.note =
        readBlocksFrom(
          rootNode,
          '.ana-relations-note'
        );

      d.relations = [];

      nodes =
        all(
          rootNode,
          '.ana-relations-item'
        );

      for (
        i = 0;
        i < nodes.length;
        i++
      ) {
        link =
          first(
            nodes[i],
            '.ana-relations-link'
          );

        d.relations.push({
          name:
            readText(
              nodes[i],
              '.ana-relations-name'
            ),
          type:
            readText(
              nodes[i],
              '.ana-relations-type'
            ),
          img:
            readAttribute(
              nodes[i],
              '.ana-relations-photo img',
              'src'
            ),
          text:
            readBlocksFrom(
              nodes[i],
              '.ana-relations-text'
            ),
          url:
            link
              ? clean(
                  link.getAttribute(
                    'href'
                  )
                )
              : '',
          linkText:
            readElementText(link)
        });
      }

      return d;
    }

    if (type === 'ana-search-v2') {
      d.title =
        readText(
          rootNode,
          '.ana-search-v2-title'
        );

      d.subtitle =
        readText(
          rootNode,
          '.ana-search-v2-subtitle'
        );

      d.contact =
        readText(
          rootNode,
          '.ana-search-v2-contact strong'
        );

      d.note =
        readBlocksFrom(
          rootNode,
          '.ana-search-v2-note'
        );

      d.items = [];

      nodes =
        all(
          rootNode,
          '.ana-search-v2-item'
        );

      for (
        i = 0;
        i < nodes.length;
        i++
      ) {
        link =
          first(
            nodes[i],
            '.ana-search-v2-link'
          );

        d.items.push({
          label:
            readText(
              nodes[i],
              '.ana-search-v2-label'
            ),
          status:
            clean(
              nodes[i].getAttribute(
                'data-status'
              )
            ) || 'available',
          title:
            readText(
              nodes[i],
              '.ana-search-v2-item-title'
            ),
          img:
            readAttribute(
              nodes[i],
              '.ana-search-v2-photo img',
              'src'
            ),
          text:
            readBlocksFrom(
              nodes[i],
              '.ana-search-v2-text'
            ),
          url:
            link
              ? clean(
                  link.getAttribute(
                    'href'
                  )
                )
              : '',
          linkText:
            readElementText(link)
        });
      }

      return d;
    }

    if (type === 'sbp-search') {
      d.kicker =
        readText(
          rootNode,
          '.sbp-kicker'
        );

      d.title =
        readText(
          rootNode,
          '.sbp-title'
        );

      d.subtitle =
        readText(
          rootNode,
          '.sbp-subtitle'
        );

      d.img =
        readAttribute(
          rootNode,
          '.sbp-photo img',
          'src'
        );

      d.photoNote =
        readText(
          rootNode,
          '.sbp-photo span'
        );

      d.tags =
        readListText(
          rootNode,
          '.sbp-tags span'
        );

      d.contact =
        readText(
          rootNode,
          '.sbp-contact-value'
        );

      blocksList =
        all(
          rootNode,
          '.sbp-grid .sbp-block'
        );

      d.context =
        blocksList[0]
          ? readBlocksFrom(
              blocksList[0],
              '.sbp-block-body'
            )
          : '';

      d.dynamic =
        blocksList[1]
          ? readBlocksFrom(
              blocksList[1],
              '.sbp-block-body'
            )
          : '';

      d.looking =
        blocksList[2]
          ? readBlocksFrom(
              blocksList[2],
              '.sbp-block-body'
            )
          : '';

      d.offer =
        blocksList[3]
          ? readBlocksFrom(
              blocksList[3],
              '.sbp-block-body'
            )
          : '';

      d.notes =
        blocksList[4]
          ? readBlocksFrom(
              blocksList[4],
              '.sbp-block-body'
            )
          : '';

      d.foot =
        readText(
          rootNode,
          '.sbp-note'
        );

      return d;
    }

    if (type === 'sbt-plot') {
      d.kicker =
        readText(
          rootNode,
          '.sbt-kicker'
        );

      d.title =
        readText(
          rootNode,
          '.sbt-title'
        );

      d.subtitle =
        readText(
          rootNode,
          '.sbt-subtitle'
        );

      d.img =
        readAttribute(
          rootNode,
          '.sbt-photo img',
          'src'
        );

      d.photoNote =
        readText(
          rootNode,
          '.sbt-photo span'
        );

      d.intro =
        readText(
          rootNode,
          '.sbt-intro-text'
        );

      d.idea =
        readBlocksFrom(
          rootNode,
          '.sbt-idea .sbt-note-body'
        );

      d.tone =
        readBlocksFrom(
          rootNode,
          '.sbt-tone .sbt-note-body'
        );

      d.looking =
        readBlocksFrom(
          rootNode,
          '.sbt-looking .sbt-note-body'
        );

      d.offer =
        readBlocksFrom(
          rootNode,
          '.sbt-offer .sbt-note-body'
        );

      info =
        all(
          rootNode,
          '.sbt-info > div'
        );

      d.rhythm =
        info[0]
          ? readText(
              info[0],
              'span'
            )
          : '';

      d.slots =
        info[1]
          ? readText(
              info[1],
              'span'
            )
          : '';

      d.contact =
        info[2]
          ? readText(
              info[2],
              'span'
            )
          : '';

      d.foot =
        readText(
          rootNode,
          '.sbt-foot'
        );

      return d;
    }

    if (type === 'smr-search') {
      d.variant =
        hasClassName(
          rootNode,
          'smr-rose'
        )
          ? 'smr-rose'
          : hasClassName(
              rootNode,
              'smr-ink'
            )
          ? 'smr-ink'
          : hasClassName(
              rootNode,
              'smr-warm'
            )
          ? 'smr-warm'
          : 'smr-sage';

      d.kicker =
        readText(
          rootNode,
          '.smr-kicker'
        );

      d.title =
        readText(
          rootNode,
          '.smr-title'
        );

      d.body =
        readBlocksFrom(
          rootNode,
          '.smr-body'
        );

      info =
        all(
          rootNode,
          '.smr-data > div'
        );

      d.rhythm =
        info[0]
          ? readText(
              info[0],
              'span'
            )
          : '';

      d.slots =
        info[1]
          ? readText(
              info[1],
              'span'
            )
          : '';

      d.contact =
        info[2]
          ? readText(
              info[2],
              'span'
            )
          : '';

      d.foot =
        readText(
          rootNode,
          '.smr-foot'
        );

      return d;
    }

    if (type === 'stb-post') {
      d.kicker =
        readText(
          rootNode,
          '.stb-kicker'
        );

      d.title =
        readText(
          rootNode,
          '.stb-title'
        );

      d.subtitle =
        readText(
          rootNode,
          '.stb-subtitle'
        );

      d.body =
        readBlocksFrom(
          rootNode,
          '.stb-body'
        );

      d.foot =
        readText(
          rootNode,
          '.stb-note'
        );

      return d;
    }

    if (type === 'stn-note') {
      d.variant =
        hasClassName(
          rootNode,
          'stn-rose'
        )
          ? 'stn-rose'
          : hasClassName(
              rootNode,
              'stn-ink'
            )
          ? 'stn-ink'
          : hasClassName(
              rootNode,
              'stn-warm'
            )
          ? 'stn-warm'
          : 'stn-sage';

      d.reverse =
        hasClassName(
          rootNode,
          'stn-reverse'
        )
          ? 'stn-reverse'
          : '';

      d.kicker =
        readText(
          rootNode,
          '.stn-kicker'
        );

      d.title =
        readText(
          rootNode,
          '.stn-title'
        );

      d.body =
        readBlocksFrom(
          rootNode,
          '.stn-body'
        );

      d.foot =
        readText(
          rootNode,
          '.stn-foot'
        );

      return d;
    }

    if (type === 'am-starter') {
      d.day =
        readText(
          rootNode,
          '.asm-date b'
        );

      d.month =
        readText(
          rootNode,
          '.asm-date span'
        );

      d.place =
        readText(
          rootNode,
          '.asm-info > strong'
        );

      info =
        all(
          rootNode,
          '.asm-meta > span'
        );

      d.date =
        info[0]
          ? readWithout(
              info[0],
              'i'
            )
          : '';

      d.time =
        info[1]
          ? readWithout(
              info[1],
              'i'
            )
          : '';

      d.zone =
        info[2]
          ? readWithout(
              info[2],
              'i'
            )
          : '';

      return d;
    }

    if (type === 'asp-spotify') {
      d.label =
        readText(
          rootNode,
          '.asp-spotify-label span'
        ) || 'soundtrack';

      d.spotifyUrl =
        spotifyTrackUrl(
          clean(
            rootNode.getAttribute(
              'data-spotify-track'
            )
          ) ||
          readAttribute(
            rootNode,
            'iframe',
            'src'
          )
        );

      return d;
    }

    if (type === 'snr-fragment') {
      d.kicker =
        readText(
          rootNode,
          '.snr-kicker'
        );

      d.title =
        readText(
          rootNode,
          '.snr-title'
        );

      d.body =
        readBlocksFrom(
          rootNode,
          '.snr-body'
        );

      d.foot =
        readText(
          rootNode,
          '.snr-foot'
        );

      return d;
    }

    return null;
  }

  function setImportStatus(message) {
    if (importStatus) {
      importStatus.textContent =
        message;
    }
  }

  function clearImportedCode() {
    if (importInput) {
      importInput.value = '';
    }

    setImportStatus(
      'También puedes seguir creando tablillas nuevas desde el catálogo de arriba.'
    );
  }

  function loadImportedCode() {
    var raw;
    var parser;
    var parsed;
    var types;
    var i;
    var rootNode = null;
    var type = '';
    var data;

    if (!importInput) return;

    raw =
      stripCodeWrapper(
        importInput.value
      );

    if (!raw) {
      setImportStatus(
        'Pega primero el código completo de una tablilla.'
      );
      return;
    }

    if (!window.DOMParser) {
      setImportStatus(
        'Este navegador no permite leer el código automáticamente.'
      );
      return;
    }

    parser =
      new window.DOMParser();

    parsed =
      parser.parseFromString(
        raw,
        'text/html'
      );

    types = [
      {
        type:'sbu-baul',
        selector:'.sbu-baul'
      },
      {
        type:'scr-chrono',
        selector:'.scr-chrono'
      },
      {
        type:'ana-relations',
        selector:'.ana-relations'
      },
      {
        type:'ana-search-v2',
        selector:'.ana-search-v2'
      },
      {
        type:'sbp-search',
        selector:'.sbp-search'
      },
      {
        type:'sbt-plot',
        selector:'.sbt-plot'
      },
      {
        type:'smr-search',
        selector:'.smr-search'
      },
      {
        type:'stb-post',
        selector:'.stb-post'
      },
      {
        type:'stn-note',
        selector:'.stn-note'
      },
      {
        type:'am-starter',
        selector:'.am-starter-mini'
      },
      {
        type:'asp-spotify',
        selector:'.asp-spotify'
      },
      {
        type:'snr-fragment',
        selector:'.snr-fragment'
      }
    ];

    for (
      i = 0;
      i < types.length;
      i++
    ) {
      rootNode =
        parsed.querySelector(
          types[i].selector
        );

      if (rootNode) {
        type =
          types[i].type;
        break;
      }
    }

    if (!rootNode || !type) {
      setImportStatus(
        'No encontré una tablilla compatible en el código pegado.'
      );
      return;
    }

    try {
      data =
        parseImported(
          type,
          rootNode
        );

      if (!data) {
        setImportStatus(
          'Reconocí la tablilla, pero no pude recuperar sus campos.'
        );
        return;
      }

      openGenerator(
        type,
        data
      );

      setImportStatus(
        'Código cargado: ' +
        definitions[type].title +
        '. Ya puedes editarlo desde el formulario.'
      );
    } catch (error) {
      setImportStatus(
        'No pude leer todos los datos de este código. Revisa que conserve las clases originales de la tablilla.'
      );
    }
  }

  function buildBaul(d) {
    var links = '';
    var i;
    var item;

    for (
      i = 0;
      i < d.links.length;
      i++
    ) {
      item = d.links[i];

      if (
        clean(item.title) ||
        clean(item.note) ||
        clean(item.url)
      ) {
        links +=
          '<a href="' +
          url(item.url) +
          '"><span></span><strong>' +
          text(
            item.title ||
            'Enlace'
          ) +
          '</strong><em>' +
          text(item.note) +
          '</em></a>';
      }
    }

    return '<div class="sbu-baul"><div class="sbu-sheet-back"></div><div class="sbu-sheet"><div class="sbu-tape"></div><div class="sbu-polaroids"><div class="sbu-photo sbu-photo-one"><img src="' + image(d.img1) + '"><span>recuerdo i</span></div><div class="sbu-photo sbu-photo-two"><img src="' + image(d.img2) + '"><span>recuerdo ii</span></div></div><div class="sbu-head"><div class="sbu-kicker">' + text(d.kicker) + '</div><div class="sbu-title">' + text(d.title) + '</div><div class="sbu-subtitle">' + text(d.subtitle) + '</div></div><div class="sbu-list">' + links + '</div><div class="sbu-note">' + text(d.note) + '</div><div class="sbu-deco-circle"></div><div class="sbu-deco-postal"></div></div></div>';
  }

  function buildChrono(d) {
    var events = '';
    var i;
    var item;
    var link;

    for (
      i = 0;
      i < d.events.length;
      i++
    ) {
      item = d.events[i];

      if (
        clean(item.date) ||
        clean(item.title) ||
        clean(item.text)
      ) {
        link =
          clean(item.url)
            ? '<a href="' +
              url(item.url) +
              '">' +
              text(
                item.linkText ||
                'leer escena'
              ) +
              '</a>'
            : '';

        events +=
          '<div class="scr-event"><div class="scr-date">' +
          text(item.date) +
          '</div><div class="scr-box"><strong>' +
          text(item.title) +
          '</strong><span>' +
          text(item.text) +
          '</span>' +
          link +
          '</div></div>';
      }
    }

    return '<div class="scr-chrono"><div class="scr-sheet-back"></div><div class="scr-sheet"><div class="scr-tape"></div><div class="scr-photo"><img src="' + image(d.img) + '"><span>' + text(d.photoNote) + '</span></div><div class="scr-head"><div class="scr-kicker">' + text(d.kicker) + '</div><div class="scr-title">' + text(d.title) + '</div><div class="scr-subtitle">' + text(d.subtitle) + '</div></div><div class="scr-timeline">' + events + '</div><div class="scr-note">' + text(d.note) + '</div><div class="scr-deco-one"></div><div class="scr-deco-two"></div></div></div>';
  }

  function buildRelations(d) {
    var html = '';
    var i;
    var item;
    var photo;
    var link;
    var type;
    var noImage;
    var subtitle;
    var note;

    for (
      i = 0;
      i < d.relations.length;
      i++
    ) {
      item =
        d.relations[i];

      if (
        clean(item.name) ||
        clean(item.type) ||
        clean(item.text) ||
        clean(item.img)
      ) {
        photo =
          clean(item.img)
            ? '<div class="ana-relations-photo"><img src="' +
              image(item.img) +
              '" alt="Imagen de relación"></div>'
            : '';

        link =
          clean(item.url)
            ? '<a class="ana-relations-link" href="' +
              url(item.url) +
              '">' +
              text(
                item.linkText ||
                'ver perfil'
              ) +
              '</a>'
            : '';

        type =
          clean(item.type)
            ? '<span class="ana-relations-type">' +
              text(item.type) +
              '</span>'
            : '';

        noImage =
          photo
            ? ''
            : ' is-no-image';

        html +=
          '<div class="ana-relations-item' +
          noImage +
          '">' +
          photo +
          '<div class="ana-relations-copy">' +
          type +
          '<strong class="ana-relations-name">' +
          text(item.name) +
          '</strong><div class="ana-relations-text">' +
          blocks(item.text) +
          '</div>' +
          link +
          '</div></div>';
      }
    }

    subtitle =
      clean(d.subtitle)
        ? '<div class="ana-relations-subtitle">' +
          text(d.subtitle) +
          '</div>'
        : '';

    note =
      clean(d.note)
        ? '<div class="ana-relations-note">' +
          blocks(d.note) +
          '</div>'
        : '';

    return '<div class="ana-relations"><div class="ana-relations-sheet"><div class="ana-relations-head"><span class="ana-relations-kicker">' + text(d.kicker) + '</span><h3 class="ana-relations-title">' + text(d.title) + '</h3>' + subtitle + '</div><div class="ana-relations-list">' + html + '</div>' + note + '</div></div>';
  }

  function buildSearchV2(d) {
    var labels = {
      available:'disponible',
      reserved:'reservada',
      closed:'cerrada'
    };

    var html = '';
    var i;
    var item;
    var status;
    var photo;
    var link;
    var label;
    var noImage;
    var number;
    var subtitle;
    var note;
    var contact;

    for (
      i = 0;
      i < d.items.length;
      i++
    ) {
      item =
        d.items[i];

      if (
        clean(item.title) ||
        clean(item.text) ||
        clean(item.img) ||
        clean(item.label)
      ) {
        status =
          labels[item.status]
            ? item.status
            : 'available';

        photo =
          clean(item.img)
            ? '<div class="ana-search-v2-photo"><img src="' +
              image(item.img) +
              '" alt="Imagen de búsqueda"></div>'
            : '';

        link =
          clean(item.url)
            ? '<a class="ana-search-v2-link" href="' +
              url(item.url) +
              '">' +
              text(
                item.linkText ||
                'más información'
              ) +
              '</a>'
            : '';

        label =
          clean(item.label)
            ? '<span class="ana-search-v2-label">' +
              text(item.label) +
              '</span>'
            : '';

        noImage =
          photo
            ? ''
            : ' is-no-image';

        number =
          i + 1 < 10
            ? '0' + (i + 1)
            : String(i + 1);

        html +=
          '<div class="ana-search-v2-item' +
          noImage +
          '" data-status="' +
          status +
          '"><div class="ana-search-v2-item-head"><span class="ana-search-v2-number">' +
          number +
          '</span>' +
          label +
          '<span class="ana-search-v2-status">' +
          labels[status] +
          '</span></div><div class="ana-search-v2-item-main">' +
          photo +
          '<div class="ana-search-v2-copy"><strong class="ana-search-v2-item-title">' +
          text(item.title) +
          '</strong><div class="ana-search-v2-text">' +
          blocks(item.text) +
          '</div>' +
          link +
          '</div></div></div>';
      }
    }

    subtitle =
      clean(d.subtitle)
        ? '<div class="ana-search-v2-subtitle">' +
          text(d.subtitle) +
          '</div>'
        : '';

    note =
      clean(d.note)
        ? '<div class="ana-search-v2-note">' +
          blocks(d.note) +
          '</div>'
        : '';

    contact =
      clean(d.contact)
        ? '<div class="ana-search-v2-contact"><span>contacto</span><strong>' +
          text(d.contact) +
          '</strong></div>'
        : '';

    return '<div class="ana-search-v2"><div class="ana-search-v2-sheet"><div class="ana-search-v2-head"><div><span class="ana-search-v2-kicker">búsquedas</span><h3 class="ana-search-v2-title">' + text(d.title) + '</h3>' + subtitle + '</div>' + contact + '</div><div class="ana-search-v2-list">' + html + '</div>' + note + '</div></div>';
  }

  function buildPersonSearch(d) {
    return '<div class="sbp-search"><div class="sbp-back"></div><div class="sbp-card"><div class="sbp-tape sbp-tape-left"></div><div class="sbp-tape sbp-tape-right"></div><div class="sbp-side"><div class="sbp-photo"><img src="' + image(d.img) + '"><span>' + text(d.photoNote) + '</span></div><div class="sbp-stamp"></div></div><div class="sbp-main"><div class="sbp-head"><div class="sbp-kicker">' + text(d.kicker) + '</div><div class="sbp-title">' + text(d.title) + '</div><div class="sbp-subtitle">' + text(d.subtitle) + '</div><div class="sbp-tags">' + tags(d.tags) + '</div></div><div class="sbp-contact"><div class="sbp-contact-label">contacto</div><div class="sbp-contact-value">' + text(d.contact) + '</div></div></div><div class="sbp-grid"><div class="sbp-block"><div class="sbp-block-title">contexto</div><div class="sbp-block-body">' + blocks(d.context) + '</div></div><div class="sbp-block"><div class="sbp-block-title">dinámica</div><div class="sbp-block-body">' + blocks(d.dynamic) + '</div></div><div class="sbp-block"><div class="sbp-block-title">qué busco</div><div class="sbp-block-body">' + blocks(d.looking) + '</div></div><div class="sbp-block"><div class="sbp-block-title">qué ofrezco</div><div class="sbp-block-body">' + blocks(d.offer) + '</div></div><div class="sbp-block sbp-block-wide"><div class="sbp-block-title">notas</div><div class="sbp-block-body">' + blocks(d.notes) + '</div></div></div><div class="sbp-foot"><div class="sbp-note">' + text(d.foot) + '</div></div><div class="sbp-deco-branch"></div><div class="sbp-deco-flower"></div></div></div>';
  }

  function buildPlotSearch(d) {
    return '<div class="sbt-plot"><div class="sbt-back"></div><div class="sbt-board"><div class="sbt-tape"></div><div class="sbt-head"><div class="sbt-kicker">' + text(d.kicker) + '</div><div class="sbt-title">' + text(d.title) + '</div><div class="sbt-subtitle">' + text(d.subtitle) + '</div></div><div class="sbt-top"><div class="sbt-photo"><img src="' + image(d.img) + '"><span>' + text(d.photoNote) + '</span></div><div class="sbt-intro"><div class="sbt-intro-label">propuesta general</div><div class="sbt-intro-text">' + text(d.intro) + '</div></div></div><div class="sbt-grid"><div class="sbt-note-card sbt-idea"><div class="sbt-note-title">idea</div><div class="sbt-note-body">' + blocks(d.idea) + '</div></div><div class="sbt-note-card sbt-tone"><div class="sbt-note-title">tono</div><div class="sbt-note-body">' + blocks(d.tone) + '</div></div><div class="sbt-note-card sbt-looking"><div class="sbt-note-title">busco</div><div class="sbt-note-body">' + blocks(d.looking) + '</div></div><div class="sbt-note-card sbt-offer"><div class="sbt-note-title">ofrezco</div><div class="sbt-note-body">' + blocks(d.offer) + '</div></div></div><div class="sbt-info"><div><strong>ritmo</strong><span>' + text(d.rhythm) + '</span></div><div><strong>cupos</strong><span>' + text(d.slots) + '</span></div><div><strong>contacto</strong><span>' + text(d.contact) + '</span></div></div><div class="sbt-foot">' + text(d.foot) + '</div><div class="sbt-deco-one"></div><div class="sbt-deco-two"></div></div></div>';
  }

  function buildMiniSearch(d) {
    var variant =
      attr(
        d.variant ||
        'smr-sage'
      );

    return '<div class="smr-search ' + variant + '"><div class="smr-paper"><div class="smr-pin"></div><div class="smr-kicker">' + text(d.kicker) + '</div><div class="smr-title">' + text(d.title) + '</div><div class="smr-body">' + blocks(d.body) + '</div><div class="smr-data"><div><strong>ritmo</strong><span>' + text(d.rhythm) + '</span></div><div><strong>cupos</strong><span>' + text(d.slots) + '</span></div><div><strong>contacto</strong><span>' + text(d.contact) + '</span></div></div><div class="smr-foot">' + text(d.foot) + '</div></div></div>';
  }

  function buildScrap(d) {
    return '<div class="stb-post"><div class="stb-paper-back"></div><div class="stb-paper"><div class="stb-tape stb-tape-left"></div><div class="stb-tape stb-tape-right"></div><div class="stb-head"><div class="stb-kicker">' + text(d.kicker) + '</div><div class="stb-title">' + text(d.title) + '</div><div class="stb-subtitle">' + text(d.subtitle) + '</div></div><div class="stb-divider"></div><div class="stb-body">' + blocks(d.body) + '</div><div class="stb-footer"><div class="stb-note">' + text(d.foot) + '</div></div><div class="stb-flower"></div><div class="stb-branch"></div></div></div>';
  }

  function buildNote(d) {
    var variant =
      attr(
        d.variant ||
        'stn-sage'
      );

    var reverse =
      attr(
        d.reverse ||
        ''
      );

    var classes =
      reverse
        ? variant + ' ' + reverse
        : variant;

    return '<div class="stn-note ' + classes + '"><div class="stn-paper"><div class="stn-tape"></div><div class="stn-pin"></div><div class="stn-head"><div class="stn-kicker">' + text(d.kicker) + '</div><div class="stn-title">' + text(d.title) + '</div></div><div class="stn-body">' + blocks(d.body) + '</div><div class="stn-foot">' + text(d.foot) + '</div></div></div>';
  }

  function buildStarter(d) {
    return '<div class="am-starter-mini"><div class="asm-date"><b>' + text(d.day) + '</b><span>' + text(d.month) + '</span></div><div class="asm-info"><strong>' + text(d.place) + '</strong><div class="asm-meta"><span><i class="material-symbols-outlined">calendar_month</i> ' + text(d.date) + '</span><span><i class="material-symbols-outlined">schedule</i> ' + text(d.time) + '</span><span><i class="material-symbols-outlined">location_on</i> ' + text(d.zone) + '</span></div></div></div>';
  }

  function buildSpotify(d) {
    var trackId =
      spotifyTrackId(
        d.spotifyUrl
      );

    if (!trackId) return '';

    return '<div class="asp-spotify" data-spotify-track="' + attr(trackId) + '" style="display:flex;align-items:stretch;gap:12px;box-sizing:border-box;width:100%;max-width:640px;margin:24px auto;padding:12px;background:linear-gradient(180deg,rgba(255,255,255,.2),rgba(255,255,255,.08)),var(--bg-panel);border:1px solid var(--line);box-shadow:var(--shadow-soft);"><div class="asp-spotify-label" style="display:flex;flex:0 0 86px;min-height:152px;flex-direction:column;align-items:center;justify-content:center;gap:9px;background:var(--accent-sage,#88997f);color:#fff;text-align:center;"><b aria-hidden="true" style="font-family:serif;font-size:34px;font-weight:400;line-height:1;">♪</b><span style="font-family:var(--font-base);font-size:8px;font-weight:800;line-height:1.25;letter-spacing:.16em;text-transform:uppercase;">' + text(d.label || 'soundtrack') + '</span></div><div class="asp-spotify-player" style="flex:1;min-width:0;"><iframe title="Reproductor de Spotify" src="https://open.spotify.com/embed/track/' + attr(trackId) + '" width="100%" height="152" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style="display:block;width:100%;height:152px;border:0;border-radius:12px;"></iframe></div></div>';
  }

  function buildFragment(d) {
    return '<div class="snr-fragment"><div class="snr-paper"><div class="snr-tape"></div><div class="snr-kicker">' + text(d.kicker) + '</div><div class="snr-title">' + text(d.title) + '</div><div class="snr-body">' + blocks(d.body) + '</div><div class="snr-foot">' + text(d.foot) + '</div></div></div>';
  }

  function buildByType(type, d) {
    if (type === 'sbu-baul') {
      return buildBaul(d);
    }

    if (type === 'scr-chrono') {
      return buildChrono(d);
    }

    if (type === 'ana-relations') {
      return buildRelations(d);
    }

    if (type === 'ana-search-v2') {
      return buildSearchV2(d);
    }

    if (type === 'sbp-search') {
      return buildPersonSearch(d);
    }

    if (type === 'sbt-plot') {
      return buildPlotSearch(d);
    }

    if (type === 'smr-search') {
      return buildMiniSearch(d);
    }

    if (type === 'stb-post') {
      return buildScrap(d);
    }

    if (type === 'stn-note') {
      return buildNote(d);
    }

    if (type === 'am-starter') {
      return buildStarter(d);
    }

    if (type === 'asp-spotify') {
      return buildSpotify(d);
    }

    if (type === 'snr-fragment') {
      return buildFragment(d);
    }

    return '';
  }

  function buildCode() {
    var d =
      readForm();

    return buildByType(
      currentType,
      d
    );
  }

  function showPreview(type) {
    var def =
      definitions[type];

    if (
      !def ||
      !previewSlot ||
      !previewTitle
    ) {
      return;
    }

    previewTitle.innerHTML =
      esc(def.title);

    previewSlot.innerHTML =
      buildByType(
        type,
        defaultData(type)
      );

    openModal(
      previewModal
    );
  }

  function showOutput() {
    var spotifyData;

    if (!output) return;

    if (currentType === 'asp-spotify') {
      spotifyData = readForm();

      if (!spotifyTrackId(spotifyData.spotifyUrl)) {
        window.alert(
          'Pega un enlace válido de una canción de Spotify.'
        );
        return;
      }
    }

    output.value =
      buildCode();

    closeModal(
      formModal
    );

    openModal(
      outputModal
    );
  }

  function copyOutput() {
    if (!output) return;

    output.focus();
    output.select();

    try {
      document.execCommand('copy');
      window.alert(
        'Código copiado.'
      );
    } catch (error) {
      window.alert(
        'Selecciona el código y cópialo manualmente.'
      );
    }
  }

  function handleClick(event) {
    var e =
      event ||
      window.event;

    var target =
      e.target ||
      e.srcElement;

    var button;
    var type;
    var def;
    var repeat;
    var list;
    var items;
    var item;

    button =
      findUp(
        target,
        'data-ana-template'
      );

    if (button) {
      openGenerator(
        button.getAttribute(
          'data-ana-template'
        )
      );

      if (e.preventDefault) {
        e.preventDefault();
      }

      return false;
    }

    button =
      findUp(
        target,
        'data-ana-preview'
      );

    if (button) {
      showPreview(
        button.getAttribute(
          'data-ana-preview'
        )
      );

      if (e.preventDefault) {
        e.preventDefault();
      }

      return false;
    }

    button =
      findUp(
        target,
        'data-ana-add'
      );

    if (button) {
      type =
        button.getAttribute(
          'data-ana-add'
        );

      def =
        getRepeatDefinition(type);

      repeat =
        findUp(
          button,
          'data-ana-repeat'
        );

      if (
        def &&
        repeat
      ) {
        list =
          repeat.querySelector(
            '.tgen-repeat-list'
          );

        if (list) {
          list.insertAdjacentHTML(
            'beforeend',
            repeatItemHTML(def)
          );
        }
      }

      return;
    }

    button =
      findUp(
        target,
        'data-ana-remove'
      );

    if (button) {
      item =
        findUp(
          button,
          'data-ana-repeat-item'
        );

      if (
        item &&
        item.parentNode
      ) {
        items =
          item.parentNode.querySelectorAll(
            '[data-ana-repeat-item]'
          );

        if (items.length > 1) {
          item.parentNode.removeChild(
            item
          );
        }
      }

      return;
    }

    button =
      findUp(
        target,
        'data-ana-close'
      );

    if (button) {
      if (
        button.getAttribute(
          'data-ana-close'
        ) === 'form'
      ) {
        closeModal(
          formModal
        );
      } else if (
        button.getAttribute(
          'data-ana-close'
        ) === 'preview'
      ) {
        closeModal(
          previewModal
        );
      } else {
        closeModal(
          outputModal
        );
      }

      return;
    }

    if (target === formModal) {
      closeModal(formModal);
    }

    if (target === previewModal) {
      closeModal(previewModal);
    }

    if (target === outputModal) {
      closeModal(outputModal);
    }
  }

  function init() {
    var buildButton;
    var copyButton;
    var clearFormButton;
    var importLoadButton;
    var importClearButton;

    if (initialized) return;

    refreshElements();

    if (
      !root ||
      !formModal ||
      !previewModal ||
      !outputModal
    ) {
      return;
    }

    initialized = true;

    if (document.addEventListener) {
      document.addEventListener(
        'click',
        handleClick,
        false
      );
    } else if (
      document.attachEvent
    ) {
      document.attachEvent(
        'onclick',
        handleClick
      );
    }

    buildButton =
      document.getElementById(
        'anaGenBuild'
      );

    copyButton =
      document.getElementById(
        'anaGenCopy'
      );

    clearFormButton =
      document.getElementById(
        'anaGenClearForm'
      );

    importLoadButton =
      document.getElementById(
        'anaGenImportLoad'
      );

    importClearButton =
      document.getElementById(
        'anaGenImportClear'
      );

    if (buildButton) {
      buildButton.onclick =
        showOutput;
    }

    if (copyButton) {
      copyButton.onclick =
        copyOutput;
    }

    if (clearFormButton) {
      clearFormButton.onclick =
        clearCurrentForm;
    }

    if (importLoadButton) {
      importLoadButton.onclick =
        loadImportedCode;
    }

    if (importClearButton) {
      importClearButton.onclick =
        clearImportedCode;
    }
  }

  if (
    document.readyState ===
    'loading'
  ) {
    if (
      document.addEventListener
    ) {
      document.addEventListener(
        'DOMContentLoaded',
        init,
        false
      );
    } else if (
      window.attachEvent
    ) {
      window.attachEvent(
        'onload',
        init
      );
    }
  } else {
    init();
  }

  window.ANAMNESISTablillas = {
    open: openGenerator,
    build: buildCode
  };

}(window, document));
