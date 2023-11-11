import { useState } from "react";
import Forminput from "../../components/common/Forminput";
import Image from "react-bootstrap/Image";
import SaviWhiteLogo from "../../assets/svg/White_Logo.svg";
import Logo from "../../assets/svg/Savi..svg";
import "../../assets/scss/signup.scss";
import EyeIcon from "../../assets/svg/eye.svg";
import { togglePasswordType } from "../../utils/common";
import "react-toastify/dist/ReactToastify.css";
import { ButtonComp } from "../../components/common";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../../utils/schemas/auth";
import CloseEye from "../../assets/svg/eye-close.svg";
import { GoogleServices } from "../../components/common";
import { useMutation } from "@tanstack/react-query";
import { signup } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

export const SignUp = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const { mutate, isLoading } = useMutation((data) => signup(data), {
    onSuccess: (data) => {
      toast({
        title: "Account created.",
        description: data?.displayMessage,
        position: "top-right",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      console.log(data);
      reset();
    },
    onError: (error) => {},
  });

  const formSubmit = (data) => {
    mutate(data);
  };

  const [passwordType, setPasswordType] = useState("password");
  const [confirmPassword, setConfirmPassword] = useState("password");
  const handlePasswordType = () => {
    togglePasswordType(passwordType, setPasswordType);
  };

  const handleConfirmPasswordType = () => {
    togglePasswordType(confirmPassword, setConfirmPassword);
  };

  return (
    <>
      <div className="container">
        <div className="firstSection">
          <Image
            src={SaviWhiteLogo}
            alt="logo"
            style={{ width: "71px", height: "45px", marginBottom: "40px" }}
          />
          <div className="innerFirstSection">
            <h3>Welcome to Savi</h3>
            <p>
              Start saving securely and hassle-free with Savi, the smart savings
              platform.
            </p>
          </div>
        </div>
        <div className="secondSection">
          <div className="innercontainer">
            <img src={Logo} alt="Savi Logo" className="img-savi" />
            <p className="text-savi">Welcome to Savi.</p>
            <GoogleServices />
            <div id="spacetag">
              <img src="/Divider.png" alt="Divider" />
              <p>OR</p>
              <img src="/Divider.png" alt="Divider" />
            </div>
            <form className="innerForm">
              <Forminput
                title="First Name"
                placeholder="Enter your first name"
                inputtype="text"
                register={{ ...register("firstName") }}
                error={errors?.firstName?.message}
                isDisabled={isLoading}
              />
              <Forminput
                title="Last Name"
                placeholder="Enter your last name"
                inputtype="text"
                register={{ ...register("lastName") }}
                error={errors?.lastName?.message}
                isDisabled={isLoading}
              />
              <Forminput
                title="Email Address"
                placeholder="Enter your email"
                inputtype="text"
                register={{ ...register("email") }}
                error={errors?.email?.message}
                isDisabled={isLoading}
              />
              <Forminput
                title="Phone Number"
                placeholder="Enter your phone number"
                inputtype="text"
                register={{ ...register("phoneNumber") }}
                error={errors?.phoneNumber?.message}
                isDisabled={isLoading}
              />
              <Forminput
                title="Password"
                placeholder="****************"
                inputtype={passwordType}
                rightIcon={passwordType === "password" ? EyeIcon : CloseEye}
                register={{ ...register("password") }}
                error={errors?.password?.message}
                onClick={handlePasswordType}
                isDisabled={isLoading}
              />
              <Forminput
                title="Confirm Password"
                placeholder="****************"
                inputtype={confirmPassword}
                rightIcon={confirmPassword === "password" ? EyeIcon : CloseEye}
                register={{ ...register("confirmpassword") }}
                error={errors?.confirmpassword?.message}
                onClick={handleConfirmPasswordType}
                isDisabled={isLoading}
              />
              <ButtonComp
                label="Sign up"
                width="100%"
                onClick={handleSubmit(formSubmit)}
                isLoading={isLoading}
              />
              <p className="box-text">
                Already have an account ?{" "}
                <a href="/login" className="sign-link">
                  Sign in here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
