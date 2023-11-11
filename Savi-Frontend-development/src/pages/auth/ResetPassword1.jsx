import { useNavigate } from "react-router-dom";
import { ButtonComp } from "../../components/common";
import "../../assets/scss/resetPassword.scss";
import Savilogo from "../../assets/svg/Savi..svg";
import Forminput from "../../components/common/Forminput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPassword1Schema } from "../../utils/schemas/auth";
import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "../../api/auth";
import { forgotPasswordSchema } from "../../utils/schemas/forgotPassword";

function ResetPassword1() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
  });
  
  const { mutate, isLoading } = useMutation((data) => forgotPassword(data), {
    onSuccess: (data) => {
      console.log(data);
      reset();
    },
  });

  const formSubmit = (data) => {
    mutate(data);
    // navigate("/password-reset2");
  };

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/login");
  };

  return (
    <div className="container1">
      <div className="logo1">
        <img src={Savilogo} alt="logo" />
      </div>
      <div className="container2">
        <div className="containerdetails">
          <h2 className="title">Reset your password</h2>
          <p className="subtitle">
            Enter your email below and we&apos;ll send you instructions on how
            to reset your password.
          </p>

          <form className="container5">
            <Forminput
              placeholder="Enter your email"
              inputtype={"text"}
              title="Email"
              width="338px"
              register={{ ...register("email") }}
              error={errors.email?.message}
              IsDisabled={isLoading}
            />
            <div className="spacer"></div>
            <ButtonComp
              label={<h5 className="btntext">Send request instructions</h5>}
              width="100%"
              onClick={handleSubmit(formSubmit)}
              isLoading={isLoading}
            />
            <p className="signup1">
              Go Back to{" "}
              <span className="signuplink" onClick={handleGoBack}>
                Sign In here
              </span>
            </p>
          </form>
        </div>
        <div className="resetfooter">
          <p>Privacy Policy</p>
          <p>Copyright 2022</p>
        </div>
      </div>
    </div>
  );
}
export default ResetPassword1;
