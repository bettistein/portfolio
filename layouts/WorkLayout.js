import React from 'react'
import Meta from '../components/Meta'
import {MDXProvider} from '@mdx-js/tag'

const SideBar = props => {
  const {client, project, year} = props
  return (
    <div>
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
        <img src={hero} className="hero" />
        <div>
          <SideBar
            client={sideinfo.client}
            project={sideinfo.project}
            year={sideinfo.year}
          />
          <MdxComponent />
        </div>
        <Gallery images={gallery} />
      </main>
    </div>
  )
}
