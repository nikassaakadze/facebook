import React from 'react'
import '../custom/story.css'
import {Avatar} from '@material-ui/core'

function Story({image, src, title}) {
    return (
        <div style={{backgroundImage: `url(${image})`}} className="story">
            <Avatar className="story__avatar" src={src} />
            <p>{title}</p>
        </div>
    )
}

export default Story
