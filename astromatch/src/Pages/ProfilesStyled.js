import styled from 'styled-components'

export const ContainerProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`

export const Message = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    h2 {
    color:  #8C4545;
    font-size: 2rem;
    }
    p{
    display: flex;
    text-align: center;
    color:  #8C4545;
    font-size: 1rem;
    margin: 2rem;
    }
`

export const ImageProfile = styled.img`
    margin-bottom: 1rem;
    display: flex;
    width: 17rem;
    height: 20rem;
    object-fit: cover, contain;
    border-radius: 10px;
    transition: all 2s ease;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    ${(props) => props.likeDislike === "like" && "transform:   translate(15rem, 5rem) rotate(15deg)"};
    ${(props) => props.likeDislike === "like" && "opacity: 0"};
    ${(props) => props.likeDislike === "normal" && ""};
    ${(props) => props.likeDislike === "dislike" && "transform:   translate(-15rem, 5rem) rotate(-15deg)"};
    ${(props) => props.likeDislike === "dislike" && "opacity: 0"};
    `

export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 8rem;
    h2{
        color: #8C4545;
        margin-bottom:0;
    }
    p{
        margin-left: 0.9rem;
        margin-right: 0.9rem;
        color: #8C4545;
    }
`

export const Img = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 11rem;
    margin-bottom: 11rem;
    img{
        width: 9rem;
    }
`