import React, {useEffect, useState, useContext} from 'react'
import '../custom/feed.css'
import StoryReel from './StoryReel'
import AddPost from './AddPost'
import Post from './Post'
import {db} from '../firebase.js'

function Feed() {

	const [post, setPost] = useState([])

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPost(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })))
    })
  }, [])

    return (
        <div className="feed">
            <StoryReel  />
            <AddPost />
            {
            	post?.map(({id, post}) => (
            		<Post 
                    postId={id}
            		image={post.image}
            		title={post.title} 
            		timestamp={post.timestamp}
            		userName={post.userName}
            		userAvatar={post.userImage}
            		likes={post.likes}
            		comments={post.comments}
            		shares={post.shares}

            		/>
            	))
            }
        </div>
    )
}

export default Feed
