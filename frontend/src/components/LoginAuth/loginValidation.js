export const emailValidation = (email) => {
  const loginPattern = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
  return loginPattern.test(email);
};

export const loginValidation = (login) => {
  const loginPattern = /^[A-Z][a-zA-Z0-9]{5,8}$/;
  return loginPattern.test(login);
};

export const passwordValidation = (password) => {
  const passwordPattern = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/g;
  return passwordPattern.test(password);
};
