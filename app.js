gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

let smoother = ScrollSmoother.create({
  wrapper: '#smooth-wrapper',
  content: '#smooth-content',
  smooth: 1,
  smoothTouch: 0.1,
})

let split = new SplitText('.header-title', { type: 'words' })

console.log(split.chars)

const tl = gsap.timeline()

tl.from(split.words, {
  opacity: 0,
  y: 20,
  stagger: 0.2,
  ease: 'back',
})
  .from(
    '.stat',
    {
      opacity: 0,
      stagger: 0.1,
      y: 20,
      ease: 'back',
    },
    '-=0.25'
  )
  .from(
    '.skill',
    {
      opacity: 0,
      y: 10,
      stagger: 0.1,
      ease: 'back',
    },
    '-=0.25'
  )
  .from('.logo', {
    opacity: 0,
    y: '-100px',
    ease: 'back',
  })
  .from('.nav-cta', { opacity: 0, right: '-100%' }, '-=0.25')
