import Illustration from "../Component/Illustration";
import LoginForm from "../Component/LoginForm";
import loginImage from "../Assets/images/login.svg";
export default function Signup() {
  return (
    <>
      <h1>Login to your account</h1>

      <div className="column">
        <Illustration image={loginImage}  />
        <LoginForm />
      </div>
    </>
  );
}
