import { Component } from 'preact'
import { TimelineLite, Power2 } from 'gsap'
import {
  Image,
  Headline,
  Document,
  Video
} from './index.js'

import variables from '../variables'
import { qs } from '../helpers'

export default class PortraitScreen extends Component {
  componentDidMount () {
    const headlineDOM = qs('#psHeadline')
    const imageDOM = qs('#psImage')
    const documentDOM = qs('#psDocument')
    const videoDOM = qs('#psVideo')

    const timeline = new TimelineLite()

    timeline
      .delay(4)
      .to(headlineDOM, 0.5, { opacity: 1, ease: Power2.easeIn }, 'psElements')
      .to(imageDOM, 0.5, { opacity: 1, ease: Power2.easeIn }, 'psElements+0.25')
      .to(documentDOM, 0.5, { opacity: 1, ease: Power2.easeIn }, 'psElements+0.45')
      .to(videoDOM, 0.5, { opacity: 1, ease: Power2.easeIn }, 'psElements+0.7')
  }

  render (props) {
    return (
      <g {...props} fill="#D8D8D8" fill-rule="evenodd">
        <path d="M.625 108.375v-108h60.75v108H.625zm1-1h58.75v-106H1.625v106zM8 109h2.727v4H8zM51.273 109H54v4h-2.727z" />

        <Headline id="psHeadline" opacity="0" transform="translate(5, 8), scale(0.9)" />
        <Image id="psImage" opacity="0" transform="translate(10, 25), scale(2)" />
        <Document id="psDocument" opacity="0" transform="translate(5, 60), scale(2.6, 1)" />

        <g id="psVideo" opacity="0" transform="translate(1.5, 80)">
          <rect x="0" y="0" width="60" height="27.5" fill={variables.lightSkyBlue} />
          <Video transform="translate(17, -9)" />
        </g>
      </g>
    )
  }
}
