const imageSet = [
  {
    images: ['./img/img01.jpg'],
  },
  {
    images: ['./img/img02.jpg'],
  },
  {
    images: ['./img/img03.jpg'],
  },
  {
    images: ['./img/img04.jpg'],
  },
  {
    images: [
      './img/img05.jpg',
      './img/txt01.png',
      './img/txt02.png',
      './img/btn.png',
    ],
  },
]

const bannerImages = () => {
  var html = ``
  imageSet.forEach((item, index) => {
    html += `
        <div class="frame${index + 1} frame">
        <div class="svg-mask-wrapper">
          <svg
            width="300"
            height="250"
            viewbox="0 0 300 250"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
          ${item.images.map(
            (image, index) => `<g>
            <image
            class="${
              image.search('btn') > -1
                ? 'btn'
                : image.search('txt') > -1
                ? 'txt'
                : 'img'
            }"
            width="${image.search('btn') > -1 ? '202' : '100%'}"
            height="${image.search('btn') > -1 ? '32' : '100%'}"
            y="${image.search('btn') > -1 ? '143' : '0'}"
            x="${image.search('btn') > -1 ? '50' : '0'}"
            xlink:href=${image}
          />
            </g>`,
          )}
          </svg>
        </div>
      </div>
        `
  })
  $('.banner-svg-logo').html(html)
}

bannerImages()

const loopImages = () => {
  const tl = new TimelineMax()
  const imageFrames = ['.frame1', '.frame2', '.frame3', '.frame4']
  $('.banner-container').show()

  tl.staggerTo(imageFrames, '2', {
    opacity: 1,
    ease: Expo.easeOut,
    stagger: 3,
  })
    .staggerTo('.frame5', '0.7', {
      opacity: 1,
      ease: Expo.easeOut,
    })
    .staggerFromTo(
      '.txt',
      '0.3',
      {
        opacity: 0,
        delay: 0.1,
        y: 100,
        ease: Power2.easeout,
      },
      {
        opacity: 1,
        delay: 0.1,
        y: 0,
        stagger: 0.1,
        ease: Power2.easeout,
      },
    )
    .staggerTo('.btn', '0.3', {
      opacity: 1,
      scale: 1,
      transformOrigin: 'center',
    })
    .staggerTo('.btn', '0.1', {
      transformOrigin: 'center',
      scale: 1.1,
      ease: Linear.easeNone,
      yoyo: true,
      repeat: 1,
    })
}

loopImages()
