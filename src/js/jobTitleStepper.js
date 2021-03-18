export const jobTitleStepper = (count) => {
    let index = 1
    setInterval(()=>{
        const prevIndex = index===1 ? count : index-1 
        const prevEl = document.getElementById(`job-title--${prevIndex}`)
        const el = document.getElementById(`job-title--${index}`)
        // console.log('el', el)
        // console.log('prev', prevEl)
        // console.log(index, prevIndex)
        el.style.display = 'block'
        prevEl.style.display = 'none'
        if(index === count){
            index = 1
        } else {
            index++
        }
    },3000)
}