import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reduser";
import MyPosts from './MyPosts';

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        //props.addPost();
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        //props.updateNewPostText(text);
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                        value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;