class carrousel {
    
    /*
    * @param {HTMLElement} element
    * @param {objet} options
    * @param {objet} options.slidesToScroll nombre d'éléments a faire défiler
    * @param {objet} options.SlideVisible nombre d'élements visible dans un slide
    */

    constructor (element, options = {}) {
        this.element = element
        this.options = Object.assign({}, {
            slidesToScroll: 1,
            slidesVisible: 1
        }, options)
        let children = [].slice.call(element.children)
        let root = this.createDivWithClaass('carousel')
        this.container = this.createDivWithClaass('carousel-container')
        root.appendChild(this.container)
        this.element.appendChild(root)
        this.items = children.map((child) => {
            let item = this.createDivWithClaass('caroussel-item')
            item.appendChild(child)
            this.container.appendChild(item)
            return item
        })
        this.setStyle()
        this.createNavigation()
    }



    /*
    * applique les bonnes dimensions au carrousel
    */
    setStyle () {
        let ratio = this.items.length / this.options.slidesVisible
        this.container.style.width = (ratio * 100) + "%"
        this.item.array.forEach(item => item.style.width = ((100 / this.options.slidesVisible) / ratio) + "%")
    }


    createNavigation (){

    }

    /*
    * @param {string} className
    * @returns {HTMLElement}
    */

   createDivWithClaass (className) {
    let div = document.createElement('div')
    div.setAttribute('class', className)
    return div
   }
}

document.addEventListener('DOMContentLoaded', function (){

    new carrousel (document.querySelector('.carrousel'), {
        slidesToScroll: 2,
        slidesVisible: 3
    })

})