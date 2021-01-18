import { Container, Text, Link } from "./style";

const Footer = () => {
  return (
    <Container>
      <Text>Nos conheça melhor</Text>
      <Text>
        Feito por
        <Link href="https://www.linkedin.com/in/isabella-pegoraro-marcondes/">
          Isabella,
        </Link>
        <Link href="https://www.linkedin.com/in/luizmatheusga/">Luiz,</Link>
        <Link href="https://www.linkedin.com/in/eduardoomota/">Eduardo, </Link>
        <Link href="https://www.linkedin.com/in/viktor-fagionato/">
          Viktor,{" "}
        </Link>
        <Link href="https://www.linkedin.com/in/fernando-l-santos/">
          Fernando,{" "}
        </Link>
        para animais com &lt;3
      </Text>
    </Container>
  );
};

export default Footer;
