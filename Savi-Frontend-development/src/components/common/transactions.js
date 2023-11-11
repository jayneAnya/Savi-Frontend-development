import React from "react"; 
import '../../assets/scss/transactions.scss'; 


const Transactions = ({receiverName, transactionType, transactionDate, amount}) => {
    return (
        <section className="transaction-container">
            <div className="transact-box">
            <h1 className="receiver-name">{receiverName}</h1>
            <div className="transact-details">
                <p>{transactionType}</p>
                <p>{transactionDate}</p>
                <p>{amount}</p>
            </div>
            </div>
        </section>
    );
};

export default Transactions