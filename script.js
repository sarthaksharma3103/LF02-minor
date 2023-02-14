var tl = gsap.timeline()

tl.from("#nav h1,#nav h4,#nav button",{
    delay:0.3,
    y:-30,
    duration:0.5,
    opacity:0,
    stagger:0.25
})
.from("#page1-content h1,#page1-content p,#page1-content button",{
    y:100,
    opacity:0,
    duration:0.5,
    stagger:0.4

})

gsap.from("#page2 h1",{
    x:-100,
    duration:1,
    opacity:0,
    scrollTrigger:{
       trigger:"#page2 h1",
       scroller:"body",
    //    markers:true,
       start:"top 60%"
    }
})

gsap.from("#page2-div",{
    x:300,
    duration:1,
    opacity:0,
    scrollTrigger:{
       trigger:"#page2-div",
       scroller:"body",
    //    markers:true,
       start:"top 60%"
    }
})