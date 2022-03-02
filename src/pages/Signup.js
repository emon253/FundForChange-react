import Illustration from "../Component/Illustration";
import SignupForm from "../Component/SignupForm";
import signupImage from "../Assets/images/signup.svg";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>

      <div className="column">
        <Illustration image={signupImage} />
        <SignupForm />
      </div>
    </>
  );
}
