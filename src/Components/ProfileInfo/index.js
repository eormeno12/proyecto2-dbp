import './ProfileInfo.css';

function ProfileInfo({name, email, dni}){
    return(
        <div className="profile-info-container">
          <div className="profile-info">
            <figure>
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Profile Photo."/>
            </figure>
            <span id="profile-name">{name}</span>  
            <span id="profile-email">{email}</span> 
            <span id="profile-username">{dni}</span>
          </div>
        </div>
    );
}

export {ProfileInfo}