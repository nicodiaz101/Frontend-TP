import styled, { css } from 'styled-components';
import { useResponsive } from '../../Hooks/useResponsive';

export const Header = styled.header`
    background-color: #2a2a2a;
    color: #fff;
    padding: 0.7em 0;
    margin: 0;
`;
export const Nav = styled.nav`
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    padding: 0 1rem;

    .logo{
        img{
            width: 127px;
        }
    }
    .menu-links {
        display: flex;
        gap: 1em;
        justify-content: center;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        transition: color 0.3s ease;
        font-size: 1.15em;
    }
    .menu-links a {
        color: white;
        text-decoration: none;
        transition: color 0.3s ease;
    }
    .menu-links a:hover{
        color: #0396c7;
    }

    .btn {
        display: none;
        button{
            background-color : #4acbf3;
            border: 0.17em solid #ffffff47;
            border-radius: 1.1em;
            width: 200px;
            height: 45px;
            color: #000000;
            text-decoration: none;
            transition: background-color 0.3s ease;
            font-size: 1.15em;
            cursor: pointer;
        }
        button:hover {
            background-color: #0396c7;
        }

        button:active {
            transform: scale(0.95);
        } 
    }
    
    ${useResponsive('lg')}{
        grid-template-columns: 1fr 4fr 1fr;
        .logo{
            img{
                padding-left: 2rem;
            }
        }
        .btn{
            display: block;
        }
        .icon-menu{
            display: none;
        }
    }
`;
export const Menu = styled.ul`
    display: grid;
    position: absolute;
    left: -250px;
    background-color: rgba(82, 84, 90, 0.65);
    width: 200px;
    top: -15px;
    gap: 40px;
    place-content: center;
    place-items: center;
    height: 100vh;
    transition: all 0.5 ease;
    ${props => props.open && css`
        left: 0;
    `}
    li{
        list-style-type: none;
        height: 30px;
        padding: 8px 0px;
        a{
            color: white;
            text-decoration: none;
        }
    }
    ${useResponsive('lg')}{
        display: flex;
        position: relative;
        height: auto;
        width: auto;
        left: 0;
        top: 0;
        background-color: transparent;
        flex-direction: row;
        gap: 40px;
        justify-content: flex-start;
    }
`;