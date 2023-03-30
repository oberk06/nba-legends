import nbaLogo from "./nba-logo.png";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";


const Header = () => {
  return (
    <Container className="mt-4" >
      <Image src={nbaLogo}></Image>
     
    </Container>
  );
};
export default Header;
