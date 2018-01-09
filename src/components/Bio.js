import React from 'react'

// Import typefaces

import bgimage from './bgimage.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div style={{
          display: `flex`,
          backgroundColor: '#848484',
          width: '100%',
          height: '94vh',
          margin: '0 auto',
          backgroundImage: "url(" + bgimage + ")",
          backgroundPosition: 'center',
        }}>

        <p style= {{
          color: '#ffffff',
          fontSize: '2.3rem',
          lineHeight: '2.5rem',
          textAlign: 'center',
          maxWidth: 360,
          paddingTop: 200,
          margin: '0 auto',

        }}>
        "Ist das Kunst, oder kann das weg?"
        </p>
      </div>
    )
  }
}

export default Bio
