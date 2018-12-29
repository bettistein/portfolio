import React from 'react'
import {hot} from 'react-hot-loader'
import Meta from '../components/Meta'

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

  const MdxComponent = page.file
  const frontMatter = page.file.frontMatter

  return (
    <Wrapper>
      <MdxComponent />
    </Wrapper>
  )
}

export default hot(module)(SiteBody)
