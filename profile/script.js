class carousel {

constructor (element, option = {}) {
    this.element = element
    this.option = object.assign({}, {
        slidesToScroll: 1
        slidesVisible: 1
    }, option)
    this.children = [].slice.call(element.children)
    let root = this.createDivWithClass('carousel')
    let container = this.createDivWithClass('carousel-container')
    root.appendChild(container)
    this.element.appendChild(root)
    this.children.forEach(function (child) => {
        this.createDivWithClass('carousel-item')
        item.appendChild(child)
        container.appendChild(item)
    });
}

createDivWithClass (className){
    let div = document.createElement('div')
    div.setAttribute('class', className)
    return div
}

}

document.addEventListener('DOMContentLoaded', function(){

})

new carousel(document.querySelector('#item1m'), {
    slidesToScroll: 3
    slidesVisible: 3
})