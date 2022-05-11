import { Container,Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import breakPoints from '../../breakPoints';
import { sizes } from '../../breakPoints';
import {FaBars,FaTimes} from 'react-icons/fa';


export const NavbarContainer = styled(Container)`
    height : 8rem;
    position : sticky;
    top : 0;
    font-size : 1.6rem;
    font-family : vazirRegular;
`;

// ==== Menu Bar Styles ====

// Nav => show mobile Menu in mobile and tablet device /  show desktop menu in desktop device
export const Nav = styled.nav`
    height : 100%;
    
    @media only screen and (max-width : ${sizes.lg}){
        position : fixed;
        width : 80%;
        background-color : red;
        display : none; 
    }
;
`;
export const Menu = styled.ul`
    display : flex; 
`;
export const MenuItem = styled.li`
    padding : 2rem 0;
    margin-left : 4rem;
    line-height : 3rem; 

    &:first-child {
        padding : 1rem .2rem 1rem 1rem;
    }
`;
export const NavLink = styled(Link)`

    & > svg {
        vertical-align : middle;
        margin-right : .5rem;
    }
`;


// ---- Hamburger Icon Styles ----
export const HamburgerIcon = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    width : 6rem;

    @media only screen and ${breakPoints.lg_devices}{
        display : none;
    };

    @media only screen and ${breakPoints.xs_devices}{
        width : 7rem;
    }
`;  
export const FaBarsIcon = styled(FaBars)`
    color : ${({theme : {palette : {textColor}}}) => textColor.grayColor};  

`;

export const FaTimesIcon = styled(FaTimes)`
    color : ${({theme : {palette : {textColor}}}) => textColor.grayColor};
`;

export const MenuColumn = styled(Col)`
    position : relative;
    height : 8rem;
`;

export const LogoImg = styled.img`
    width : 5rem;
    margin-left : 1rem;

`;