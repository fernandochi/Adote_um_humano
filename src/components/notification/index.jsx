import { Container } from "./style";

const Notification = ({ added }) => {
  return added === true && <Container>Candidatura confirmada!</Container>;
};

export default Notification;
