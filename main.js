import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('he').innerHTML = ``

setupCounter(document.querySelector('#counter'))