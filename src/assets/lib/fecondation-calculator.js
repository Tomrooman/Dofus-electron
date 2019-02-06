function calculFecondation() {
  $('.top-infos')[0].innerHTML = '';
  $('.top-infos').hide();
  $('.principal-container')[0].innerHTML = '';
  $('.principal-container')[0].className = 'principal-container';
  const infos_title = create_h('h2', 'infos-title text-center', 'Calculer les fécondations');
  $('.principal-container')[0].appendChild(infos_title);
  const ressourceDiv = create_div('text-center principal-parcho-div');
  if (json['Mes dragodindes'].length) {
    calculate(ressourceDiv);
  } else {
    ressourceDiv.appendChild(create_h('h5', false, 'Aucune dragodidne'));
    $('.principal-container')[0].appendChild(ressourceDiv);
  }
  // $('.principal-container')[0].appendChild(div);
  const bottomChoice = create_div('bottom-choice');
  render_home_button(bottomChoice);
  $('.principal-container')[0].style.maxHeight = `${$(window).height() - $('.bottom-choice').height()}px`;
}

function calculate(ressourceDiv) {
  const parchoContainer = create_div('parcho-container');
  const sortedMyDD = sort_my_dd();
  let date_base;
  if (json.last[0]) {
    date_base = moment(json.last[1], 'DD/MM/YYYY HH:mm').toDate();
  } else {
    date_base = moment();
  }
  sortedMyDD.map((drago) => {
    const divLine = create_div('ressource-line row');
    const dateObject = moment().format('DD/MM/YYYY HH:mm');
    const pName = create_p('fecond-name', drago.name);
    divLine.appendChild(pName);
    const pLine = create_p('fecond-count', drago.time);
    divLine.appendChild(pLine);
    parchoContainer.appendChild(divLine);
    ressourceDiv.appendChild(parchoContainer);
  });
  $('.principal-container')[0].appendChild(ressourceDiv);
}

function sort_my_dd() {
  const myDD = [];
  json['Mes dragodindes'].map((drago) => {
    const divLine = create_div('ressource-line row');
    let selectedDragoName;
    let selectedDragoTime;
    dragodindes.map((dragodinde) => {
      if (dragodinde[0][0] == drago) {
        selectedDragoName = dragodinde[0][0];
        selectedDragoTime = dragodinde[1][0].substr(0, dragodinde[1][0].length - 1);
        myDD.push({ time: parseInt(selectedDragoTime), name: selectedDragoName });
      }
    });
  });
  return _.reverse(_.sortBy(myDD, 'time'));
}
