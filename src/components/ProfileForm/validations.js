export const validateNames = (value) => {
  let errorMessage;

  if (!/^[a-zA-Zа-яА-Я]{1,}$/i.test(value)) {
    errorMessage = `Input letters(min 1)`;
  }

  return errorMessage;
};

export const validateAge = (value) => {
  let errorMessage;

  if (value < 1 || value > 100) {
    errorMessage = "Invalid age";
  }

  return errorMessage;
};

export const validateEmail = (value) => {
  let errorMessage;

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    errorMessage = "Invalid email address";
  }

  return errorMessage;
};
