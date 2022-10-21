const $ = document.querySelector.bind(document)
const $$  = document.querySelectorAll.bind(document)


const wrapper = $('.wrapper')
const header = $('.header')
const menu = $('.menu')
const navItems = $$('.nav-item')
const projectWrapper = $('.project-wrapper')
const btnLoadMore = $('.load-more')
const themeIcon = $('.theme-icon')
const darkThemeIcon = $('.dark-theme')
const lightThemeIcon = $('.light-theme')
const btnBackToTop = $('.back-to-top')



const app = {
    quantity: 1,
    projects: [
        {
            image: 'https://th.bing.com/th/id/R.fd1c87f587a7caca7b43f52bdc70b852?rik=kU6lmlmA9Savqw&pid=ImgRaw&r=0',
            title: 'mini-music-play',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit voluptas dolore adipisci sint a molestiae delectus voluptates, et quis autem porro placeat illum quasi, tempora maiores, quisquam eligendi laudantium?',
            tags: [
                'html', 'css', 'javascript'
            ],
            liveLink: 'https://hieunv0871.github.io/mini-music-play/',
            sourceLink: 'https://github.com/hieuNV0871/mini-music-play'

        },
        {
            image: 'https://th.bing.com/th/id/R.fd1c87f587a7caca7b43f52bdc70b852?rik=kU6lmlmA9Savqw&pid=ImgRaw&r=0',
            title: 'html super code',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit voluptas dolore adipisci sint a molestiae delectus voluptates, et quis autem porro placeat illum quasi, tempora maiores, quisquam eligendi laudantium?',
            tags: [
                'html', 'css', 'javascript'
            ],
            liveLink: 'https://hieunv0871.github.io/mini-music-play/',
            sourceLink: 'https://github.com/hieuNV0871/mini-music-play'

        }
        
    ],

    
    renderProject: function() {
        console.log(this.projects.length)
        console.log(app.quantity);
        if (this.projects.length <= 2 ||  app.quantity >= this.projects.length -1  ) {
            btnLoadMore.classList.add('disable')
        }
        
        const htmls = this.projects.map((project, index) => {
            if (index > app.quantity) {
                return
            }
            return `<div class="project-item" data-index = "${index}">
                        <div class="project-image">
                            <img class="avatar" src="${project.image}" alt="">
                        </div>
                        <div class="project-info">
                            <h3>${project.title}</h3>
                            <p>${project.description}</p>
                            <ul class="project-tags">
                                ${
                                        project.tags.map((tag, index) => {
                                            return `<li data-index="${index}">${tag}</li>`
                                        }).join('')
                                }
                            </ul>
                            <div class="project-links">
                                <a class="btn" target = "_blank" href=${project.liveLink}>live</a>
                                <a class="btn" target = "_blank" href=${project.sourceLink}>source</a>
                            </div>
                        </div>
                    </div>`
        })
        projectWrapper.innerHTML = htmls.join('')
    },

    randomBackgroundColor: function() {
        const backgroundColors = [
            '#F8F8FF', '#C6E2FF', '#FFFAF0', '#FDF5E6', '#FFE4B5', '#F5FFFA', '#E6E6FA',
        ]
        setInterval(function(){
            const index = Math.floor(Math.random() * backgroundColors.length)

            wrapper.style.backgroundColor = backgroundColors[index]

            
        }, 4000)
        
    },

    handleEvents: function() {

        navItems.forEach(navItem => {
            navItem.onclick = function() {
                navItems.forEach(navItem=>navItem.classList.remove('active'))
                this.classList.add('active')
            }
        })

        menu.onclick = function() {
            header.classList.toggle('toggle')
        }
        window.addEventListener('scroll', function() {
            header.classList.remove('toggle')
        })
        window.addEventListener('load', function() {
            header.classList.remove('toggle')
        })
        document.onscroll = function() {
            window.scrollY > 530 ? btnBackToTop.style.display = 'block' : btnBackToTop.style.display = 'none'
        }
  
        btnBackToTop.onclick = function() {
            window.scrollTo(0, 0)
        }
        btnLoadMore.onclick = function() {
            app.quantity += 2
            app.renderProject()
        }
        darkThemeIcon.onclick = function() {
         document.body.classList.add('dark-mode')
         this.style.display = "none"
         lightThemeIcon.style.display = "block"
        }
        lightThemeIcon.onclick = function() {
            document.body.classList.remove('dark-mode')
            this.style.display ="none"
            darkThemeIcon.style.display = "block"
        }

    },


    start: function() {
        this.renderProject()
        // this.randomBackgroundColor()
        this.handleEvents()
    }
}

app.start()