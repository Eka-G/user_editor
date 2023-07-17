import { useSelector } from "react-redux";
import { selectCurrentProfile } from "#features/profiles/profilesSlice";
import { ProfileForm } from "#components";
import styles from "./style.module.scss";

function ProfilePanel() {
  const currentProfile = useSelector(selectCurrentProfile);
  const mainLabel = currentProfile
    ? `${currentProfile.name} ${currentProfile.surname}`
    : "Select profile";

  return (
    <div className={styles.profile}>
      <div className={styles.profile__label}>
        <span>{mainLabel}</span>
      </div>

      <img src="avatar.svg" alt="avatar" width="100" height="100" />

      {currentProfile ? (
        <ProfileForm />
      ) : (
        <p>Please, check the list and choose user</p>
      )}
    </div>
  );
}

export default ProfilePanel;
