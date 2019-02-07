import React from 'react'
import Helmet from 'react-helmet'

const Meta = ({
  siteName = 'Bettystein',
  title = '',
  description = '',
  keywords = [],
}) => (
  <Helmet>
    <link rel="canonical" href="https://bettystein.com/" />
    <link rel="icon" type="image/png" href="/favicon.png" />

    <title>
      {siteName}
      {title != '' ? '- ' + title : ''}
    </title>
    <meta property="og:site_name" content={siteName} />
    <meta charSet="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1, minimal-ui"
    />
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords.join(', ')} />

    {/*
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content="/meta-image.png" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:site" content="@ReactFinland" />
    <meta name="twitter:image" content="./meta-image.png" />
    */}
  </Helmet>
)

export default Meta
