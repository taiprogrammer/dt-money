import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header/Index";
import { Summary } from "../../components/Summary/Index";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { Searchbar } from "./components/Searchbar/Index";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transaction() {
  const { transactions } = useContext(TransactionContext);
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <Searchbar />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
