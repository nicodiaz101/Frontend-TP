import styled from 'styled-components';

export const Header = styled.header`
    background-color: #3c3c3c;
    color: #fff;
    padding: 10px 0;
    margin: 0;
`;
export const Nav = styled.nav`
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    place-content: center;
    place-items: center;
    .logo{
        img{
            width: 100px;
            padding-left: 2rem;
        }
    }
    .btn {
        button{
           background-color : transparent;
           border: 1px solid #fff;
           border-radius: 8px;
           width: 200px;
           height: 40px;
           color: #fff;
        }
    }
`;
export const Menu = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 40px;
    li{
        list-style-type: none;
        a{
            color: white;
            text-decoration: none;
        }
    }
`;