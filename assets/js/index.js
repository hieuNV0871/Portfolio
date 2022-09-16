const $ = document.querySelector.bind(document)
const $$  = document.querySelectorAll.bind(document)


const wrapper = $('.wrapper')
const header = $('.header')
const navItems = $$('.nav-item')


const app = {
    

    randomBackgroundColor: function() {
        const backgroundColors = [
            '#F8F8FF', '#C6E2FF', '#FFFAF0', '#FDF5E6', '#FFE4B5', '#F5FFFA', '#E6E6FA',
        ]
        setInterval(function(){
            const index = Math.floor(Math.random() * backgroundColors.length)

            wrapper.style.backgroundColor = backgroundColors[index]
            header.style.backgroundColor = backgroundColors[index]

            
        }, 4000)
        
    },

    handleEvents: function() {
        navItems.forEach(navItem => {
            navItem.onclick = function (e) {
                navItems.forEach(navItem=>navItem.classList.remove('active'))
                this.classList.add('active')
            }
        })
    },


    start: function() {
        this.randomBackgroundColor()
        this.handleEvents()
    }
}

app.start()