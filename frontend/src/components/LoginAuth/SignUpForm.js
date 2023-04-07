import { Link, useNavigate } from "react-router-dom";
import useInput from "../../hooks/use-input";
import {
  loginValidation,
  passwordValidation,
  emailValidation,
} from "./loginValidation";

const SignUpForm = () => {
  const {
    enteredValue: enteredEmail,
    inputIsTouched: emailIsTouched,
    inputIsLeft: emailIsLeft,
    valueIsValid: enteredEmailIsValid,
    valueHasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputTouchedHandler: emailTouchedHandler,
    inputLeftHandler: emailLeftHandler,
    reset: resetEmailInput,
  } = useInput(emailValidation);

  const {
    enteredValue: enteredLogin,
    inputIsTouched: loginIsTouched,
    inputIsLeft: loginIsLeft,
    valueIsValid: enteredLoginIsValid,
    valueHasError: loginHasError,
    valueChangeHandler: loginChangeHandler,
    inputTouchedHandler: loginTouchedHandler,
    inputLeftHandler: loginLeftHandler,
    reset: resetLoginInput,
  } = useInput(loginValidation);

  const {
    enteredValue: enteredPassword,
    inputIsTouched: passwordIsTouched,
    inputIsLeft: passwordIsLeft,
    valueIsValid: enteredPasswordIsValid,
    valueHasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputTouchedHandler: passwordTouchedHandler,
    inputLeftHandler: passwordLeftHandler,
    reset: resetpasswordInput,
  } = useInput(passwordValidation);

  const navigate = useNavigate();

  let formIsValid = false;

  if (enteredEmailIsValid && enteredLoginIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;

    console.log("zalogowano");
    navigate("/admin-panel");
    resetLoginInput("");
    resetpasswordInput("");
    resetEmailInput("");
  };

  const inputStyles =
    "w-[100%] mt-[20px] text-[16px] font-semibold text-gray_500 border-b-2 focus:outline-none placeholder-gray_700 ";

  const buttonStyles =
    "h-[40px] w-[100%] mt-[30px] mb-[30px] text-[16px] font-semibold text-white rounded-[10px] ";

  return (
    <form
      onSubmit={submitFormHandler}
      className="custom-width h-auto absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] px-[20px] custom-box-shadow rounded-lg"
    >
      <h1 className="mt-[30px] text-[25px] font-bold text-gray_500">
        Create an account
      </h1>
      <p className="mt-[10px] text-[15px] font-normal text-gray_700">
        Having an account lets you like and comment articles and even upload
        your own ones. Join our platform and apply for writter permission!
      </p>
      <input
        type="text"
        id="email"
        onChange={emailChangeHandler}
        onBlur={emailLeftHandler}
        onInput={emailTouchedHandler}
        value={enteredEmail}
        placeholder="Email"
        className={
          inputStyles +
          `${
            !emailIsTouched
              ? "border-gray_700"
              : emailHasError
              ? "border-red"
              : "focus:border-blue"
          }`
        }
      ></input>
      {emailHasError && emailIsLeft && (
        <p className="text-[15px] mt-[10px] font-medium text-red">
          Incorrect login format
        </p>
      )}
      <input
        type="text"
        id="loign"
        onChange={loginChangeHandler}
        onBlur={loginLeftHandler}
        onInput={loginTouchedHandler}
        value={enteredLogin}
        placeholder="Login"
        className={
          inputStyles +
          `${
            !loginIsTouched
              ? "border-gray_700"
              : loginHasError
              ? "border-red"
              : "focus:border-blue"
          }`
        }
      ></input>
      {loginHasError && loginIsLeft && (
        <p className="text-[15px] mt-[10px] font-medium text-red">
          Login should start with capital letter, do not contain whitespace and
          special characters and have 5-8 characters.
        </p>
      )}
      <input
        type="password"
        id="password"
        onChange={passwordChangeHandler}
        onBlur={passwordLeftHandler}
        onInput={passwordTouchedHandler}
        value={enteredPassword}
        placeholder="Password"
        className={
          inputStyles +
          `${
            !passwordIsTouched
              ? "border-gray_700"
              : passwordHasError
              ? "border-red"
              : "focus:border-blue"
          }`
        }
      ></input>
      {passwordHasError && passwordIsLeft && (
        <p className="text-[15px] mt-[10px] font-medium text-red">
          Password should not contain whitespace and have at least 6 characters.
        </p>
      )}
      <button
        className={
          buttonStyles + `${formIsValid ? "bg-blue " : "bg-gray_700 "}`
        }
      >
        Zaloguj się
      </button>
      <p className="text-center mb-[30px] text-[15px] font-normal text-gray_700">
        Don't have an account?{" "}
        <span className="font-semibold">
          <Link to="/login/signin">Sign up</Link>
        </span>
      </p>
    </form>
  );
};

export default SignUpForm;
