import { basePath } from "../constants";

const ProfileInfoCard = () => {
  return (
    <div className="profile-info-container">
      <div className="profile-image-container">
        <img src={`${basePath}/avatars/3.svg`} />
      </div>
      <div className="profile-name-container">Dharahas Hanumanthu</div>
      <div className="profile-title-container h3">Software Engineer</div>
    </div>
  );
};

export default ProfileInfoCard;
