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
          <button>Login</button>
          <button>Registro</button>
        </ModalFooter>
      </Modal>
    </ModalContainer>
  );
};

export default ModalAnimals;
