import { writeFileSync, readFileSync } from 'fs'
import { Window } from 'happy-dom'

window = new Window()
document = window.document
document.body.innerHTML = '<div id="root"></div>'


import Kaif from 'kaif'
import App from './src/app.jsx'
import Meta from './src/meta.jsx'
import data from './src/links.json'

Kaif.init(document.getElementById('root'), App)
Kaif.init(document.head, Meta)

const s = document.createElement('style')
const stylesRaw = readFileSync('./src/styles.css', 'utf8')
s.innerHTML = stylesRaw
  .replaceAll('\r', ' ')
  .replaceAll('\n', ' ')
  .replaceAll('  ', '\t')
  .replaceAll('\t', '')
  .replace('%TEXT%', data.colorText)
  .replace('%BG%', data.colorBg)
document.head.append(s)

document.documentElement.lang = 'en'

const htmlCode = document.documentElement.outerHTML
writeFileSync('./dist/index.html', htmlCode, 'utf8')
