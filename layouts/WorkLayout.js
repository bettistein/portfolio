import React from 'react'
import Meta from '../components/Meta'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const SideBar = props => {
  const { client, project, year } = props
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
  const { images } = props

  return (
    <div className="gallery">
      {images.map(src => (
        <img key={src} src={src} />
      ))}
    </div>
  )
}

const MoreProjectsCard = props => {
  const { client, thumbnail, href } = props

  return (
    <a href={href} className="image-item">
      image eins
      <p>{client}</p>
      <img src={thumbnail} />
    </a>
  )
}

const MoreProjects = props => {
  const { data } = props

  return (
    <div className="more-projects">
      <h3>More Projects</h3>
      <div className="image-item-wrapper">
        {data.map((project, i) => {
          const { sideinfo, thumbnail, href } = project
          return (
            <MoreProjectsCard
              key={i}
              client={sideinfo.client}
              thumbnail={thumbnail}
              href={href}
            />
          )
        })}
      </div>
    </div>
  )
}

/* ------------

Render/Export all that stuff above ^

------------ */

export default props => {
  const { page, pathname } = props
  const MdxComponent = page.file

  const { hero, sideinfo, gallery, moreProjects } = page.file.frontMatter
  const { title, description, keywords } = page.file.meta
  return (
    <div className="work-layout">
      <Meta title={title} description={description} keywords={keywords} />

      <main>
        <Nav pathname={pathname} />
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
            <MdxComponent />{' '}
          </div>
        </div>
        <Gallery images={gallery} />
      </main>
      <MoreProjects data={moreProjects} />
      <Footer />
    </div>
  )
}
