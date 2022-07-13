const animate = () => {
  const tl = new TimelineMax({
    defaults: {
      ease: Power3.easeInOut,
    },
  })
  $('#frame').show()

  tl.set('#frame', {
    alpha: 0,
  })
    .to('#frame', 0.4, { opacity: 1 }, 0.3)
    .to('.frame1-bg', 5, {
      scale: 1,
      rotate: 0.01,
      z: 0.1,
      rotationZ: 0.01,
    })
    .to(
      '.frame1-img',
      5,
      {
        scale: 1.1,
        rotate: 0.01,
        z: 0.1,
        rotationZ: 0.01,
      },
      '-=5',
    )
    .to(
      '.frame1-text1',
      0,
      {
        opacity: 1,
      },
      '-=3.5',
    )
    .to(
      '.frame1-text2',
      0,
      {
        opacity: 1,
      },
      '-=3',
    )
    .to(
      '.frame1-text3',
      0,
      {
        opacity: 1,
      },
      '-=2.5',
    )
}

animate()
