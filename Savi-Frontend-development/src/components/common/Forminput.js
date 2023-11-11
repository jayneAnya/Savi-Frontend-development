import React from "react";
import "../../assets/scss/forminput.scss";

const Forminput = ({
  title,
  placeholder,
  inputtype,
  leftIcon,
  rightIcon,
  borderRadius,
  width,
  onClick,
  register,
  error,
}) => {
  return (
    <div
      className="custominput"
      style={{
        marginTop: title ? "16px" : "0px",
      }}
    >
      {title && (
        <p
          className="custominput__title"
          style={{
            marginBottom: title ? "8px" : "0px",
          }}
        >
          {title}
        </p>
      )}
      <div className="custominput__group">
        {leftIcon && (
          <img
            src={leftIcon}
            alt="icon"
            className="custominput__iconleft"
            style={{
              position: "absolute",
              left: leftIcon ? "24px" : "0px",
              top: leftIcon ? "10px" : "0px",
            }}
          />
        )}
        <input
          className="custominput__input"
          type={inputtype}
          placeholder={placeholder}
          {...register}
          style={{
            paddingLeft: leftIcon ? "56px" : "16px",
            paddingRight: rightIcon ? "42px" : "16px",
            borderRadius: borderRadius ? borderRadius : "8px",
            width: width ? width : "320px",
            height: "46px",
          }}
        />
        {rightIcon && (
          <img
            src={rightIcon}
            alt="icon"
            onClick={onClick ? onClick : null}
            className="custominput__iconright"
            style={{
              position: "absolute",
              top: rightIcon ? "10px" : "0px",
              right: "15px",
            }}
          />
        )}
        {error && <p className="custominput__error">{error}</p>}
      </div>
    </div>
  );
};

export default Forminput;
