import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const lettersEvent = () => {
    const letters = document.querySelectorAll(".header .letter")

    const tl = gsap.timeline({
        default: {
            duration: 0.02, 
        }
    })
    let busy= false

    letters.forEach( letter => {
        letter.addEventListener('mouseover', (busy) => {
            // if(busy) return
            busy = true
            tl.to(letter,{
                duration: 0.1,
                scaleY: 1.2,
                ease: 'elastic'
            })
            .to(letter, {
                duration: 0.1,
                ease: 'elastic'
            })
            
        })
        letter.addEventListener('mouseout',()=>{
            tl.to(letter, {
                duration: 0.08,
                scaleY: 0.5,
                scaleX: 1.4,
                ease: 'elastic'
            }).to(letter, {
                duration: 0.05,
                scaleY: 1,
                scaleX: 1,
                ease: 'bounce' 
            })       
            busy = false
        })
    })
}

export const loadElementScrollTrigger = (id, side, ease='back', duration=2) => {
    gsap.registerPlugin(ScrollTrigger);

    const elementName = side ? `#${id}--${side}` : `#${id}`
    const element = document.querySelector(elementName)

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: element,
            start: "10px 90%",
            end: "10px center",
            toggleActions: "restart pause reverse pause",
            scrub: 3,
            // markers: true
        }
    })
    tl.from(element,{
        x: (side === 'right') ? 800 : -800,
        ease: `${ease}.out`,
        duration
    })
}

export const loadSectionScrollTrigger = (id) => {
    gsap.registerPlugin(ScrollTrigger);

    loadElementScrollTrigger(`${id}`, 'right', 'none',1)
    loadElementScrollTrigger(`${id}`, 'left', 'none',1)
}

