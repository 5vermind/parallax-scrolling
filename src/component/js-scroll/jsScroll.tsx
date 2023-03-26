import { styled } from '@stitches/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Root = styled('div', {
  height: '200vh',
})

const Container = styled('div', {
  height: '100px',
})

const Div1 = styled(Container, {
  backgroundColor: 'red',
})

const Div2 = styled(Container, {
  backgroundColor: 'blue',
})

export const JsScroll = () => {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    if (window) {
      window.addEventListener('scroll', () => {
        setScroll(window.scrollY)
      })
    }
  }, [])

  return (
    <Root>
      <Link href={'/'}>home</Link>
      <Div1
        style={{
          transform: `translateY(${scroll * 1.5}px)`,
        }}
      >
        1
      </Div1>
      <Div2
        style={{
          transform: `translateY(${scroll * 2}px)`,
        }}
      >
        2
      </Div2>
    </Root>
  )
}
