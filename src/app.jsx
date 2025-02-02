/** @jsx Kaif.h @jsxFrag Kaif.Fragment */
import Kaif from 'kaif'

import data from './translation.json'

const Group = ({name, date, links}) => {
  const children = [
    <h2>{name}</h2>,
    <span className="date">{date}</span>,
  ]
  for (const linkText in links) {
    const href = links[linkText]
    children.push(
      <a
        className="link"
        target="_blank"
        href={href}
      >
        {linkText}
      </a>
    )
  }
  return {
    elem: 'div',
    className: 'link-group',
    children,
  }
}

const LanguageSwitch = ({languages, selected}) => {
  const children = languages.map(lang => {
    if (lang == selected) {
      return (
        <span
          className="lang selected"
          innerText={lang}
        />
      )
    }
    let p = './index.html'
    if (lang != languages[0]) {
      p = `./${lang}.html`
    }

    return (
      <a
        className="lang"
        innerText={lang}
        href={p}
      />
    )
  })

  return {
    elem: 'div',
    className: 'lang-select',
    children,
  }
}

const App = (lang = 'en') => {
  const languages = Object.keys(data)
  const {
    artist, cover, links, name, date
  } = data[lang]


  return (
    <div id="root">
      <h1>{artist}</h1>
      {languages.length > 1
        ? <LanguageSwitch languages={languages} selected={lang}/>
        : ''
      }
      <img
        loading="lazy"
        src={cover}
        className="cover"
      />
      <Group links={links} name={name} date={date} />
    </div>
  )
}

export default App

