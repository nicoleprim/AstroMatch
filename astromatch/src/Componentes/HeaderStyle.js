import styled from 'styled-components'

export const MaxContainer = styled.div`
    display: flex;
    padding: 0;
    margin:0;
`
export const Container = styled.div`
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    width: 19rem;
    height: 47rem;
    display: block;
    background-image: linear-gradient(#FADED4, #F5CFC8, #FBBFB7);
    padding: 0;
    margin:0;
`

export const DivImg = styled.div`
    padding-top: 1rem;
    display: flex;
    justify-content: center;
img{
    width: 13rem;
}
`

export const DivButtons = styled.div`
    display: flex;
    justify-content: space-around;

`

export const MatchesDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    button {
        background-color: transparent;
        border: none;
        color: #8C4545;
        font-weight: bold;
        cursor: pointer;
    &:hover{
        background-color:#F5CFC8;
        box-shadow: 0 0 10px #F5CFC8, 0 0 5px #FBBFB7, 0 0 30px #FADED4;
        transform: scale(1.1);
    transition: all 0.5s;
    }
    svg{
       font-weight: bold;
       font-size: 3rem;
    }
    }
`

export const ButtonDislike = styled.button`
    border: none;
    cursor: pointer;
    background-color: transparent;
    svg{
    width: 4rem;
    height: 4rem;
    color: #E68282;
    }
    &:hover{
        transform: scale(1.2);
    transition: all 0.5s;
    }
`

export const ButtonLike = styled.button`
    border: none;
    cursor: pointer;
    background-color: transparent;
    svg{
    width: 4rem;
    height: 4rem;
    color: #F20505;
    }
    &:hover{
        transform: scale(1.2);
    transition: all 0.5s;
    }
`
export const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2.6rem;
    margin-bottom: 0px;
    font-size: 0.9rem;
    color: #8C4545;
    font-weight: bold;
    svg{
        padding: 0.3rem;
        color: #8C4545;
    }
`