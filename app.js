window.addEventListener('load', () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

  // create smoother
  ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 1,
    smoothTouch: 0.1,
  })

  ScrollTrigger.refresh()

  // split the text
  const split = new SplitText('.header-title', { type: 'words' })

  // reveal the container immediately (before any frames)
  gsap.set('.header-title', { visibility: 'visible' })
  // set your from-values right away
  gsap.set(split.words, { autoAlpha: 0, y: 20 })

  // now your timeline just animates up to the natural state
  const tl = gsap.timeline()
  tl.to(split.words, {
    autoAlpha: 1,
    y: 0,
    stagger: 0.2,
    ease: 'back.out(1.7)',
  })
    .from(
      '.stat',
      { autoAlpha: 0, y: 20, stagger: 0.1, ease: 'back.out(1.7)' },
      '-=0.25'
    )
    .from(
      '.skill',
      { autoAlpha: 0, y: 10, stagger: 0.1, ease: 'back.out(1.7)' },
      '-=0.25'
    )
    .from('.logo', { autoAlpha: 0, y: '-100px', ease: 'back.out(1.7)' })
    .from('.nav-cta', { autoAlpha: 0, right: '-100%' }, '-=0.25')
})
