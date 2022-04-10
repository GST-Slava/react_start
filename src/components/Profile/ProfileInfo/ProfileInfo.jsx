import react from 'react';
import Preloader from '../../common/preloader/preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src='https://i.pinimg.com/originals/4f/d3/50/4fd3509513507f97cc7b30edc5cc910f.jpg' alt='surface_img' />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;