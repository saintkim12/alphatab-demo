import { useEffect } from 'preact/hooks'
import { Logo } from './logo'
// import alphaTab from '@coderline/alphatab'

export function App() {
  useEffect(() => {
    /** @type {import('@coderline/alphatab')} */
    const alphaTab = window.alphaTab
    console.log('alphaTab', alphaTab)
    // const alphaTab = require('@coderline/alphatab/dist/alphaTab')
    // require(['@coderline/alphatab'], (alphaTab: any) => {
    // console.log('alphaTab', alphaTab)
    // })
  })
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
    </>
  )
}
