import { useNavigate } from 'react-router-dom';
import { RoundButton } from '../RoundButton';
import './ProfileInfo.css';
import { USER_ID_LOCAL_KEY } from '../../constants';
import { useContext } from 'react';
import { HomeContext } from '../../Context/HomeContext';

function ProfileInfo({name, email, dni}){
    const navigate = useNavigate();
    const {setSignInUserId} = useContext(HomeContext);

    const handleLogout = () => {
      localStorage.setItem(USER_ID_LOCAL_KEY, '');
      setSignInUserId('');
      navigate('/', {replace: true});
    }

    return(
        <div className="profile-info-container">
          <div className="profile-info">
            <figure>
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Profile Photo."/>
            </figure>
            <span id="profile-name">{name}</span>  
            <span id="profile-email">{email}</span> 
            <span id="profile-username">{dni}</span>
            <RoundButton text='Cerrar sesión' onClick={handleLogout} type='logout'/>
          </div>
        </div>
    );
}

export {ProfileInfo}