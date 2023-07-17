import { useSelector, useDispatch } from "react-redux";
import {
  selectUsers,
  setCurrentProfile,
} from "#features/profiles/profilesSlice";
import styles from "./style.module.scss";

function UserList() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  return (
    <ul className={styles.list}>
      {users.map((user, i) => (
        <li key={user.id}>
          <button
            className={styles.list__btn}
            onClick={() => dispatch(setCurrentProfile({ ...user, index: i }))}
          >
            {`${i + 1}. ${user.name} ${user.surname}`}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
