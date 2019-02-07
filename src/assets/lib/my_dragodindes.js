function myDragodindes() {
  $('.top-infos')[0].innerHTML = '';
  $('.top-infos').hide();
  $('.principal-container')[0].innerHTML = '';
  $('.principal-container')[0].className = 'principal-container';
  const ressourceDiv = create_div('text-center principal-parcho-div');
  const titleH = create_h('h2', 'craft-title text-center', 'Mes dragodindes');
  $('.principal-container')[0].appendChild(titleH);
  const parchoContainer = create_div('parcho-container');
  if (json['Mes dragodindes'].length) {
    const input = create_input('input-parcho', '', 'Rechercher');
    input.oninput = myddResearch;
    ressourceDiv.appendChild(input);
    json['Mes dragodindes'].sort().map((dragodinde) => {
        const divLine = create_div('ressource-line row');
        const pName = create_p('mydd-name', dragodinde);
        divLine.appendChild(pName);
        parchoContainer.appendChild(divLine);
      });
    ressourceDiv.appendChild(parchoContainer);
  } else {
    const nodd = create_p('text-center no-dd-title', 'Aucune dragodinde');
    parchoContainer.appendChild(nodd);
    ressourceDiv.appendChild(parchoContainer);
  }
  const addDDBtn = create_button('btn btn-add', 'Ajouter une dragodinde', addDD);
  const rmvDDBtn = create_button('btn btn-remove', 'Supprimer une dragodinde', rmvDD);
  $('.principal-container')[0].appendChild(ressourceDiv);
  const bottomChoice = create_div('bottom-choice');
  bottomChoice.appendChild(addDDBtn);
  bottomChoice.appendChild(rmvDDBtn);
  render_home_button(bottomChoice);
  $('.principal-container')[0].style.maxHeight = `${$(window).height() - $('.bottom-choice').height() }px`;
}

function myddResearch(e, remove = false) {
  $('.parcho-container')[0].innerHTML = '';
  json['Mes dragodindes'].map((dragodinde) => {
    if (e.target.value == '' || dragodinde.toLowerCase().indexOf(e.target.value.toLowerCase()) != -1) {
        let divLine;
        if (remove == 'remove') {
            divLine = create_div('rmvDD-line row', addThisDD);
          } else {
            divLine = create_div('ressource-line row', addThisDD);
          }
        const pName = create_p('mydd-name', dragodinde);
        divLine.appendChild(pName);
        $('.parcho-container')[0].appendChild(divLine);
      }
  });
}

function addFilter(e) {
  $('.parcho-container')[0].innerHTML = '';
  dragodindes.map((dragodinde) => {
    if (e.target.value == '' || dragodinde[0][0].toLowerCase().indexOf(e.target.value) != -1) {
        const divLine = create_div('addDD-line row', addThisDD);
        const pName = create_p('mydd-name', dragodinde[0]);
        divLine.appendChild(pName);
        $('.parcho-container')[0].appendChild(divLine);
      }
  });
}

function addDD() {
  $('.principal-container')[0].innerHTML = '';
  $('.principal-container')[0].className = 'principal-container';
  const ressourceDiv = create_div('text-center principal-parcho-div');
  const titleH = create_h('h2', 'craft-title text-center', 'Ajouter une dragodinde');
  $('.principal-container')[0].appendChild(titleH);
  const input = create_input('input-parcho', '', 'Rechercher');
  input.oninput = addFilter;
  ressourceDiv.appendChild(input);
  const parchoContainer = create_div('parcho-container');
  dragodindes.map((dragodinde) => {
    const divLine = create_div('addDD-line row', addThisDD);
    const pName = create_p('mydd-name', dragodinde[0]);
    divLine.appendChild(pName);
    parchoContainer.appendChild(divLine);
  });
  ressourceDiv.appendChild(parchoContainer);
  const returnDDBtn = create_button('btn', 'Retourner à mes dragodindes', myDragodindes);
  $('.principal-container')[0].appendChild(ressourceDiv);
  const bottomChoice = create_div('bottom-choice');
  bottomChoice.appendChild(returnDDBtn);
  render_home_button(bottomChoice);
  $('.principal-container')[0].style.maxHeight = `${$(window).height() - $('.bottom-choice').height() }px`;
}

function rmvDD() {
  $('.principal-container')[0].innerHTML = '';
  $('.principal-container')[0].className = 'principal-container';
  const ressourceDiv = create_div('text-center principal-parcho-div');
  const titleH = create_h('h2', 'craft-title text-center', 'Supprimer une dragodinde');
  $('.principal-container')[0].appendChild(titleH);
  const input = create_input('input-parcho', '', 'Rechercher');
  input.oninput = (e) => { myddResearch(e, 'remove'); };
  ressourceDiv.appendChild(input);
  const parchoContainer = create_div('parcho-container');
  json['Mes dragodindes'].map((dragodinde) => {
    const divLine = create_div('rmvDD-line row', rmvThisDD);
    const pName = create_p('mydd-name', dragodinde);
    divLine.appendChild(pName);
    parchoContainer.appendChild(divLine);
  });
  ressourceDiv.appendChild(parchoContainer);
  const returnDDBtn = create_button('btn', 'Annuler la suppression', myDragodindes);
  $('.principal-container')[0].appendChild(ressourceDiv);
  const bottomChoice = create_div('bottom-choice');
  bottomChoice.appendChild(returnDDBtn);
  render_home_button(bottomChoice);
  $('.principal-container')[0].style.maxHeight = `${$(window).height() - $('.bottom-choice').height()}px`;
}

function addThisDD() {
  json['Mes dragodindes'].push(this.children[0].innerHTML);
  fs.writeFileSync(`${__dirname }/assets/dofus-electron.json`, JSON.stringify(json));
  myDragodindes();
}

function rmvThisDD() {
  const index = json['Mes dragodindes'].indexOf(this.children[0].innerHTML);
  json['Mes dragodindes'].splice(index, 1);
  fs.writeFileSync(`${__dirname }/assets/dofus-electron.json`, JSON.stringify(json));
  myDragodindes();
}
