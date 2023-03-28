import { styled } from '@stitches/react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import _BackgroundImage from 'public/background-image.svg'
import Sun from 'public/sun.svg'
import Background from 'public/background.svg'
import Cloud1 from 'public/cloud1.svg'
import Cloud2 from 'public/cloud2.svg'

const Root = styled('div', {
  backgroundColor: '#00110c',
  height: '100vh',
})

export const Firewatch = () => {
  return (
    <>
      {/* <BackgroundImage /> */}
      <Root>
        <Parallax pages={2}>
          <ParallaxLayer
            offset={0}
            speed={1}
            style={{ backgroundColor: 'rgb(184, 225, 238)' }}
          ></ParallaxLayer>
          <ParallaxLayer speed={0.2}>
            <Sun />
          </ParallaxLayer>
          <ParallaxLayer speed={0.7}>
            <Cloud1 />
          </ParallaxLayer>
          <ParallaxLayer speed={0.7}>
            <Cloud2 />
          </ParallaxLayer>
        </Parallax>
      </Root>
    </>
  )
}
