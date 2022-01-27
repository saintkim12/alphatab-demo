import { useEffect, useRef, useState } from 'preact/hooks'
// import alphaTab from '@coderline/alphatab'
import './app.css'

/** @type {import('@coderline/alphatab')} */
const alphaTab = window.alphaTab
export default function App() {
  const wrapperRef = useRef(null)
  const viewRef = useRef(null)
  const apiRef = useRef(null)
  // const [tex, setTex] = useState(null)
  useEffect(() => {
    if (!apiRef.current) {
      const wrapper = wrapperRef.current
      const main = viewRef.current
      const settings = {
        file: 'https://www.alphatab.net/files/canon.gp',
        player: {
          enablePlayer: true,
          soundFont: 'https://cdn.jsdelivr.net/npm/@coderline/alphatab@latest/dist/soundfont/sonivox.sf2',
          scrollElement: wrapper.querySelector('.at-viewport')
        },
      }
      apiRef.current = new alphaTab.AlphaTabApi(main, settings)
      
      /** @type {import('@coderline/alphatab').AlphaTabApi} */
      const api = apiRef.current
      // overlay logic
      const overlay = wrapper.querySelector('.at-overlay')
      api.renderStarted.on(() => { console.log('api.renderStarted.on'); overlay.style.display = 'flex' })
      api.renderFinished.on(() => { console.log('api.renderFinished.on'); overlay.style.display = 'none' })

      // track logic
      // const trackList = wrapper.querySelector('.at-track-list')
      api.scoreLoaded.on(score =>{
        console.log('api.scoreLoaded.on')
        score.tracks.map(track => {
          console.log('track', track)
        })
      })

      // controls
      
    }

    return () => {
      if (!apiRef.current) return
      apiRef.current.destroy()
      apiRef.current = null
    }
    // console.log('alphaTab', alphaTab)
    // const alphaTab = require('@coderline/alphatab/dist/alphaTab')
    // require(['@coderline/alphatab'], (alphaTab: any) => {
    // console.log('alphaTab', alphaTab)
    // })
    // console.log('api', api.current)
    // if (!api.current) {
    //   api.current = new alphaTab.AlphaTabApi(wrapper.current)
    //   api.current.tex(`
    //     \\title "hello"
    //     .
    //   `)
    // }
    // return () => {
    //   if (api.current) {
    //     console.log('unmount')
    //     api.current.destroy()
    //     api.current = null
    //   }
    // }
  }, [])
  // useEffect(() => {
  //   if (tex) {
  //     api.current.tex(tex)
  //   }
  //   // api.tex(`
  //   //   \\title "hello"
  //   //   .
  //   //   \\track "Piano"
  //   //     \\staff
  //   //     \\tuning piano
  //   //     \\instrument  acousticgrandpiano
  //   //     c4 d4 e4 f4
  //   //     \\staff
  //   //     \\clef F4 // grand-staff F4 clef
  //   //     c2 c2 c2 c2 
  //   // `)
  // }, [tex])
  const onClicked = () => {
    // console.log('onClicked')
    // setTex(`
    //   \\title "hello"
    //   .
    //   \\track ""
    //     \\staff
    //     \\tuning piano
    //     \\instrument  acousticgrandpiano
    //     c4 d4 e4 f4
    //     \\staff
    //     \\clef F4 // grand-staff F4 clef
    //     c2 c2 c2 c2 
    // `)
    // console.log('tex', tex)
  }
  return (
    <>
      <button type="button" onClick={onClicked}>button</button>
      {/* <div ref={wrapper} id="test" data-tex="true" /> */}
      <div ref={wrapperRef} class="at-wrap">
        <div class="at-overlay">
          <div class="at-overlay-content">
            Music sheet is loading
          </div>
        </div>
        <div class="at-content">
          <div class="at-sidebar">
            <div class="at-sidebar-content">
              <div class="at-track-list" />
            </div>
          </div>
          <div class="at-viewport">
            <div ref={viewRef} class="at-main" />
          </div>
        </div>
        <div class="at-controls">
          <div class="at-controls-left">
            <a class="btn at-player-stop disabled">
              <i class="fas fa-step-backward" />
            </a>
            <a class="btn at-player-play-pause disabled">
              <i class="fas fa-play" />
            </a>
            <span class="at-player-progress">0%</span>
            <div class="at-song-info">
              <span class="at-song-title" /> -
              <span class="at-song-artist" />
            </div>
            <div class="at-song-position">00:00 / 00:00</div>
          </div>
          <div class="at-controls-right">
            <a class="btn toggle at-count-in">
              <i class="fas fa-hourglass-half" />
            </a>
            <a class="btn at-metronome">
              <i class="fas fa-edit" />
            </a>
            <a class="btn at-loop">
              <i class="fas fa-retweet" />
            </a>
            <a class="btn at-print">
              <i class="fas fa-print" />
            </a>
            <div class="at-zoom">
              <i class="fas fa-search" />
              <select>
                <option value="25">25%</option>
                <option value="50">50%</option>
                <option value="75">75%</option>
                <option value="90">90%</option>
                <option value="100" selected>100%</option>
                <option value="110">110%</option>
                <option value="125">125%</option>
                <option value="150">150%</option>
                <option value="200">200%</option>
              </select>
            </div>
            <div class="at-layout">
              <select>
                <option value="horizontal">Horizontal</option>
                <option value="page" selected>Page</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
