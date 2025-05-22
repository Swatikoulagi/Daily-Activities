const s1 = gsap.timeline()

s1.from('.header',{
    opacity:0,
    y:-45,
    duration:0.2

})
s1.from('.header h2',{
    opacity:0,
    x:-400,
    duration:0.5,

})
s1.from('.header .links a',{
    opacity:0,
    y:-43,
    duration:0.4,
    stagger:0.2
})
s1.from('.homepage h2',{
    opacity:0,
    scale:0.5,
    
})
