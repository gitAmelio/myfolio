
const hero = $("#hero")
const width = window.innerWidth
const getTarget = (selector) => document.querySelector(selector)  

const zoomBackground = (selector) => {
    const width = window.innerWidth
    const element = getTarget(selector) 
    const {style} = element 
    if ((width >= 900)){
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            // element.style.backgroundSize = "150% auto";
            element.style.transform = "scale(1.6)";
          }else{
            // element.style.backgroundSize = "110% auto";        
            element.style.transform = "scale(1)";        
        }
    }
}

function scrollTop(selector){
    zoomBackground(selector)
}

export const scroll = () => {
    window.onscroll = function () {
    //   scrollTop('#hero')
      scrollTop('#hero-image')
    };
}

