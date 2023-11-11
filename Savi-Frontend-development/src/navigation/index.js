import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/landingPage/landingPage";
import ResetPassword1 from "../pages/auth/ResetPassword1";
import ResetPassword2 from "../pages/auth/ResetPassword2";
import { Layout } from "../components/common";
import { Dashboard } from "../pages/dashboard";
import { LoginPage } from "../pages/auth/loginPage";
import { SignUp } from "../pages/auth/Signup";
import { Saving } from "../pages/savingPage/personalTargets";
import { BalisTrip } from "../pages/savingPage/SavingTargets";
import { NewTarget } from "../pages/groups/activeSavings";
import { Trnxs } from "../pages/transactions/trnxs";
import { Empty } from "../pages/Empty";
import { AuthRoute } from "../components/common/AuthRoute";
import { PaymentVerification } from "../components/pages/paymentVerification";
import { ActiveSavingsCard } from "../pages/groups/activeSavingCard";
import { ViewGroup } from "../pages/groups/viewGroup";
import { UserGroup } from "../pages/groups/userGroup";
import { Flow } from "../pages/groups/flow";

export const SaviRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/password-reset1" element={<ResetPassword1 />} />
        <Route path="/password-reset2" element={<ResetPassword2 />} />
        <Route
          element={
            <AuthRoute>
              <Layout />
            </AuthRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/saving" element={<Saving />} />
          <Route path="/saving/goals/:id" element={<BalisTrip />} />
          <Route path="/groups" element={<NewTarget />} />
          <Route path="/transactions" element={<Trnxs />} />
          <Route path="payment/verify" element={<PaymentVerification />} />
          <Route path="/groups/explore" element={<ActiveSavingsCard />} />
          <Route path="/groups/explore/:id" element={<ViewGroup />} />
          <Route path="/groups/:id" element={<UserGroup />} />
          <Route path="/groups/membersflow" element={<Flow />} />
        </Route>
        <Route path="*" element={<Empty />} />
      </Routes>
    </Router>
  );
};
