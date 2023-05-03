import { useContextSelector } from "use-context-selector";
import { Header } from "../../components/Header/Index";
import { Summary } from "../../components/Summary/Index";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { Searchbar } from "./components/Searchbar/Index";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transaction() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions;
  });
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
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
