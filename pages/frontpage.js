import React from 'react'
import {workFrontMatters} from '../data'

const Card = props => {
  const {thumbnail, title} = props
  return (
    <div className="card">
      <img src={thumbnail} />
      {title}
    </div>
  )
}

const Frontpage = () => {
  return (
    <div>
      {workFrontMatters.map((frontMatter, i) => {
        const {thumbnail, title} = frontMatter
        return <Card key={i} thumbnail={thumbnail} title={title} />
      })}
    </div>
  )
}

Frontpage.meta = {
  title: "Home",
  description: "Portfolio of Bettina Steinbrecher",
  keywords: ['Design', 'Branding', 'UX']
};

export default Frontpage;
