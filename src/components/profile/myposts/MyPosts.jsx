import React from 'react'
import style from './MyPosts.module.css'
import Post from './post/Post'
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let postsElements = props.postsData.map(post => <Post messages={post.post} likes={post.likesCounter} id={post.id}
                                                          key={post.id}/>)
    let newPostElement = React.createRef();
    let addPost = () => {
        // props.dispatch(addPostActionCreator())
        props.addPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        //props.dispatch(updateNewPostTextActionCreator(text))
        props.onPostChange(text)
    }
    let addNewPost = (values) => {
        props.addPost(values.newPostText)
    }
    return (
        <div className={style.profile}>
            <div>
                <h3>My posts</h3>
            </div>
            <AddPostReduxForm onSubmit={addNewPost}/>
            {postsElements}
        </div>
    )
}
const AddPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div className={style.input}>
            <Field component='textarea' name='newPostText' placeholder="Your news..."/>
        </div>
        <div>
            <button>Add News</button>
        </div>
    </form>
}
const AddPostReduxForm = reduxForm({form: 'profileAddPostForm'})(AddPostForm)
export default MyPosts;