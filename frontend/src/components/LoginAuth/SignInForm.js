import useInput from "../../hooks/use-input";
import { Link, useNavigate } from "react-router-dom";
import { loginValidation, passwordValidation } from "./loginValidation";

const SignInForm = () => {
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
    reset: resetPasswordInput,
  } = useInput(passwordValidation);

  const navigate = useNavigate();

  let formIsValid = false;

  if (enteredLoginIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;

    console.log("zalogowano");
    navigate("/admin-panel");
    resetLoginInput("");
    resetPasswordInput("");
  };

  const inputStyles =
    "w-[100%] mt-[20px] text-[16px] font-semibold text-gray_500 border-b-2 focus:outline-none placeholder-gray_700 ";

  const buttonStyles =
    "h-[40px] w-[100%] mt-[30px] mb-[30px] text-[16px] font-semibold text-white rounded-[10px] ";

  const errorStyles = "text-[15px] mt-[10px] font-medium text-red";

  return (
    <form onSubmit={submitFormHandler} className="">
      <h1 className="mt-[30px] text-[24px] font-bold text-gray_500">
        Hi, Welcome Back
      </h1>
      <p className="mt-[10px] text-[16px] font-normal text-gray_700">
        It's good to see you again! Hope you didn't miss any interesting
        articles.
      </p>

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
        <p className={errorStyles}>Incorrect login or password</p>
      )}
      <p className="text-end mt-[10px] text-[15px] font-medium text-blue">
        Forgot Password?
      </p>
      <button
        className={
          buttonStyles + `${formIsValid ? "bg-blue " : "bg-gray_700 "}`
        }
      >
        Zaloguj się
      </button>

      <p className="text-center mb-[30px] text-[15px] font-normal text-gray_700">
        <span> Don't have an account</span>
        <span className="font-semibold">
          <Link to="/login/signup"> Sign Up</Link>
        </span>
      </p>
    </form>
  );
};

export default SignInForm;
