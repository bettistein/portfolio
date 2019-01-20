import React from 'react'
import { hot } from 'react-hot-loader'
import Meta from '../components/Meta'
import WorkLayout from './WorkLayout'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

import '../styles/main.scss'

const Wrapper = ({ children, meta }) => {
  const { title, description, keywords } = meta
  return (
    <>
      <Meta title={title} description={description} keywords={keywords} />
      {children}
    </>
  )
}

const SiteBody = (props, ctx) => {
  const { children, location, page } = props
  const { router } = ctx

  if (location.pathname === '/') {
    return <Wrapper meta={page.file.meta}>{props.children}</Wrapper>
  }

  if (location.pathname.match(/^\/work/)) {
    return <WorkLayout page={page} pathname={location.pathname}/>
  }

  if (location.pathname.match(/^\/about/)) {
    return (
      <Wrapper meta={page.file.meta}>
        <div className="one-column-wrapper">
          <Nav pathname={location.pathname}/>
          {props.children}
        </div>
        <Footer />
      </Wrapper>
    )
  }

  /* Otherwise assume that we should render a Markdown component */
  const MdxComponent = page.file

  return (
    <Wrapper meta={page.file.meta}>
      <div className="one-column-wrapper">
        <Nav />
        <MdxComponent />
      </div>
      <Footer />
    </Wrapper>
  )
}

export default hot(module)(SiteBody)
