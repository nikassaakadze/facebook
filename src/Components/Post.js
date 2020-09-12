import React from 'react'
import '../custom/post.css'
import Avatar from '@material-ui/core/Avatar'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import AddComment from './AddComment'

function Post({image, timestamp, title, userName, userAvatar, likes, comments, shares, postId}) {

    return (
        <div className="post">
            <div className="post__header">
                <Avatar 
                    src={userAvatar}
                    className="post__avatar"
                />
                <div className="postHeader__info">
                    <h4>{userName}</h4>
                    <small>{new Date(timestamp?.toDate()).toUTCString()}</small>
                </div>
            </div>

            <div className="post__footer">
                <p>{title}</p>
            </div>

            <div className="post__image">
                {image != "" ? (
                    <img src={image} alt="post-image" />
                ): (
                    null
                )}
            </div>

            <div className="post__info">
                <div className="post__info--left">
                    <EmojiEmotionsIcon style={{color: "orange"}} />
                    <small>{likes}</small>
                </div>
                <div className="post__info--right">
                <li>
                    <p>{comments?.length}</p>
                    <small>Comments</small>
                </li>
                <li>
                    <p>{shares}</p>
                    <small>Shares</small>
                </li>
                </div>
            </div>
            <div className="post__options">
            <div className="post__option">
                <ThumbUpIcon />
                <p>Like</p>
            </div>
            <div className="post__option">
                <ChatBubbleOutlineIcon />
                <p>Comment</p>
            </div>
            </div>
            <AddComment commentID={postId} />
        </div>
    )
}

export default Post
