import styled from "styled-components"
import React from "react"


const Card = (props) =>{ 
    return(
        <Container>
            <Wrapper>
                
                <Title>{props.title}</Title>
                <Content><p>{props.content}</p></Content>
                <Icon>
                    <Img src={props.image} />
                </Icon>
            </Wrapper>
        </Container>
    )
}

export default Card;


const Container=styled.div`
display:flex;
justify-content: center;
align-items: center;

height:250px;
width:300px;
/* background:yellow; */

box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`

const Wrapper=styled.div`
display:flex;
flex-direction: column;
/* justify-content: center;
align-items: center; */
width:85%;
height:25vh;
/* background:red; */
`

const Title=styled.div`
color:black;
font-size: 1.2rem;
font-weight: bold;
text-align:justify-content;
/* margin-top:5px; */

`

const Content=styled.div`
font-size: 0.8rem;
text-align:justify-content;
color:#9C9B9B;
`

const Icon=styled.div`
display:flex;
justify-content:end;
/* background:pink; */
margin-top:70px;
`
const Img = styled.img`
height: 40px;
width:40px;
object-fit:contain;
`
