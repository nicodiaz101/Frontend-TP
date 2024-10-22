import styled, { css } from 'styled-components';
import { useResponsive } from '../../Hooks/useResponsive';

export const Footer_Nav = styled.footer`
    display: grid;
    background-color: #2a2a2a;
    color: #fff;
    padding: 0.7em 0;
    width: 100%;
    height: 170px;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    padding: 0 1rem;
    margin-top: 4.2rem;
    .logo{
        img{
            width: 127px;
        }
    }
    .links{
        display: grid;
        justify-content: center;
        gap: 1rem;
        a{
            color: #fff;
            font-size: 1.2rem;
            margin: 0 1rem;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        a:hover{
        color: #0396c7;
        }
    }
    .legal{
        display: grid;
        justify-content: center;
        gap: 1rem;
        a{
            color: #fff;
            text-decoration: none;
            font-size: 1.2rem;
            margin: 0 1rem;
            transition: color 0.3s ease;
        }
        a:hover{
            color: #00f9aa;
        }
    }
    li{
        list-style-type: none;
    }
`;