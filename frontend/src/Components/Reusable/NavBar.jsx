import '../../Styles/Navbar.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  return (
    // <header className='nav-bar'>
    //     <div className="container">
    //         <div className="row">
    //             <div className="nav-bar col-lg-12 d-flex justify-content-between">
    //                 <div className="logo col-2">
    //                     <img src="" alt="" />
    //                 </div>
    //                 <ul className='nav-list-middle col-7 d-flex justify-content-between align-items-center h-100'>
    //                     <li>Find Reservation</li>
    //                     <li>About Lakshadweep</li>
    //                     <li>About Us</li>
    //                     <li>Gol</li>
    //                     <li>Support</li>
    //                 </ul>
    //                 <div className="right-login-signup col-3 mr-3">
    //                     <button className='login-button'>Login</button>
    //                     <button className='signup-button'>Signup</button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </header>
    <header className='navbar-container'>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={{ color: 'black' }}>Find Reservations</Nav.Link>
              <NavDropdown title="Packages" id="basic-nav-dropdown" style={{ color: 'black' }}>
                <NavDropdown.Item>Action</NavDropdown.Item>
                <NavDropdown.Item>Something</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="About Lakshadweep" id="basic-nav-dropdown">
                <NavDropdown.Item>Action</NavDropdown.Item>
                <NavDropdown.Item>Something</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link style={{ color: 'black' }}> About Us</Nav.Link>
              <Nav.Link style={{ color: 'black' }}>Gol</Nav.Link>
              <Nav.Link style={{ color: 'black' }}> Support</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar>
            <Nav><button className='login-button'>Login</button></Nav>
            <Nav><button className='signup-button'>Signup</button></Nav>
          </Navbar>
        </Container>
      </Navbar>

    </header>

  )
}

export default NavBar