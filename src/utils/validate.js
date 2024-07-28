export const checkValidData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  let passwordMsg = "";
  let emailMsg = "";

  if (isEmailValid && isPasswordValid) {
    return { passwordMsg, emailMsg };
  } else {
    if (!isPasswordValid) {
      passwordMsg = "Password is not valid";
    }
    if (!isEmailValid) {
      emailMsg = "Email ID is not valid";
    }

    return { passwordMsg, emailMsg };
  }
};
