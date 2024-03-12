import { writeFileSync, readFileSync } from 'fs'
import { Window } from 'happy-dom'

import Kaif from 'kaif'
import App from './app.jsx'
import Meta from './meta.jsx'
import data from './links.json'

const languages = Object.keys(data)

const gen = (lang = 'en') => {
  window = new Window()
  document = window.document
  document.body.innerHTML = '<div id="root"></div>'

  Kaif.init(
    document.getElementById('root'),
    App.bind(null, lang)
  )
  Kaif.init(
    document.head,
    Meta.bind(null, lang)
  )

  const { colorText, colorBg } = data[lang]

  const s = document.createElement('style')
  const stylesRaw = readFileSync('./src/styles.css', 'utf8')
  s.innerHTML = stylesRaw
    .replaceAll('\r', ' ')
    .replaceAll('\n', ' ')
    .replaceAll('  ', '\t')
    .replaceAll('\t', '')
    .replace('%TEXT%', colorText)
    .replace('%BG%', colorBg)
  document.head.append(s)

  document.documentElement.lang = lang

  const htmlCode = document.documentElement.outerHTML
  let p = './dist/index.html'
  if (lang != languages[0]) {
    p = `./dist/${lang}.html`
  }

  writeFileSync(p, htmlCode, 'utf8')
}

for (const lang of languages) {
  gen(lang)
}
