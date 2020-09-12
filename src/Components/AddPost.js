import React, {useState, useContext} from 'react'
import '../custom/addpost.css'
import Avatar from '@material-ui/core/Avatar'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {UserContext} from '../UserContext'
import {db} from '../firebase'
import firebase from 'firebase'

function AddPost() {

    const [input, setInput] = useState('') 
    const [imageUrl, setImageurl] = useState('')
    const [user, setUser] = useContext(UserContext)

    const addPost = (event) => {
        event.preventDefault()
        if(input != "" || imageUrl != ""){
            db.collection('posts').add({
                title: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL,
                image: imageUrl,
                likes: 0,
                comments: 0,
                shares: 0,
                userAvatar: user.photoURL,
                userName: user.displayName
              });
                setInput("")
                setImageurl("")
        }
    }

    return (
        <div className="addPost">
            <div className="addPost__header">
                <Avatar className="addPost__avatar" />
                <form>
                    <input 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="addPost__input" 
                        placeholder="Whats's on your mind" 
                        type="text"/>
                    <input 
                        value={imageUrl}
                        placeholder="image URL (Optional)" 
                        onChange={(e) => setImageurl(e.target.value)}
                    />
                    <button onClick={addPost} >
                        Hidden
                    </button>
                </form>
            </div>
            <div className="addPost__footer">
                <div className="addPost__option">
                    <VideoCallIcon style={{color:"red"}} />
                    <h5>Live Video</h5>
                </div>
                <div className="addPost__option">
                    <PhotoLibraryIcon style={{color:"green"}} />
                    <h5>Photo/Video</h5>
                </div>
            </div>
        </div>
    )
}

export default AddPost
