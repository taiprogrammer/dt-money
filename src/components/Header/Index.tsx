import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import logo from "../../assets/logo.svg";
import { NewTransactionModal } from "./NewTransactionModal/Index";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
