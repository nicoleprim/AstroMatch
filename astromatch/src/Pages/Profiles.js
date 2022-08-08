import React from 'react'
import {ContainerProfile, ImageProfile, Infos, Img} from './ProfilesStyled'
import Loading from '../Assets/loading.gif'

const Profiles = (props ) => {
  return (
    <div>
        {props.profileUser.photo && props.profileUser.name
                && props.profileUser.age && props.profileUser.bio ?
        (
          <ContainerProfile>
                <ImageProfile likeDislike={props.likeDislike} src={props.profileUser.photo} alt='Foto do Perfil' />
                <Infos>
                    <h2>{props.profileUser.name}, {props.profileUser.age}</h2>
                    <p>{props.profileUser.bio}</p>
                </Infos>
            </ContainerProfile>
        ) :
        <Img>
        <img src={Loading} alt="carregando"/>
        </Img>
    } 
    </div>
  )
}

export default Profiles