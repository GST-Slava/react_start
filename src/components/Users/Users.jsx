import React from "react";
import styles from './users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoUrl: 'https://www.meme-arsenal.com/memes/825b9b3ef148fbf2b20f47951e170699.jpg', followed: false, fullName: 'Dmitry', status: 'I am a ceo', location: { city: 'Minsk', country: 'Belarus' } },
            { id: 2, followed: true, fullName: 'Alexander', status: 'I am freelancer', location: { city: 'St.Peterburg', country: 'Russia' } },
            { id: 3, followed: false, fullName: 'Igor', status: 'I am a builder', location: { city: 'St.Peterburg', country: 'Russia' } },
            { id: 4, followed: true, fullName: 'Viacheslv', status: 'I am a developer', location: { city: 'Minsk', country: 'Belarus' } },
        ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                    </div>
                </span>

                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>

            </div>)
        }
    </div>
}

export default Users;