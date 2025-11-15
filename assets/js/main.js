document.addEventListener("DOMContentLoaded",()=>{
    const sections=document.querySelectorAll("section")
    const mainSection=document.querySelector(".sections")
    const firstSection=sections[0];
    const navList=document.querySelector(".nav__list")
    const navLinks=document.querySelectorAll(".nav__link")
    const slider=document.querySelector(".slider")
    const sliderItems=document.querySelectorAll(".slide__link")
    const slideImages=slider.querySelectorAll(".slide__image")
    const main=document.getElementById("main");
    // const aboutEvent=about.querySelector(".nav__logo")
    main.addEventListener('click',(e)=>{
        debugger
        const id="#main__page";
        const section=mainSection.querySelector(id)
        const activeSection=mainSection.querySelector(".active-section");
        activeSection?.classList.remove("active-section")
        section.classList.add("active-section")
    })
    
    // firstSection.setAttribute("style","left:32px")
    firstSection.classList.add("active-section")
    
    navLinks.forEach(elemnt=>{
        elemnt.addEventListener('click',()=>{
            const currentlyActive=navList.querySelector(".active-link")
            
            if(currentlyActive ){
                currentlyActive.classList.remove("active-link")
            }

            elemnt.classList.add("active-link")
            const id="#"+elemnt?.id
            const currentSlide=slider.querySelector(id)
            const activeSlide=slider.querySelector(".active-slide")
            activeSlide?.classList.remove("active-slide")
            currentSlide.classList.add("active-slide")
           
        })
    })
    slideImages.forEach(slideImage=>{
        slideImage.addEventListener('click',()=>{
            debugger
            const id="#"+slideImage.id;
            const section=mainSection.querySelector(id)
            const activeSection=mainSection.querySelector(".active-section");
            activeSection?.classList.remove("active-section")
            section.classList.add("active-section")
        })
    })
    sections.forEach(element=>{
        element.addEventListener('click',()=>{
            element.parentElement.setAttribute("style",`rigth:${-100}px`)

            const id="#"+element.id
            const activeSection= section.querySelector(id)
            const sct=section.querySelector(".active-section")
            sct.classList.remove("active-section")
            
            if(activeSection){
                firstSection.classList.remove("active-section")
                activeSection.classList.add("active-section")
                // firstSection.setAttribute("style","right:-100rem")
                // activeSection.setAttribute("style","right:2rem")
            }
            else{
                // const sct=section.querySelector(".active-section")
                // sct.classList.remove("active-section")
                // debugger
                firstSection.classList.add("active-section")
            }
        })
    })
          
})
const navMenu=document.getElementById('nav__menu')
const navToggle=document.getElementById('toogle__logo')
const navClose=document.getElementById('close__logo')
// Menu Show
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

// Menu Hide
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })

}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink=document.querySelectorAll('.nav__link')

const linkAction=()=>{
    const newMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n=>n.addEventListener('click',linkAction))




// // const navLinks=document.querySelectorAll(".nav-link")
// // const navlink=document.getElementById('services')
// // const slider=document.getElementById("slider")

// // const activeLink=()=>{
// //     slider.classList.add("active-slide")
// //     // currentLink.classList.add("active-link")
// //     debugger
// //     navLinks.forEach(n=>{
// //         if(n!==currentLink){
// //             debugger
// //             n.classList.remove("active-link")
// //         }
// //     })
// // }
// // navlink.addEventListener('click',activeLink)