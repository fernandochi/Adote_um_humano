import { useHistory } from "react-router-dom";

// STYLE
import { MdClose } from "react-icons/md";
import {
  ModalContainer,
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter,
} from "./style";

const ModalAnimals = ({ setOpen }) => {
  const history = useHistory();

  return (
    <ModalContainer>
      <Modal>
        <ModalHeader>
          <button onClick={() => setOpen(false)}>
            <MdClose />
          </button>
        </ModalHeader>
        <ModalContent>
          <h2>
            Acesse sua conta ou se registre agora mesmo para se candidatar à
            este pet
          </h2>
        </ModalContent>
        <ModalFooter>
          <button onClick={() => history.push("/login")}>Login</button>
          <button onClick={() => history.push("/register")}>Registro</button>
        </ModalFooter>
      </Modal>
    </ModalContainer>
  );
};

export default ModalAnimals;
