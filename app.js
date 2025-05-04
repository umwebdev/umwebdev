gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

let smoother = ScrollSmoother.create({
  wrapper: '#smooth-wrapper',
  content: '#smooth-content',
  smooth: 0.75,
  smoothTouch: 0.025,
})
