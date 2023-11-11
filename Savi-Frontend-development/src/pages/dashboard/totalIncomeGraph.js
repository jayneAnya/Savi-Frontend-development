import React from "react";
import IncomeGraph from "../../components/common/incomeGraph";
import "../../assets/scss/totalIncomeGraph.scss";
import { Select } from "@chakra-ui/react";

const TransactionGraph = () => {
  return (
    <section className="transaction-history-card">
      <div className="title-bar">
        <Select
          w="190px"
          border="none"
          _focus={{
            outline: "none",
            boxShadow: "none",
          }}
          cursor="pointer"
        >
          <option value="income">Total Income</option>
          <option value="withhdrawals">Total Withdrawals</option>
          <option value="contributions">Total Contributions</option>
        </Select>
        <div className="date-section">
          <h1 className="date-text">Last 12 months</h1>
        </div>
      </div>
      <IncomeGraph />
    </section>
  );
};

export default TransactionGraph;
