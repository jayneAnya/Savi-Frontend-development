import * as React from "react";
import DatePicker from "../../assets/svg/DatePicker.svg";
import TransactionHistory from "./totalIncomeGraph";
import "../../assets/scss/dashboard.scss";
import { CardComp } from "../../components/dashboard";
import People from "../../assets/svg/people.svg";
import Person from "../../assets/svg/person.svg";
import Hide from "../../assets/svg/hideIcon.svg";
import "../../assets/scss/transactions.scss";
import UpComingActivities from "./UpComingActivities";
import corper from "../../assets/images/corper.png";
import { TransactionTabs } from "./tranx";
import { MyGoals } from "../../components/dashboard";
import Airplane from "../../assets/svg/airplane.svg";
import Home from "../../assets/svg/Home.svg";
import Car from "../../assets/svg/car.svg";
import MessageBox from "../../assets/svg/message-question.svg";
// import { useIndentityTypes } from "../../hooks/useIndentityTypes";
import { useGetProfile } from "../../hooks/useGetProfile";
import { WalletCard } from "./globalWalletCard";
import { Banner, Loading } from "../../components/common";
import { Flex } from "@chakra-ui/react";
import { useGetWallet } from "../../hooks/useGetWallet";
import { useUserTargets } from "../../hooks/useTargets";

export const Dashboard = () => {
  const cardBox = [
    {
      icon: People,
      text: "Total Group Savings",
      amount: "0",
    },
    {
      icon: Person,
      text: "Total Target Savings",
      amount: "0",
    },
  ];

  const upcomingActivities = [
    {
      key: 1,
      title: "Contribution to Lagos Corp Group",
      time: "May 29, 2023 at 11:30 AM",
      image: corper,
      amount: "+₦5,000",
    },
    {
      key: 2,
      title: "Contribution to Lagos Corp Group",
      time: "May 29, 2023 at 11:30 AM",
      image: corper,
      amount: "-₦5,000",
    },
    {
      key: 3,
      title: "Contribution to Lagos Corp Group",
      time: "May 29, 2023 at 11:30 AM",
      image: corper,
      amount: "+₦5,000",
    },
  ];

  const Goals = [
    {
      title: "Travel",
      amount: "₦ 5,000,000.00",
      amount2: "₦ 10,000,000.00",
      percent: "50",
    },
    {
      title: "Dream Home",
      amount: "₦ 3,000,000.00",
      amount2: "₦ 10,000,000.00",
      percent: "30",
    },
    {
      title: "Dream Car",
      amount: "₦ 7,000,000.00",
      amount2: "₦ 10,000,000.00",
      percent: "70",
    },
  ];

  const { data: targets, isLoading: isLoadingTarget } = useUserTargets();
  console.log(targets);
  const { data: profile, isLoading } = useGetProfile();
  const { data: wallet, isLoading: isLoadingWallet } = useGetWallet();

  const calcProgress = (cumulativeAmount, targetAmount) => {
    return (cumulativeAmount / targetAmount) * 100;
  };

      


  const isBanner = true;
  return (
    <>
      {isLoading || isLoadingWallet ? <Loading /> : null}
      <Flex flexDir="column">
        {isBanner && <Banner />}
        <div className="dashboard">
          <img
            src={MessageBox}
            alt="message box"
            className="dashboard__message"
          />
          <h3 className="dashboard__greet">
            Welcome back
            {`
          ${profile?.firstName} ${profile?.lastName}`}
            ,
          </h3>
          <div className="dashboard__date">
            <img src={DatePicker} alt="date picker" />
            <p className="dashboard__date--text">
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
          <div className="dashboard__card">
            <WalletCard wallet={wallet} />
            <CardComp
              icon={cardBox[0].icon}
              text={cardBox[0].text}
              amount={cardBox[0].amount}
            />
            <CardComp
              icon={cardBox[1].icon}
              text={cardBox[1].text}
              amount={cardBox[1].amount}
              targets={targets}
            />
          </div>
          <div className="dashboard__tracker">
            <div className="dashboard__tracker--left">
              <TransactionHistory />
            </div>
            {/* <div className="dashboard__tracker--right"></div>
        <div className="dashboard__tracker--left"></div> */}
            <div
              className="dashboard__tracker--right"
              style={{
                padding: "16px",
                paddingBottom: "0px",
              }}
            >
              <div
                className="dashboard__tracker--activities"
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  marginBottom: "16px",
                  lineHeight: "20px",
                }}
              >
                <p
                  style={{
                    color: "#000000",
                  }}
                >
                  LATEST ACTIVITIES
                </p>
                <p
                  style={{
                    textDecoration: "none",
                    color: "#2f80ed",
                    cursor: "pointer",
                  }}
                >
                  View all
                </p>
              </div>
              {upcomingActivities.map((activity) => {
                return (
                  <UpComingActivities
                    key={activity.key}
                    title={activity.title}
                    time={activity.time}
                    image={activity.image}
                    amount={activity.amount}
                    marginBottom={
                      upcomingActivities.length - 1 ? "22px" : "0px"
                    }
                  />
                );
              })}
            </div>
          </div>

          <div className="dashboard__transaction">
            <div className="dashboard__transaction--left">
              <TransactionTabs />
            </div>
            <div className="dashboard__transaction--right">
              <div
                className="goals"
                style={{
                  padding: "16px",
                  paddingBottom: "0px",
                }}
              >
                <div
                  className="myGoals"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <h3
                    className="myGoals__alpha"
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#000000",
                    }}
                  >
                    My Goals
                  </h3>
                  <a href="#" className="myGoals__beta">
                    View all
                  </a>
                </div>

                {targets?.length > 0 &&
                  targets.map((goals) => (
                    <MyGoals
                      key={goals.id}
                      fig={goals.fig}
                      title={goals.target}
                      amount={`₦${goals.cumulativeAmount.toLocaleString()}`}
                      amount2={`₦${goals.targetAmount.toLocaleString()}`}
                      percent={calcProgress(
                        goals.cumulativeAmount,
                        goals.targetAmount
                      )}
                      progress={calcProgress(
                        goals.cumulativeAmount,
                        goals.targetAmount
                      )}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Flex>
    </>
  );
};
