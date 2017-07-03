import './style.scss'
import { Component } from 'preact'
import { TimelineLite, SlowMo, Power2 } from 'gsap'
import {
  FontIcon,
  ImageIcon,
  TextIcon,
  VideoIcon,
  Document,
  Headline,
  Image,
  Laptop,
  LaptopContents,
  Video,
  Pipe,
  VerticalPipe,
  Screen,
  PortraitScreen
} from './svg'
import variables from './variables'
import { qs } from './helpers'

export default class App extends Component {
  componentDidMount () {
    const iconGroupDOM = qs('#iconGroup')
    const fontIconDOM = qs('#fontIcon')
    const imageIconDOM = qs('#imageIcon')
    const videoIconDOM = qs('#videoIcon')
    const textIconDOM = qs('#textIcon')
    const laptopDOM = qs('#laptop')
    const laptopContentsDOM = qs('#laptopContents')
    const headlineDOM = qs('#headline')
    const imageDOM = qs('#image')
    const documentDOM = qs('#document')
    const videoDOM = qs('#video')
    const editorDOM = qs('#editor')
    const topPipeDOM = qs('#topPipe')
    const lowPipeDOM = qs('#lowPipe')
    const screenDOM = qs('#screen')
    const portraitScreenDOM = qs('#portraitScreen')

    const timeline = new TimelineLite()

    timeline
      .from(textIconDOM, 0.5, { opacity: 0, rotation: -3, scale: 2, ease: Power2.easeIn })
      .from(fontIconDOM, 0.5, { opacity: 0, rotation: 5, scale: 2, ease: Power2.easeIn })
      .from(imageIconDOM, 0.5, { opacity: 0, rotation: -5, scale: 2, ease: Power2.easeIn })
      .from(videoIconDOM, 0.5, { opacity: 0, rotation: 3, scale: 2, ease: Power2.easeIn })
      .from(laptopDOM, 0.5, { y: 80, opacity: 0, rotation: 0, ease: Power2.easeIn })
      .to(iconGroupDOM, 0.5, { scale: 0.4, y: 25, x: 350 })

      .to(laptopContentsDOM, 2, { opacity: 1 })
      .to(fontIconDOM, 0.5, { opacity: 1, rotation: 0, scale: 1, ease: Power2.easeIn, x: 40, y: 30 })
      .to(textIconDOM, 0.5, { opacity: 1, rotation: 0, scale: 1, ease: Power2.easeIn, x: 80, y: 30 })
      .to(imageIconDOM, 0.5, { opacity: 1, rotation: 0, scale: 1, ease: Power2.easeIn, x: 120, y: 30 })
      .to(videoIconDOM, 0.5, { opacity: 1, rotation: 0, scale: 1, ease: Power2.easeIn, x: 160, y: 30 })

      .to(fontIconDOM, 2, { opacity: 0, rotation: 0, scale: 1, ease: SlowMo.easeOut, x: 70, y: 130 }, 'headline')
      .to(headlineDOM, 1, { opacity: 1, ease: SlowMo.easeOut }, 'headline')

      .to(textIconDOM, 2, { opacity: 0, rotation: 0, scale: 1, ease: SlowMo.easeOut, x: 130, y: 180 }, 'headline+=0.5')
      .to(documentDOM, 1, { opacity: 1, ease: SlowMo.easeOut }, 'headline+=0.5')

      .to(imageIconDOM, 2, { opacity: 0, rotation: 0, scale: 1, ease: SlowMo.easeOut, x: 50, y: 210 }, 'headline+=1')
      .to(imageDOM, 1, { opacity: 1, ease: SlowMo.easeOut }, 'headline+=1')

      .to(videoIconDOM, 2, { opacity: 0, rotation: 0, scale: 1, ease: SlowMo.easeOut, x: 230, y: 210 }, 'headline+=1.5')
      .to(videoDOM, 1, { opacity: 1, ease: SlowMo.easeOut }, 'headline+=1.5')

      .to(editorDOM, 0.5, { x: -207, ease: SlowMo.easeOut })

      .to(topPipeDOM, 2, { opacity: 1 })
      .to(portraitScreenDOM, 1, { opacity: 1, x: 630, ease: SlowMo.easeOut })

      .to(lowPipeDOM, 2, { opacity: 1 })
      .to(screenDOM, 1, { opacity: 1, y: 149, ease: SlowMo.easeOut })

    timeline.timeScale(4)
  }

  render () {
    return (
      <main>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400">
          <g id="editor" transform="translate(0 40)">
            <Laptop id="laptop" opacity="1" transform="translate(200, 30), scale(1.5)" />
            <LaptopContents id="laptopContents" opacity="0" transform="translate(291.5, 31.5), scale(1.5)" />

            <Headline id="headline" opacity="0" transform="translate(335, 80), scale(1.5)" />
            <Image id="image" opacity="0" transform="translate(335, 105), scale(1.5)" />
            <Document id="document" opacity="0" transform="translate(390, 105), scale(1.5)" />

            <g id="video" opacity="0" transform="translate(430, 67), scale(1.5)">
              <rect x="0" y="1" width="24" height="42" fill={variables.lightSkyBlue} />
              <Video />
            </g>

            <g id="iconGroup" transform="translate(310, -35), scale(1.3)">
              <TextIcon id="textIcon" opacity="1" transform="translate(45, 70), rotate(-10), scale(1.5)" />
              <FontIcon id="fontIcon" opacity="1" transform="translate(30, 10), rotate(5), scale(1.5)" />
              <ImageIcon id="imageIcon" opacity="1" transform="translate(0, 70), rotate(-15), scale(1.5)" />
              <VideoIcon id="videoIcon" opacity="1" transform="translate(65, 42), rotate(-15), scale(1.5)" />
            </g>
          </g>

          <Pipe id="topPipe" opacity="0" transform="translate(305, 100)" customWidth={'315'} />
          <VerticalPipe id="lowPipe" opacity="0" transform="translate(480, 102)" customHeight={'40'} />

          <Screen id="screen" opacity="0" transform="scale(2.5), translate(140, 80)" />

          <PortraitScreen id="portraitScreen" opacity="0" transform="scale(2.5), translate(260, 12)" />
        </svg>
      </main>
    )
  }
}
