function show_parchemin() {
    $('.principal-container')[0].innerHTML = ''
    $('.principal-container')[0].className = "principal-container"
    let principalParchoDiv = create_div('principal-parcho-div row')
    let parchoDiv = create_div('text-center col-6 parcho-div')
    let dragodindesDiv = create_div('text-center col-6 parcho-div')
    let parchoTitle = create_h('h3', "parcho-title text-center", "Parchemins")
    let dragodindesTitle = create_h('h3', "parcho-title text-center", "Dragodindes")
    parchoDiv.appendChild(parchoTitle)
    dragodindesDiv.appendChild(dragodindesTitle)
    let inputParcho = create_input("col-10", false, "Chercher")
    let inputDragodinde = create_input("col-10", false, "Chercher")
    inputParcho.oninput = parchoKeyPress
    inputDragodinde.oninput = dragodindeKeyPress
    parchoDiv.appendChild(inputParcho)
    dragodindesDiv.appendChild(inputDragodinde)
    let listDivParcho = create_div('list-div-parcho')
    let listDivDragodinde = create_div('list-div-dragodinde')

    dragodindes.map(dragodinde => {
        let parcho = create_p("text-center", dragodinde[2])
        listDivParcho.appendChild(parcho)

        let drago = create_p("text-center", dragodinde[0])
        listDivDragodinde.appendChild(drago)
    })
    parchoDiv.appendChild(listDivParcho)
    dragodindesDiv.appendChild(listDivDragodinde)
    principalParchoDiv.appendChild(parchoDiv)
    principalParchoDiv.appendChild(dragodindesDiv)
    $('.principal-container')[0].appendChild(principalParchoDiv)
    let bottomChoice = create_div('bottom-choice')
    render_home_button(bottomChoice)
    $('.principal-container')[0].style.maxHeight = ($(window).height() - $('.bottom-choice').height()) + "px"
}

function dragodindeKeyPress(e) {
    $(".list-div-dragodinde")[0].innerHTML = ''
    $(".list-div-parcho")[0].innerHTML = ''
    dragodindes.map(dragodinde => {
        if (dragodinde[0][0].indexOf(e.target.value) != -1 || e.target.value == "") {
            let parcho = create_p("text-center", dragodinde[2])
            $(".list-div-parcho")[0].appendChild(parcho)

            let drago = create_p("text-center", dragodinde[0])
            $(".list-div-dragodinde")[0].appendChild(drago)
        }
    })
}

function parchoKeyPress(e) {
    $(".list-div-dragodinde")[0].innerHTML = ''
    $(".list-div-parcho")[0].innerHTML = ''
    dragodindes.map(dragodinde => {
        if (dragodinde[2][0].indexOf(e.target.value) != -1 || e.target.value == "") {
            let parcho = create_p("text-center", dragodinde[2])
            $(".list-div-parcho")[0].appendChild(parcho)

            let drago = create_p("text-center", dragodinde[0])
            $(".list-div-dragodinde")[0].appendChild(drago)
        }
    })
}