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

export default class Screen extends Component {
  componentDidMount () {
    const headlineDOM = qs('#scHeadline')
    const imageDOM = qs('#scImage')
    const documentDOM = qs('#scDocument')
    const videoDOM = qs('#scVideo')

    const timeline = new TimelineLite()

    timeline
      .delay(4)
      .to(headlineDOM, 0.5, { opacity: 1, ease: Power2.easeIn }, 'sElements')
      .to(imageDOM, 0.5, { opacity: 1, ease: Power2.easeIn }, 'sElements+0.25')
      .to(documentDOM, 0.5, { opacity: 1, ease: Power2.easeIn }, 'sElements+0.45')
      .to(videoDOM, 0.5, { opacity: 1, ease: Power2.easeIn }, 'sElements+0.7')
  }

  render (props) {
    return (
      <g {...props} fill="#D8D8D8" fill-rule="evenodd">
        <path d="M0 0h108v60.75H0V0zm1 1v58.75h106V1H1zM5 61h3v4H5zM101 61h3v4h-3z" />

        <Headline id="scHeadline" opacity="0" transform="translate(5, 16), scale(1.2)" />
        <Image id="scImage" opacity="0" transform="translate(5, 32), scale(1.2)" />
        <Document id="scDocument" opacity="0" transform="translate(49, 32), scale(1.2, 1.2)" />

        <g id="scVideo" opacity="0" transform="translate(77, 0)">
          <rect x="1" y="0" width="30" height="60" fill={variables.lightSkyBlue} />
          <Video transform="translate(4, 8)" />
        </g>
      </g>
    )
  }
}
