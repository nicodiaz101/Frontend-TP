import styled, { css } from 'styled-components';
import { useResponsive } from '../../Hooks/useResponsive';

export const Header = styled.header`
    background: rgb(0,20,73);
    background: radial-gradient(circle, rgba(0,20,73,1) 4%, rgba(0,0,0,1) 100%);
    color: #212020;
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
            width: 137px;
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
            background-image: linear-gradient(to right, #fdfdfd 0%, #cb6dfa 30%, #0608a5 100%);
            background-size: 500% 100%; /* Tamaño del fondo para que la animación funcione */
            background-position: left center; /* Posición inicial */
            border: 0.17em transparent;
            border-radius: 1.1em;
            width: 200px;
            height: 45px;
            color: #000000; /* Color inicial del texto */
            text-decoration: none;
            font-size: 1.15em;
            cursor: pointer;
            transition: background-position 2s ease, color 2s ease; /* Aplica la transición al fondo y al color */
        }
        button:hover {
            background-position: right center;
            color: #ffffff;
        }

        button:active {
            transform: scale(0.95);
        }
    }

    .btn-admin{
        button{
            background-color : #4a9ff3;
            border: 0.17em solid #ffffff47;
            width: 150px;
            height: 29px;
            color: #000000;
            text-decoration: none;
            transition: background-color 0.3s ease;
            font-size: 0.72em;
            cursor: pointer;
            margin-left: 1.5rem;
            margin-top: 0.61rem;
        }
        button:hover {
            background-color: #03b3c7;
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