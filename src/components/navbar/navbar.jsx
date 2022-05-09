import { Container,Col,Row } from 'react-bootstrap';
// import { FaBars,FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import menuItems from './menuItems';
import { useState } from 'react';
import {
    NavbarContainer,
    MenuColumn,
    Nav,
    HamburgerIcon,
    Menu,
    MenuItem,
    NavLink,
    FaTimesIcon,
    FaBarsIcon,
} from './navbar.elements';


const Navbar = () => {

    const [menuToggle,setMenuToggle] = useState(true); 
    return (
        <IconContext.Provider value={{size : '4rem'}}>
            <NavbarContainer className="border border-dark">
                <Row className="d-flex justify-content-between">
                    {/* Menu Column => show in desktop devices (lg) */}
                    <MenuColumn xs={5} lg={6} className='border border-warning'>
                        <HamburgerIcon className="border border-dark h-100" onClick={() => setMenuToggle(!menuToggle)}>
                            {menuToggle ? <FaBarsIcon /> : <FaTimesIcon />}
                        </HamburgerIcon>
                        <Nav toggle={menuToggle} className="border border-dark">
                            <Menu toggle={menuToggle} className="border border-success">
                                {menuItems && menuItems.map((item,index) => (
                                    <MenuItem key={index}>
                                        <NavLink to={item.url}>{item.title}</NavLink>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Nav>
                    </MenuColumn>
                    {/*Navbar Hamburger Icon => show in tablet and mobile devices*/}
                    {/* <Col xs={3} className="d-lg-none border border-danger">
                        {menuToggle ? <FaBars /> : <FaTimes />}
                    </Col> */}
                    
                    <Col xs={5} lg={4} className="border border-info">
                        <p style={{'fontSize' : '1rem'}}>
                            Buttons

                        </p>
                    </Col>
                </Row>
            </NavbarContainer>
        </IconContext.Provider>

    )
};


export default Navbar;