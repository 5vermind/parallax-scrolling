import { styled } from '@stitches/react'
import * as Slider from '@radix-ui/react-slider'
import { useState } from 'react'
import Link from 'next/link'

const Root = styled('div', {
  height: '80vh',
  overflowX: 'hidden',
  perspective: '1px',
  position: 'relative',
})

const Container = styled('div', {
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
})

const Div1 = styled(Container, {
  backgroundColor: '#d4a373',
  height: '150rem',
})

const Div2 = styled(Container, {
  backgroundColor: '#faedcd',
  height: '500px',
  transform: 'translateZ(-2px)',
})

const Div3 = styled(Container, {
  backgroundColor: '#fefae0',
  height: '500px',
  transform: 'translateZ(-1px)',
})

const SliderRoot = styled(Slider.Root, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',
  width: '200px',
  height: '20px',
})

const SliderTrack = styled(Slider.Track, {
  backgroundColor: '#ccd5ae',
  position: 'relative',
  flexGrow: 1,
  borderRadius: '9999px',
  height: '3px',
})

const SliderRange = styled(Slider.Range, {
  position: 'absolute',
  backgroundColor: '#d4a373',
  borderRadius: '9999px',
  height: '100%',
})

const SliderThumb = styled(Slider.Thumb, {
  display: 'block',
  width: '20px',
  height: '20px',
  backgroundColor: '#fefae0',
  boxShadow: '0 2px 10px black',
  borderRadius: '10px',
  '&:focus': {
    outline: 'none',
  },
})

export const CssScroll = () => {
  const [slider2, setSlider2] = useState(0)
  const [slider3, setSlider3] = useState(0)

  console.log(slider3)

  return (
    <>
      <Link href={'/'}>home</Link>
      <Root className="root">
        <Div1 className="div1">1</Div1>
        <Div2
          className="div2"
          css={{
            transform: `translateZ(-${slider2}px)`,
          }}
        >
          2
        </Div2>
        <Div3
          className="div3"
          css={{
            transform: `translateZ(-${slider3}px)`,
          }}
        >
          3
        </Div3>
      </Root>
      <SliderRoot
        className="SliderRoot"
        defaultValue={[5]}
        max={10}
        step={1}
        aria-label="Volume"
        onValueCommit={(value) => {
          setSlider2(value[0])
        }}
        css={{
          marginTop: 10,
        }}
      >
        <SliderTrack className="SliderTrack">
          <SliderRange className="SliderRange" />
        </SliderTrack>
        <SliderThumb className="SliderThumb" />
      </SliderRoot>
      <SliderRoot
        className="SliderRoot"
        defaultValue={[1]}
        max={3}
        step={1}
        aria-label="Volume"
        onValueCommit={(value) => {
          setSlider3(value[0])
        }}
        css={{
          marginTop: 10,
        }}
      >
        <SliderTrack className="SliderTrack">
          <SliderRange className="SliderRange" />
        </SliderTrack>
        <SliderThumb className="SliderThumb" />
      </SliderRoot>
    </>
  )
}
