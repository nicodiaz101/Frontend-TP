import styled, { css } from 'styled-components';
import { useResponsive } from '../../Hooks/useResponsive';

export const Footer_Nav = styled.footer`
    display: grid;
    background-color: #2a2a2a;
    color: #fff;
    padding: 0.7em 0;
    width: 100%;
    height: 300px;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    padding: 0 1rem;
    .logo{
        img{
            width: 127px;
        }
    }
    .links{
        display: flex;
        justify-content: center;
        a{
            color: #fff;
            font-size: 1.5rem;
            margin: 0 1rem;
        }
    }
    .legal{
        display: flex;
        justify-content: center;
        a{
            color: #fff;
            font-size: 1.5rem;
            margin: 0 1rem;
        }
    }
`;