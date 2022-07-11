import './style.scss'
import * as bootstrap from 'bootstrap'

import {faPaw} from "@fortawesome/free-solid-svg-icons";
import {faWindows, faGoogle} from "@fortawesome/free-brands-svg-icons";

import fontawesome from '@fortawesome/fontawesome'

fontawesome.library.add([faGoogle, faPaw, faWindows])

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
