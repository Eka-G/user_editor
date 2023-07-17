import { Field } from "formik";
import styles from "./style.module.scss";

function FormField({ id, name, label, type, validate }) {
  return (
    <Field name={name} validate={validate}>
      {({ field, form: { errors } }) => (
        <div className={styles.field}>
          <label htmlFor={id} className={styles.field__label}>
            {label}
          </label>
          <input
            id={id}
            className={styles.field__input}
            type={type}
            {...field}
          />
          {errors[field.name] && (
            <div className={styles.field__error}>{errors[field.name]}</div>
          )}
        </div>
      )}
    </Field>
  );
}

export default FormField;
