import React from "react"
import styled from "styled-components"
 const Card2=()=>{
     return(
     <div>
         <Container>
             
             <DIV1>Reliable efficient delivery</DIV1>
             <DIV2>Powered by Technology</DIV2>
             <DIV3>Our Artificial intelligence powered tools use millions of project data point
                 to ensure that your project is successful
             </DIV3>

         </Container>
         </div>
     )
 }

 export default Card2;

 const Container=styled.div`
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 width: 420px;
 height:150px;
 /* background:red; */
 `

 
const DIV1=styled.div`
font-size:1.6rem;
text-align:center;
color:#9C9B9B;
`


const DIV2=styled.div`
font-size:1.6rem;
font-weight:bold;
text-align:center;
`

const DIV3=styled.div`
font-size:0.8rem;
text-align:center;
color:#9C9B9B;
`

