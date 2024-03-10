/** @jsx Kaif.h @jsxFrag Kaif.Fragment */
import Kaif from 'kaif'

import data from './links.json'

const Group = () => {
  const children = [
    <h2>{data.name}</h2>,
    <span className="date">{data.date}</span>,
  ]
  for (const platform of ["Spotify", "Youtube Music"]) {
    const href = 
    children.push(
      <a
        className="link"
        href={data[platform]}
        target="_blank"
      >
        Listen on {platform}
      </a>
    )
  }
  return {
    elem: 'div',
    className: 'link-group',
    children,
  }
}

const Image = () => {
  return (
    <img
      src={data.cover}
      className="cover"
    />
  )
}

const App = () => {
  return (
    <div id="root">
      <h1>{data.artist}</h1>
      <Image />
      <Group />
    </div>
  )
}

export default App

