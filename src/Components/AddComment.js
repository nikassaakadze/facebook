import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import '../custom/comment.css'
import {db} from '../firebase'
import { UserContext } from '../UserContext'
import Comment from './Comment'

const AddComment = ({commentID}) => {

  const [comment, setComment] = React.useState('')
  const [user, setUser] = React.useContext(UserContext)
  const [newComment, setNewComment] = React.useState([])

	const addComment = (e) => {
        if(e.which === 13 && e.target.value !== ""){
            db.collection('posts').doc(commentID).collection('comment').add({
                title: comment,
                authorAvatar: user.photoURL,
                authorName: user.displayName
              });
              setComment("")
        }
	}
	
	React.useEffect(() => {
        db.collection('posts')
        .doc(commentID)
        .collection('comment')
        .onSnapshot(snapshot => {
          setNewComment(snapshot.docs.map(doc => ({
            id: doc.id,
            newComment: doc.data()
          })))
        })
      }, [])

	return(
		<div className="addComment">
      {
        newComment?.map(({id, newComment}) => (
        <Comment
        id={id}
          title={newComment.title}
          authorAvatar={newComment.authorAvatar}
          authorName={newComment.authorName} />
        ))
  }
		<div className="addComment__field">
            <Avatar />
            <input 
                onKeyDown={addComment} 
                value={comment} 
                onChange={e => setComment(e.target.value)} 
                placeholder="Write comment..." 
                type="text" />
        </div>
		</div>
	)
}

export default AddComment