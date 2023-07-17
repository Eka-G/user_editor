import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import {
  selectCurrentProfile,
  changeUser,
} from "#features/profiles/profilesSlice";
import { FormField } from "#components";
import { validateNames, validateAge, validateEmail } from "./validations";
import styles from "./style.module.scss";

function ProfilePanel() {
  const dispatch = useDispatch();
  const currentProfile = useSelector(selectCurrentProfile);

  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: currentProfile.name,
        surname: currentProfile.surname,
        age: currentProfile.age,
        email: currentProfile.email,
      }}
      validate={(values) => {
        const errors = {};
        if (!values.name || !values.surname || !values.age || !values.email) {
          errors.common = "All fields are required";
        }

        return errors;
      }}
      onSubmit={(values) =>
        dispatch(
          changeUser({
            ...currentProfile,
            name: values.name,
            surname: values.surname,
            age: values.age,
            email: values.email,
          }),
        )
      }
    >
      {({ errors, handleSubmit, isValid, dirty }) => (
        <form onSubmit={handleSubmit}>
          <FormField
            id="name"
            name="name"
            label="Name"
            type="text"
            validate={validateNames}
          />
          <FormField
            id="surname"
            name="surname"
            label="Surname"
            type="text"
            validate={validateNames}
          />
          <FormField
            id="age"
            name="age"
            label="Age"
            type="number"
            validate={validateAge}
          />
          <FormField
            id="email"
            name="email"
            label="Email"
            type="text"
            validate={validateEmail}
          />

          <button
            type="submit"
            disabled={!isValid || !dirty}
            className={styles.form__save_btn}
          >
            Save
          </button>

          {errors.common && (
            <span className={styles.form__error}>{errors.common}</span>
          )}
        </form>
      )}
    </Formik>
  );
}

export default ProfilePanel;
