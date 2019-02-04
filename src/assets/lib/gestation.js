function show_gestation() {
    $('.principal-container')[0].innerHTML = ''
    $('.principal-container')[0].className = "principal-container"
    let titleH = create_h('h2', 'craft-title text-center', "Gestation")
    let ressourceDiv = create_div('text-center principal-ressource-div')
    $('.principal-container')[0].appendChild(titleH)
    let gestationContainer = create_div('gestation-container')
    let divLine
    let input = create_input('input-parcho', '', "Rechercher")
    input.oninput = search_gestation
    ressourceDiv.appendChild(input)
    dragodindes.map((dragodinde, index) => {
        if (index % 2 == 0) {
            divLine = create_div('text-left gestation-line row')
            let pLine = create_p("ressource-name", dragodinde[0])
            divLine.appendChild(pLine)
        }
        else {
            let pLine = create_p("ressource-count", dragodinde[1])
            divLine.appendChild(pLine)
            gestationContainer.appendChild(divLine)
        }
    })
    ressourceDiv.appendChild(gestationContainer)
    $('.principal-container')[0].appendChild(ressourceDiv)
    let bottomChoice = create_div('bottom-choice')
    render_home_button(bottomChoice)
    $('.principal-container')[0].style.maxHeight = ($(window).height() - $('.bottom-choice').height()) + "px"
}

function search_gestation(e) {
    $(".gestation-container")[0].innerHTML = ''
    dragodindes.map(dragodinde => {
        if (dragodinde[0][0].toLocaleLowerCase().indexOf(e.target.value) != -1 || e.target.value == '') {
            let divLine = create_div('text-left gestation-line row')
            let pName = create_p("ressource-name", dragodinde[0])
            divLine.appendChild(pName)
            let pLine = create_p("ressource-count", dragodinde[1])
            divLine.appendChild(pLine)
            $(".gestation-container")[0].appendChild(divLine)
        }
    })
}