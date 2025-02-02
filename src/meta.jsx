/** @jsx Kaif.h @jsxFrag Kaif.Fragment */
import Kaif from 'kaif'

import data from './translation.json'

const Meta = (lang = 'en') => {
  const {
    colorBg, cover, description, title,
  } = data[lang]
  return (
    <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

      <link rel="preload" as="image" href={cover}/>

      <meta name="theme-color" content={colorBg}/>
      <link rel="icon" href={cover}/>
      <link rel="apple-touch-icon" href={cover}/>


      <title innerText={title}/>
      <meta name="description" content={description}/>

      <meta property="og:type" content="website"/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      <meta property="og:image" content={cover}/>

      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content={title}/>
      <meta name="twitter:description" content={description}/>
      <meta name="twitter:image" content={cover}/>

    </head>
  )
}

export default Meta

