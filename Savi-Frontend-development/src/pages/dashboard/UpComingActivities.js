import React from "react";

const UpComingActivities = ({ title, time, image, amount, marginBottom }) => {
  const amountStyle = {
    color: amount.includes("-") ? "red" : "#34A853",
    fontSize: "14px",
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          paddingBottom: "22px",
          borderBottom: "1px solid #D0D5DD",
          marginBottom: marginBottom,
        }}
      >
        <div
        style={{
          display: "flex",
        }}
        >
          <div>
            <img src={image} alt="corp member" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "16px",
              fontSize: "14px",
            }}
          >
            <p
              style={{
                marginBottom: "5px",
                textAlign: "start",
              }}
            >
              {title}
            </p>
            <p
              style={{
                fontSize: "12px",
                color: "rgb(152, 162, 179)",
              }}
            >
              {time}
            </p>
          </div>
        </div>
        <div style={amountStyle}>{amount}</div>
      </div>
    </div>
  );
};

export default UpComingActivities;
