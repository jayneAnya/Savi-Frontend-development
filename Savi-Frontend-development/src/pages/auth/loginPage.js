import React from "react";
import { useState } from "react";
import "../../assets/scss/loginpage.scss";
import WhiteSaviLogo from "../../assets/svg/White_Logo.svg";
import { ButtonComp } from "../../components/common";
import EyeIcon from "../../assets/svg/eye.svg";
import Forminput from "../../components/common/Forminput";
import { togglePasswordType } from "../../utils/common";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/schemas/auth";
import { GoogleServices } from "../../components/common";
import Savilogo from "../../assets/svg/Savi..svg";
import CloseEye from "../../assets/svg/eye-close.svg";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../api/auth";
import { useToast } from "@chakra-ui/react";

export const LoginPage = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const [passwordType, setPasswordType] = useState("password");
  const handlePasswordType = () => {
    togglePasswordType(passwordType, setPasswordType);
  };
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { mutate, isLoading } = useMutation((data) => login(data), {
    onSuccess: (data) => {
      toast({
        title: "Success",
        description: "Login Successful",
        position: "top-right",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      reset();
      navigate("/dashboard");
    },
    onError: (error) => {
      toast({
        title: "Login Failed.",
        description: error?.response?.data?.message,
        position: "top-right",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    },
  });

  const formSubmit = (data) => {
    mutate(data);
    reset();
    // //route to dashboard
    navigate("/dashboard");
  };
  return (
    <div className="login_container">
      <div className="left-section">
        <div className="overlay">
          <img src={WhiteSaviLogo} alt="Whitelogo" />
          <div className="text">
            <h2 className="heading">Easy Group Savings</h2>
            <p className="subheading">
              Save collectively with rotating lump sum payouts, eliminating
              risks of traditional method.
            </p>
          </div>
        </div>
      </div>
      <div className="right-section">
        <form className="loginform">
          <div className="text-2">
            <img src={Savilogo} alt="logo" />
            <p className="welcome">Welcome back to Savi.</p>
          </div>
          <GoogleServices style={{ width: "100%" }} />
          <div id="spacetag">
            <img src="/Divider.png" alt="Divider" />
            <p>OR</p>
            <img src="/Divider.png" alt="Divider" />
          </div>
          <div onSubmit={handleSubmit(formSubmit)}>
            <Forminput
              title="Email Address"
              placeholder="Enter your email"
              inputtype="text"
              register={{ ...register("userName") }}
              error={errors?.userName?.message}
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

            <div className="forgot">
              {" "}
              <a href="/password-reset1">Forgot Password</a>
            </div>

            <ButtonComp
              label="Sign in"
              width="100%"
              onClick={handleSubmit(formSubmit)}
              isLoading={isLoading}
            />
            <p className="account">
              Don't have an account?{" "}
              <a className="link" href="/sign-up">
                Sign Up here
              </a>
            </p>
          </div>
        </form>
        <div className="privacy">
          <p>Privacy Policy</p>
          <p>Copyright 2022</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
