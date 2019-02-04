function show_craft() {
    console.log('show craft function')
    $('.principal-container')[0].innerHTML = ''
    $('.principal-container')[0].className = "principal-container"
    let title = create_h('h2', 'craft-title text-center', 'Catégories')
    $('.principal-container')[0].appendChild(title)
    let bottomChoice = create_div('bottom-choice')
    render_home_button(bottomChoice)
    $('.principal-container')[0].style.maxHeight = ($(window).height() - $('.bottom-choice').height()) + "px"
    console.log('CRAFTS : ', crafts)
}