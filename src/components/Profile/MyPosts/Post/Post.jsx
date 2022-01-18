import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (

            <div className={s.item}>
                <img src='https://www.denofgeek.com/wp-content/uploads/2019/02/mcu-1-iron-man.jpg?resize=768%2C432' />
                {props.message}
                <div>
                    <span>Like</span> {props.likesCount}
                </div>
            </div>
    )
}
export default Post;