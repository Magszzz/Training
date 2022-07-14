var rectPercent = [65, 70, 76]

const animation4 = () => {
  const tl = new TimelineMax({
    defaults: {
      ease: Power3.easeOut,
    },
    immediateRender: false,
  })

  tl.addLabel('in', 1)
    .set('.frame4 .rect-top', {
      xPercent: -100,
    })
    .staggerTo(
      '.frame3 .rect-mask',
      0.7,
      {
        xPercent: 100,
        ease: Power3.easeOut,
      },
      0.15,
      'in+=0.0',
    )
    .staggerTo(
      '.frame4 .rect-inner',
      1,
      {
        xPercent: function (index, elem) {
          return rectPercent[$(elem).index()]
        },
        ease: Power3.easeOut,
      },
      0.15,
      'in+=0.3',
    )
    .from('.frame4 .txt04', 0.2, {
      y: 10,
      opacity: 0,
    })
    .from('.frame4 .disc03', 0.2, {
      y: 10,
      opacity: 0,
    })
    .from(['.frame4 .border', '.frame4 .specialoffer'], 0.2, {
      y: 10,
      opacity: 0,
    })
    .to('.border', 0.5, {
      scaleX: 0.01,
    })
    .to('.bl', 0.5, {
      x: -110,
    })
    .to(
      '.br',
      0.5,
      {
        x: 110,
      },
      '-=0.5',
    )
    .from('.frame4 .btn', 0.2, {
      opacity: 0,
    })
    .to('.frame4 .btn', 0.2, {
      scaleX: 1.1,
      delay: 1,
    })
    .to('.frame4 .btn', 0.2, {
      scaleX: 1,
    })
}

const animation3 = () => {
  const tl = new TimelineMax()

  tl.addLabel('in', 1)
    .set('.frame3 .rect-top', {
      xPercent: -100,
    })
    .staggerTo(
      '.frame2 .rect-mask',
      0.7,
      {
        xPercent: 100,
        ease: Power3.easeOut,
      },
      0.15,
      'in+=0.0',
    )
    .staggerTo(
      '.frame3 .rect-outer',
      1,
      {
        xPercent: function (index, elem) {
          return rectPercent[$(elem).index()]
        },
        ease: Power3.easeOut,
        scaleY: 0,
        stagger: 0.1,
      },
      null,
      'in+=0.3',
    )
    .staggerTo(
      '.frame3 .rect-inner',
      1,
      {
        xPercent: function (index, elem) {
          return rectPercent[$(elem).index()]
        },
        ease: Power3.easeOut,
      },
      0.15,
      'in+=0.3',
    )
    .from('.frame3 .now-streaming', 0.2, {
      y: 10,
      opacity: 0,
    })
    .staggerTo(
      '.frame3 .rect-full',
      1,
      {
        xPercent: 0,
        stagger: 0.1,
        ease: Power3.easeOut,
        delay: 0.5,
      },
      0.15,
      'in+=1.75',
    )
    .from('.frame3 .txt03', 0.2, {
      y: 10,
      opacity: 0,
    })
    .from('.frame3 .disc02', 0.2, {
      y: 10,
      opacity: 0,
      onComplete: animation4,
    })
}

const animation2 = () => {
  const tl = new TimelineMax()

  tl.addLabel('in', 1)
    .set('.frame2 .rect-top', {
      xPercent: -100,
    })
    .staggerTo(
      '.frame1 .rect-mask',
      0.7,
      {
        xPercent: 100,
        ease: Power3.easeOut,
      },
      0.15,
      'in+=0.0',
    )
    .staggerTo(
      '.frame2 .rect-outer',
      1,
      {
        xPercent: function (index, elem) {
          return rectPercent[$(elem).index()]
        },
        ease: Power3.easeOut,
        scaleY: 0,
        stagger: 0.1,
      },
      null,
      'in+=0.3',
    )
    .staggerTo(
      '.frame2 .rect-inner',
      1,
      {
        xPercent: function (index, elem) {
          return rectPercent[$(elem).index()]
        },
        ease: Power3.easeOut,
      },
      0.15,
      'in+=0.3',
    )
    .staggerTo(
      '.frame2 .rect-full',
      1,
      {
        xPercent: 0,
        stagger: 0.1,
        ease: Power3.easeOut,
      },
      0.15,
      'in+=1.75',
    )
    .from('.frame2 .txt02', 0.2, {
      y: 10,
      opacity: 0,
      onComplete: animation3,
    })
}

const animate = () => {
  const tl = new TimelineMax()
  $('#banner').show()

  tl.set('#banner', {
    alpha: 0,
  })
    .set('.frame1 .rect-top', {
      xPercent: -100,
    })
    .to('#banner', 0.4, { opacity: 1 }, 0.3)
    .staggerTo('.common', 0.5, {
      opacity: 1,
    })
    .addLabel('in', 1)
    .staggerTo(
      '.frame1-rect1',
      1,
      {
        xPercent: function (index, elem) {
          return rectPercent[$(elem).index()]
        },
        ease: Power3.easeOut,
      },
      0.15,
      'in+=0.0',
    )
    .staggerTo(
      '.frame1-rectT1',
      1,
      {
        xPercent: function (index, elem) {
          return rectPercent[$(elem).index()]
        },
        stagger: 0.1,
        ease: Power3.easeOut,
        scaleY: 0,
      },
      null,
      'in+=0.2',
    )
    .from('.frame1 .date01', 0.2, {
      y: 10,
      opacity: 0,
    })
    .from('.frame1 .disc01', 0.2, {
      y: 10,
      opacity: 0,
    })
    .staggerTo(
      '.frame1 .rect-full',
      1,
      {
        xPercent: 0,
        stagger: 0.1,
        ease: Power3.easeOut,
      },
      0.15,
      'in+=1.75',
    )
    .from('.frame1 .txt01', 0.2, {
      y: 10,
      opacity: 0,
      onComplete: animation2,
    })
}
animate()
