function show_craft() {
    $('.principal-container')[0].innerHTML = ''
    $('.principal-container')[0].className = "principal-container"
    let titleH = create_h('h2', 'craft-title text-center', "Catégories")
    $('.principal-container')[0].appendChild(titleH)

    let categoryDiv = create_div('text-center category-div')
    make_content(categoryDiv, crafts.sort())
}

function make_content(categoryDiv, array, selectItem = false, selectedCategory = '') {
    array.map((craft, index) => {
        let oneCategory = create_div('text-center  category')
        if (index == 0) {
            oneCategory.style.borderTop = "1px solid rgba(92, 92, 92, 0.733)"
            oneCategory.style.borderBottom = "1px solid rgba(92, 92, 92, 0.733)"
        }
        else {
            oneCategory.style.borderBottom = "1px solid rgba(92, 92, 92, 0.733)"
        }
        oneCategory.style.borderLeft = "1px solid rgba(92, 92, 92, 0.733)"
        oneCategory.style.borderRight = "1px solid rgba(92, 92, 92, 0.733)"
        if (selectItem) {
            oneCategory.onclick = () => { select_item(craft[0], selectedCategory) }
        }
        else {
            oneCategory.onclick = () => { select_category(craft[0]) }
        }
        let category = create_h('h5', false, craft[0])
        oneCategory.appendChild(category)
        categoryDiv.appendChild(oneCategory)
    })
    $('.principal-container')[0].appendChild(categoryDiv)
    let bottomChoice = create_div('bottom-choice')
    if (selectItem) {
        let returnCategory = create_button('btn', 'Retourner aux catégories', () => { show_craft() })
        bottomChoice.appendChild(returnCategory)
    }
    render_home_button(bottomChoice)
    $('.principal-container')[0].style.maxHeight = ($(window).height() - $('.bottom-choice').height()) + "px"
}

function select_item(selectedItem, selectedCategory) {
    $('.principal-container')[0].innerHTML = ''
    $('.principal-container')[0].className = "principal-container"
    let titleH = create_h('h2', 'craft-title text-center', selectedCategory + " " + selectedItem)
    let ressourceDiv = create_div('text-center principal-ressource-div')
    $('.principal-container')[0].appendChild(titleH)
    crafts.map(craft => {
        craft[1].map(item => {
            let categoryName = craft[0]
            if (item[0] == selectedItem && craft[0] == selectedCategory) {
                let divLine
                item[1].map((ressource, index) => {
                    if (index % 2 == 0) {
                        divLine = create_div('text-left ressource-line row')
                        let pLine = create_p("ressource-name", ressource)
                        divLine.appendChild(pLine)
                    }
                    else {
                        let pLine = create_p("ressource-count", ressource)
                        divLine.appendChild(pLine)
                        ressourceDiv.appendChild(divLine)
                    }
                })
            }
        })
    })
    $('.principal-container')[0].appendChild(ressourceDiv)
    let bottomChoice = create_div('bottom-choice')
    let returnChoice = create_button('btn', 'Retourner au choix : ' + selectedCategory, () => { select_category(selectedCategory) })
    let returnCategory = create_button('btn', 'Retourner aux catégories', () => { show_craft() })
    bottomChoice.appendChild(returnChoice)
    bottomChoice.appendChild(returnCategory)
    render_home_button(bottomChoice)
    $('.principal-container')[0].style.maxHeight = ($(window).height() - $('.bottom-choice').height()) + "px"
}

function select_category(choice) {
    $('.principal-container')[0].innerHTML = ''
    $('.principal-container')[0].className = "principal-container"
    let titleH = create_h('h2', 'craft-title text-center', choice)
    $('.principal-container')[0].appendChild(titleH)
    let categoryDiv = create_div('text-center category-div')
    crafts.map(craft => {
        if (craft[0] == choice) {
            make_content(categoryDiv, craft[1], true, craft[0])
        }
    })
}