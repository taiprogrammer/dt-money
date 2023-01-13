import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Index";
import { Summary } from "../../components/Summary/Index";
import { Searchbar } from "./components/Searchbar/Index";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

export function Transaction() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function load() {
    const response = await fetch("http://localhost:3000/transactions");
    const data = await response.json();
    setTransactions(data);
  }
  useEffect(() => {
    load();
  }, []);
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
