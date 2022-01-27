import { useEffect, useRef } from 'preact/hooks'
import { Logo } from './logo'
// import alphaTab from '@coderline/alphatab'

export function App() {
  const wrapper = useRef(null)
  const api = useRef(null)
  const [tex, setTex = useRef(null)
  useEffect(() => {
    /** @type {import('@coderline/alphatab')} */
    const alphaTab = window.alphaTab
    console.log('alphaTab', alphaTab)
    // const alphaTab = require('@coderline/alphatab/dist/alphaTab')
    // require(['@coderline/alphatab'], (alphaTab: any) => {
    // console.log('alphaTab', alphaTab)
    // })
    console.log('wrapper', wrapper.current)
    api.current = new alphaTab.AlphaTabApi(wrapper.current)
    api.current.tex(`
      \\title "hello"
      .
    `)
  })
  useEffect(() => {
    if (tex.current) {
      api.current.tex(tex.current)
    }
    // api.tex(`
    //   \\title "hello"
    //   .
    //   \\track "Piano"
    //     \\staff
    //     \\tuning piano
    //     \\instrument  acousticgrandpiano
    //     c4 d4 e4 f4
    //     \\staff
    //     \\clef F4 // grand-staff F4 clef
    //     c2 c2 c2 c2 
    // `)
  }, [tex])
  const onClicked = () => {
    console.log('onClicked')
    tex.current = `
      \\title "hello"
      .
      \\track "Piano"
        \\staff
        \\tuning piano
        \\instrument  acousticgrandpiano
        c4 d4 e4 f4
        \\staff
        \\clef F4 // grand-staff F4 clef
        c2 c2 c2 c2 
    `
    console.log('tex.current', tex.current)
  }
  return (
    <>
      <Logo />
      <p>Hello Vite + Preact!</p>
      <p>
        <a
          class="link"
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </p>
      <div>{test.current}</div>
      <button type="button" onClick={onClicked}>button</button>
      <div ref={wrapper} id="test" data-tex="true"></div>
    </>
  )
}
