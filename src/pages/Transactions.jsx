"use client"

import { useContext, useEffect } from "react";
import { AppContext } from "../utils/Context";

export default function Transactions() {
    const { balance, transactions, loanDebit, payments, transfers, cryptoTransactions } = useContext(AppContext);

    const bgColor = function (type) {
        if (type === "Deposit") {
        return "#E2F3E2";
        } else {
        return "#EBC2BC";
        }
    }

    useEffect(() => {
        console.log(transactions)
        console.log(payments)
        console.log(transfers)
        console.log(cryptoTransactions)
    }, [])
    
    return (
            <div className="container">
            <h1>Transactions - <span>${balance}</span> | Debt -  <span>${loanDebit}</span></h1>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Timestamp</th>
                </tr>
                </thead>
                <tbody>
                {transactions.map((transaction) => (
                    <tr key={transaction.id}>
                        <td><div style={ {"backgroundColor": bgColor(transaction.type) } } >{transaction.type}</div></td>
                        <td><div style={ {"backgroundColor": bgColor(transaction.type) } } >${transaction.amount}</div></td>
                        <td><div style={ {"backgroundColor": bgColor(transaction.type) } } >{`${transaction.timestamp.toLocaleDateString()} ${transaction.timestamp.toLocaleTimeString()}`}</div></td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
    );
}
