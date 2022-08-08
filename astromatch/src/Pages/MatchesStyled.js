import styled from 'styled-components'

export const ContainerMatches = styled.div`
    display: flex;
    height: 29rem;
    width: 19rem;
    flex-direction: column;
    margin-top: 2rem;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 0.7rem;
    }
    &::-webkit-scrollbar-track {
        background-color: #FADED4;
        border-radius: 1rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #8C4545;
        border-radius: 1rem;
    }
`

export const InfosUser = styled.div`
    display: flex;
    margin: 0.5rem;
    background-color: #F5CFC8;
    justify-content: space-between;
    padding: 0.5rem;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    img{
    display: flex;
    align-items: center;
    width: 6rem;
    height: 6rem;
    border-radius: 30rem;
}
p {
    display: flex;
    align-items: center;
    color: #8C4545;
    font-size: 1.2rem;
    font-weight: bold;
    width: 6rem;
}
`

export const ButtonDivClear = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    align-items: center;
    button {
        background-color: transparent;
        border-radius: 1rem;
        border: 2px solid #8C4545;
        color: #8C4545;
        padding: 0.6rem;
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer;
    &:hover{
        background-color:#F5CFC8;
        box-shadow: 0 0 10px #F5CFC8, 0 0 5px #FBBFB7, 0 0 30px #FADED4;
    }
    }
`

export const ButtonBack = styled.div`
    display: flex;
margin-left: 1rem;
margin-top: 0.6rem;
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
    }
    svg{
       font-weight: bold;
       font-size: 2rem;
    }
    }
`