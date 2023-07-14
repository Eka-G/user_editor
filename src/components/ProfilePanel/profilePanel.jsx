import styles from "./style.module.scss";

function ProfilePanel() {
  return (
    <div className={styles.profile}>
      <div className={styles.profile__label}>
        <span>User</span>
      </div>

      <img src="avatar.svg" alt="avatar" width="100" height="100" />

      <div className={styles.profile__info}>
        <label for="name" className={styles.profile__field_label}>
          Name:
        </label>
        <input id="name" name="name" />

        <label for="surname" className={styles.profile__field_label}>
          Surname:
        </label>
        <input id="surname" name="surname" />

        <label for="age" className={styles.profile__field_label}>
          Age:
        </label>
        <input id="age" name="age" />

        <label for="email" className={styles.profile__field_label}>
          Email:
        </label>
        <input id="email" name="email" />
      </div>
    </div>
  );
}

export default ProfilePanel;
