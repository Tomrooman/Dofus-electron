function lastDragodindes() {
  $('.top-infos')[0].innerHTML = '';
  $('.top-infos').hide();
  $('.principal-container')[0].innerHTML = '';
  $('.principal-container')[0].className = 'principal-container';
  const ressourceDiv = create_div('text-center principal-parcho-div');
  const titleH = create_h('h2', 'craft-title text-center', 'Dernière dragodinde fécondée');
  $('.principal-container')[0].appendChild(titleH);
  const parchoContainer = create_div('parcho-container');
  if (json['Mes dragodindes'].length) {
    const input = create_input('input-parcho', '', 'Rechercher');
    input.oninput = myddResearch;
    ressourceDiv.appendChild(input);
    json['Mes dragodindes'].sort().map((dragodinde) => {
      const divLine = create_div('last-line row', addLastDD);
      const pName = create_p('mydd-name', dragodinde);
      divLine.appendChild(pName);
      parchoContainer.appendChild(divLine);
    });
    ressourceDiv.appendChild(parchoContainer);
  } else {
    const nodd = create_p('text-center no-dd-title', 'Aucune dragodinde actuellement');
    parchoContainer.appendChild(nodd);
    ressourceDiv.appendChild(parchoContainer);
  }
  $('.principal-container')[0].appendChild(ressourceDiv);
  const bottomChoice = create_div('bottom-choice');
  const rmvLast = create_button('btn', 'Supprimer la dernière dragodinde fécondée', rmvLastDD);
  bottomChoice.appendChild(rmvLast);
  render_home_button(bottomChoice);
  $('.principal-container')[0].style.maxHeight = `${$(window).height() - $('.bottom-choice').height()}px`;
}

function rmvLastDD() {
  json.last[0] = '';
  json.last[1] = '';
  fs.writeFileSync(`${__dirname}/assets/dofus-electron.json`, JSON.stringify(json));
  show_home();
}

function myddResearch(e) {
  $('.parcho-container')[0].innerHTML = '';
  json['Mes dragodindes'].map((dragodinde) => {
    if (e.target.value == '' || dragodinde.toLowerCase().indexOf(e.target.value.toLowerCase()) != -1) {
      const divLine = create_div('last-line row', addLastDD);
      const pName = create_p('mydd-name', dragodinde);
      divLine.appendChild(pName);
      $('.parcho-container')[0].appendChild(divLine);
    }
  });
}

function addLastDD() {
  json.last[0] = this.children[0].innerHTML;
  json.last[1] = moment().format('DD/MM/YYYY HH:mm');
  const dds = json['Mes dragodindes'].filter((drago, index) => {
    if (drago != this.children[0].innerHTML && drago != null) {
      return drago;
    }
  });
  json['Mes dragodindes'] = dds;
  fs.writeFileSync(`${__dirname}/assets/dofus-electron.json`, JSON.stringify(json));
  myDragodindes();
}
