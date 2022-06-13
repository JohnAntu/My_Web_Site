const about = document.querySelector('#sobre')

const aboutContent = document.querySelector('#sobre-content')

const social = document.querySelector('#social')

const socialContent = document.querySelector('#social-content')

about.addEventListener('click', () => {
    const aboutBox = new WinBox({
        title: 'sobre mim',
        width: '300px',
        height: '400px', 
        top: 50,
        right: 50,
        bottom: 50,
        left: 50, 
        mount: aboutContent, 
        onfocus: function() {
            this.setBackground('#00aa00')
        },
        onblur: function(){
            this.setBackground('#777')
        },
    })
    
})

social.addEventListener('click', () => {
    const socialBox = new WinBox({
        title: 'social', 
        width: '300x',
        height: '400px', 
        top: 200,
        right: 50,
        bottom: 50,
        left: 50, 
        mount: socialContent, 
        onfocus: function() {
            this.setBackground('#00aa00')
        },
        onblur: function()  {
            this.setBackground('#777')
        },   
    })
    
})
