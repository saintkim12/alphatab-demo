import { useEffect } from 'preact/hooks'
import { html } from 'htm/preact'
import { AlphaTabApi } from '@coderline/alphatab'

export default function App() {
  useEffect(() => {
    console.log('useEffect')
    const element = document.getElementById('alpha-tab') ?? new HTMLElement
    const api = new AlphaTabApi(element, undefined)
  })
  return html`
    <div id="alpha-tab" data-tex="true">aaa</div>
  `
}
