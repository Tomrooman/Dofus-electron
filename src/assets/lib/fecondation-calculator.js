function calculFecondation() {
    $('.top-infos')[0].innerHTML = ''
    $('.top-infos').hide()
    $('.principal-container')[0].innerHTML = ''
    $('.principal-container')[0].className = "principal-container"
    let infos_title = create_h('h2', 'infos-title text-center', 'Calculer les fécondations')
    $('.principal-container')[0].appendChild(infos_title)
    console.log("Calculer les fécondations")
    if (!!json['last'][0]) {
        console.log('calculate with last dd : ', moment().format('DD/MM/YYYY HH:mm'))
    }
    else {
        console.log('calculate withtout last dd')
    }
    let bottomChoice = create_div('bottom-choice')
    render_home_button(bottomChoice)
    $('.principal-container')[0].style.maxHeight = ($(window).height() - $('.bottom-choice').height()) + "px"
}