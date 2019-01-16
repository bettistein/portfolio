import React from 'react'
import Meta from '../components/Meta'
import Nav from '../components/Nav'
import {MDXProvider} from '@mdx-js/tag'

const SideBar = props => {
  const {client, project, year} = props
  return (
    <div className="sidebar">
      <div>
        {' '}
        <span> Client:</span> {client}{' '}
      </div>
      <div>
        {' '}
        <span> Project:</span> {project}{' '}
      </div>
      <div>
        {' '}
        <span> Year:</span> {year}{' '}
      </div>
    </div>
  )
}

const Gallery = props => {
  const {images} = props

  return (
    <div className="gallery">
      {images.map(src => (
        <img key={src} src={src} />
      ))}
    </div>
  )
}

export default props => {
  const {page} = props
  const MdxComponent = page.file

  const {hero, sideinfo, gallery} = page.file.frontMatter
  const {title, description, keywords} = page.file.meta
  return (
    <div className="work-layout">
      <Meta title={title} description={description} keywords={keywords} />
     
      <main>
      <Nav />
      <div className="hero-wrapper">
        <img src={hero} className="hero" />
        </div>
        <div className="two-column-text">
          <SideBar
            client={sideinfo.client}
            project={sideinfo.project}
            year={sideinfo.year}
          />
          <div className="mdxcomponent">

          <MdxComponent /> </div>
        </div>
        <Gallery images={gallery} />
        
      </main>
    </div>
  )
}
