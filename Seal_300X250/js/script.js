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
    .to('.frame1', 0, {
      alpha: 0,
    })
    .staggerFromTo(
      ['.frame2-text1', '.frame2-text2', '.frame2-text3'],
      0.2,
      {
        alpha: 0,
        y: 10,
      },
      { alpha: 1, y: 0, stagger: 0.1 },
    )
    .to(['.frame2-text1', '.frame2-text2', '.frame2-text3'], 0, {
      alpha: 0,
      delay: 0.8,
    })
    .staggerFromTo(
      ['.frame3-text1', '.frame3-text2', '.frame3-text3', '.frame3-text4'],
      1,
      {
        alpha: 0,
        y: 10,
      },
      { alpha: 1, y: 0, stagger: 0.1, delay: 0.5 },
    )
    .to('.frame2', 0, {
      alpha: 0,
      delay: 0.8,
    })
    .set('.frame4', {
      alpha: 1,
    })
    .to('.frame4-logo', 1, {
      opacity: 1,
    })
    .staggerFromTo(
      ['.frame4-text1', '.frame4-text2', '.frame4-text3', '.frame4-btn'],
      1,
      {
        alpha: 0,
        y: 10,
      },
      { alpha: 1, y: 0, stagger: 0.1, delay: 0.5 },
    )
}

animate()
