import React from "react";
//import { useNavigate } from "react-router-dom";
import "../../assets/scss/resetPassword.scss";
import Savilogo from "../../assets/svg/Savi..svg";
import Forminput from "../../components/common/Forminput";
import { SuccessModal } from "../../components/Modals/successModal";
import EyeIcon from "../../assets/svg/eye.svg";
import { togglePasswordType } from "../../utils/common";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { resetPassword2Schema } from "../../utils/schemas/auth";
import CloseEye from "../../assets/svg/eye-close.svg";
import { useDisclosure } from "@chakra-ui/react";

function ResetPassword2() {
  // const navigate = useNavigate();

  // const handleSendInstructions = () => {
  //   // Perform any necessary actions here

  //   // Navigate to ResetSuccess
  //   navigate("/popup1");
  // };

  // const handleGoBack = () => {
  //   // Perform any necessary actions here

  //   // Navigate back to Sign In page
  //   navigate(-1);
  // };

  const [passwordType, setPasswordType] = React.useState("password");
  const [passwordType2, setPasswordType2] = React.useState("password");
  const handlePasswordType = () => {
    togglePasswordType(passwordType, setPasswordType);
  };
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetPassword2Schema),
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const formSubmit = (data) => {
    onOpen();
    reset();
  };

  const handlePasswordType2 = () => {
    togglePasswordType(passwordType2, setPasswordType2);
  };
  const handleClose = () => {
    onClose();
    // navigate("/login");
  };

  return (
    <div>
      <div className="container1">
        <div className="logo1">
          <img src={Savilogo} alt="logo" style={{ alignSelf: "center" }} />
        </div>
        <div className="container2">
          <div className="containerdetails">
            <h2 className="heading2">Reset your password</h2>
            <form className="container5">
              <Forminput
                inputtype={passwordType}
                placeholder="*************"
                title="Password"
                rightIcon={passwordType === "password" ? EyeIcon : CloseEye}
                onClick={handlePasswordType}
                width="338px"
                register={{ ...register("password") }}
                error={errors?.password?.message}
              />
              <Forminput
                inputtype={passwordType2}
                placeholder="*************"
                title="confirmpassword"
                rightIcon={passwordType2 === "password" ? EyeIcon : CloseEye}
                onClick={handlePasswordType2}
                width="338px"
                register={{ ...register("confirmpassword") }}
                error={errors?.confirmpassword?.message}
              />
              <div className="spacer"></div>
              <SuccessModal
                isOpen={isOpen}
                onClose={handleClose}
                handleSubmit={handleSubmit(formSubmit)}
              />
            </form>
          </div>
          <div className="resetfooter">
            <p>Privacy Policy</p>
            <p>Copyright 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ResetPassword2;
