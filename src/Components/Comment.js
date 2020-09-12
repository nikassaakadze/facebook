import React from 'react'
import Avatar from '@material-ui/core/Avatar'

function Comment({title, authorAvatar, authorName}) {
    return (
        <div className="comment">
            <Avatar className="comment__authorAvatar" src={authorAvatar} />
            <div className="comment__body">
                <h4>{authorName}</h4>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default Comment
