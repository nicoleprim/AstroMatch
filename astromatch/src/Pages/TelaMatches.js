import react from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
import { CLEAR_URL, MATCHES_URL } from '../Constants/URL'
import { TbArrowBack } from 'react-icons/tb'
import { MdArrowBackIos } from 'react-icons/md'
import { ContainerMatches, ButtonBack, InfosUser, ButtonDivClear, DivImg, DivAll } from './MatchesStyled'
import { toast } from "react-toastify";

function TelaMatches(props) {

    const [matchList, setMatchList] = useState([])

    const getMatches = () => {
        axios.get(`${MATCHES_URL}`)
            .then((response) => {
                setMatchList(response.data.matches)
            })
            .catch((error) => {
                alert(error.response.data)
            })
    }

    useEffect(() => {
        getMatches()
    }, [matchList])

    const showMatches = matchList.map((match) => {
        return <div key={match.id}>
            <InfosUser>
                <img src={match.photo} alt='Foto do Perfil' />
                <p>{match.name}</p>
            </InfosUser>
        </div>
    })

    const clear = () => {
        axios.put(`${CLEAR_URL}`)
            .then((response) => {
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const onClickClear = () => {
        clear()
        toast.success("Matches limpos. Vamos começar de novo?")
        getMatches()
    }

    return (
        <div>
           
            <ContainerMatches>
                {showMatches}
            </ContainerMatches>
            <ButtonBack>
            <button onClick={() => props.changeScreen("Tela Inicial")}><MdArrowBackIos /></button>
            </ButtonBack>
            <ButtonDivClear>
                <button onClick={onClickClear}>Limpar Matches</button>
            </ButtonDivClear>
            
        </div>
    );
}

export default TelaMatches;
