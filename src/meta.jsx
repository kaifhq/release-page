/** @jsx Kaif.h @jsxFrag Kaif.Fragment */
import Kaif from 'kaif'

import data from './links.json'

const Meta = () => {
  return (
    <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <meta name="description" content={data.description}/>
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content={data.title}/>
      <meta property="og:description" content={data.description}/>
      <meta property="twitter:title" content={data.title}/>
      <meta property="twitter:description" content={data.description}/>
      <meta property="og:image" content={data.cover}/>
      <meta property="twitter:image" content={data.cover}/>
      <meta name="theme-color" content={data.colorBg}/>
      <link rel="icon" href={data.cover}/>
      <link rel="apple-touch-icon" href={data.cover}/>
      <title innerText={data.title}/>
    </head>
  )
}

export default Meta

