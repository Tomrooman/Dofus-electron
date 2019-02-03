function create_div(className, onclick = false) {
    let div = document.createElement('div')
    if (!!className) {
        div.className = className
    }
    if (!!onclick) {
        div.onclick = onclick
    }
    return div;
}

function create_p(className, textContent) {
    let p = document.createElement('p')
    if (!!className) {
        p.className = className
    }
    p.textContent = textContent
    return p;
}

function create_h(size, className, textContent) {
    let title
    if (size == 'h1') {
        title = document.createElement('h1')
    }
    if (size == 'h2') {
        title = document.createElement('h2')
    }
    if (size == 'h3') {
        title = document.createElement('h3')
    }
    if (size == 'h4') {
        title = document.createElement('h4')
    }
    if (size == 'h5') {
        title = document.createElement('h5')
    }
    if (size == 'h6') {
        title = document.createElement('h6')
    }
    if (!!className) {
        title.className = className
    }
    title.textContent = textContent
    return title;
}

function create_button(className, innerText, onclick = false) {
    let button = document.createElement('button')
    if (!!className) {
        button.className = className
    }
    if (!!onclick) {
        button.onclick = onclick
    }
    button.innerText = innerText
    return button;
}

function create_input(className, value, placeholder) {
    let input = document.createElement('input')
    if (!!className) {
        input.className = className
    }
    if (!!value) {
        input.value = value
    }
    if (!!placeholder) {
        input.placeholder = placeholder
    }
    return input
}