const animate = () => {
  const tl = new TimelineMax({
    defaults: {
      ease: Power3.easeInOut,
    },
  })
  $('#banner').show()

  tl.set('#banner', {
    alpha: 0,
  })
    .to('#banner', 0.4, { opacity: 1 }, 0.3)
    .staggerTo('.common', 0.5, {
      opacity: 1,
    })
    .staggerFrom('.frame1-ribbon', 0.5, {
      x: '-100%',
    })
    .staggerTo(
      '.frame2',
      0.5,
      {
        opacity: 1,
      },
      3,
    )
    .staggerFrom('.frame2', 0.3, {
      x: '-100%',
      delay: 1.5,
    })
    .staggerFrom('.ribbon2', 0.3, {
      x: '-100%',
    })
    .staggerTo('.frame3', 0.5, {
      opacity: 1,
    })
    .staggerFrom('.frame3', 0.3, {
      x: '-100%',
      delay: 1.5,
    })
    .staggerTo('.frame4', 0.5, {
      opacity: 1,
    })
    .staggerFrom('.frame4', 0.3, {
      x: '-100%',
      delay: 1.5,
    })
    .staggerTo('.frame5', 0.5, {
      opacity: 1,
    })
    .staggerFrom('.frame5', 0.3, {
      x: '-100%',
      delay: 1.5,
    })
    .staggerFrom('.ribbon3', 0.2, {
      x: '-100%',
    })
}

animate()
