gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

let smoother = ScrollSmoother.create({
  wrapper: '#smooth-wrapper',
  content: '#smooth-content',
  smooth: 1,
  smoothTouch: 0.05,
})
