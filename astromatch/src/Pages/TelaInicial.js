import react from "react";
import axios from "axios";
import { useState, useEffect } from 'react';
import { PROFILES_URL, CHOOSE_URL } from '../Constants/URL'
import Profiles from "./Profiles";
import { IoMdHeartDislike } from 'react-icons/io'
import { IoMdHeart } from 'react-icons/io'
import { MdPeopleOutline } from 'react-icons/md'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Fire from '../Assets/flame.png'
import { DivButtons, MatchesDiv, ButtonDislike, ButtonLike } from '../Componentes/HeaderStyle'
import { Message } from './ProfilesStyled'

function TelaInicial(props) {
    const [profileUser, setProfileUser] = useState({})
    const [likeDislike, setLikeDislike] = useState("normal")

    const getProfileToChoose = () => {
        axios.get(`${PROFILES_URL}`)
            .then((res) => {
                setProfileUser(res.data.profile)
                setLikeSlideNormal()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const setLikeSlide = () => {
        setLikeDislike("like")
    }
    const setDislikeSlide = () => {
        setLikeDislike("dislike")
    }
    const setLikeSlideNormal = () => {
        setLikeDislike("normal")
    }

    const choosePerson = (choice) => {
        axios.post(`${CHOOSE_URL}`,
            {
                id: profileUser.id,
                choice: choice
            }).then((response) => {
                if (choice === true) {
                    setLikeSlide()
                } else if (choice === false) {
                    setDislikeSlide()
                }
                if (response.data.isMatch) {
                    toast(`Você deu match com ${profileUser.name}`, {
                        icon: <img src={Fire} widht='1rem' height='25rem' />
                    }
                    )
                }
                getProfileToChoose()

            }).catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getProfileToChoose()
    }, [])

    return (
        <div>
            {profileUser ? (
                <Profiles
                    profileUser={profileUser}
                    likeDislike={likeDislike}
                />
            ) :
                <Message>
                    <h2>Uau! </h2>
                    <p>Você zerou os perfis. </p>
                    <p>   Para começar de novo, vá até a página de matches e clique em "Limpar Matches".</p>
                </Message>
            }
            <DivButtons>
                <ButtonDislike type='button' onClick={() => choosePerson(false)}> <IoMdHeartDislike /> </ButtonDislike>
                <ButtonLike type='button' onClick={() => choosePerson(true)}> <IoMdHeart /> </ButtonLike>
            </DivButtons>
            <MatchesDiv>
                <button onClick={() => props.changeScreen("Tela Matches")}> <MdPeopleOutline /> </button>
            </MatchesDiv>
        </div>
    );
}

export default TelaInicial;
