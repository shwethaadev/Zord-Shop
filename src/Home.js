import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div className='container'>
      <div className="one" onClick={() => navigate('/sell')}>Section 1</div>
      <div className="two" onClick={() => navigate('/buy')}>Section 2</div>
    </div>

//     <div>
//         <div className="split left">
//   <div className="centered">
//     {/* <img src="img_avatar2.png" alt="Avatar woman"> */}
//     <h2>Jane Flex</h2>
//     <p>Some text.</p>
//   </div>
// </div>

// <div className="split right">
//   <div className="centered">
//     {/* <img src="img_avatar.png" alt="Avatar man"> */}
//     <h2>John Doe</h2>
//     <p>same goes here.</p>
//   </div>
// </div>
//     </div>
    
    /* // <>
    //   <Navbar bg="dark" data-bs-theme="dark">
    //     <Container>
    //       <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#features">About</Nav.Link>
    //         <Nav.Link href="#pricing">Products</Nav.Link>
    //         <Nav.Link href="#pricing">Contact</Nav.Link>
            
    //       </Nav>
    //     </Container>
    //   </Navbar>
    //   </> */
  )
}

export default Home;
