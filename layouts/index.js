import React from 'react'
import {hot} from 'react-hot-loader'
import Meta from '../components/Meta'
import WorkLayout from './WorkLayout'

import '../styles/main.scss'

const Wrapper = ({children, meta}) => {
  const {title, description, keywords} = meta
  return (
    <>
      <Meta title={title} description={description} keywords={keywords} />
      {children}
    </>
  )
}

const SiteBody = (props, ctx) => {
  const {children, location, page} = props
  const {router} = ctx

  if (location.pathname === '/') {
    return <Wrapper meta={page.file.meta}>{props.children}</Wrapper>
  }

  if (location.pathname.match(/^\/work/)) {
    return <WorkLayout page={page} />
  }

  return <div> Unknown Layout </div>
}

export default hot(module)(SiteBody)
