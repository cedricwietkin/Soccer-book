class carrousel {
    

    /*
    * @callback moveCallbacks
    * @param {number} index
    */



    /*
    * @param {HTMLElement} element
    * @param {objet} options
    * @param {objet} options.slidesToScroll nombre d'éléments a faire défiler
    * @param {objet} options.SlideVisible nombre d'élements visible dans un slide
    * @param {boolean} options.loop doit on boucler en fin de carrousel
    */

    constructor (element, options = {}) {
        this.element = element
        this.options = Object.assign({}, {
            slidesToScroll: 1,
            slidesVisible: 1,
            loop: false
        }, options)
        let children = [].slice.call(element.children)
        this.currentItem = 0
        this.root = this.createDivWithClaass('carousel')
        this.container = this.createDivWithClaass('carousel-container')
        this.root.appendChild(this.container)
        this.element.appendChild(this.root)
        this.moveCallbacks = []
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
        this.items.forEach(item => item.style.width = ((100 / this.options.slidesVisible) / ratio) + "%")
    }


    createNavigation (){
        let nextButton = this.createDivWithClaass('carousel-next')
        let prevButton = this.createDivWithClaass('carousel-prev')
        this.root.appendChild(nextButton)
        this.root.appendChild(prevButton)
        nextButton.addEventListener('click', this.next.bind(this))
        prevButton.addEventListener('click', this.prev.bind(this))
       /* this.onMove(index => {
            if (index === 0) {
                nextButton.classList.add('carousel-next-hidden')
            } else {
                nextButton.classList.remove('carousel-next-hidden')   
            }
        })*/
    }

    next () {
        this.gotoItem(this.currentItem + this.options.slidesToScroll)
    }

    prev () {
        this.gotoItem(this.currentItem - this.options.slidesToScroll)

    }


    /*
    *deplace le carrousel vers l'élément ciblé
    * @param {number} index
    */

    gotoItem (index) {
        if (index < 0){
            index = this.items.length - this.options.slidesVisible
        } else if (index >=this.items.length || (this.items[this.currentItem + this.options.slidesVisible] === undefined && index >this.currentItem)) {
            index = 0
        }
        let translateX = index * -100 / this.items.length
        this.container.style.transform = 'translate3d('+ translateX +'%, 0, 0)'
        this.currentItem = index
        this.moveCallbacks.forEach(cb => cb(index))
    }

    /*
    * @param {moveCallbacks} cb
    */

    onMove (cb) {
        this.moveCallbacks.push(cb)
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
        slidesToScroll: 1,
        slidesVisible: 5,
        loop: false
    })

})