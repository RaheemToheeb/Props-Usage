import React from "react";
import styled from "styled-components";
import Card from "../component/cardcomponent";
import Card2 from "../Component2/component2"
import bulb from "../img/bulb.png";
import house1 from "../img/house1.png";
import tv from "../img/tv.png";
import images from "../img/images.png";

const Child = () => {
  return (
    <div>
        <Newrapper>
        <Card2/>
        </Newrapper>
      <Wrap>
         
        <DIV>
          <Card
            title="Supervisor"
            content="Scan out talent network to create the optimal team for your project"
            image={images}
          />
        </DIV>

        <DIV2>
            <DIV2A>
          <Card
            title="Team Builder"
            content="Scan out talent network to create the optimal team for your project"
            image={house1}
          />
          </DIV2A>
          <DIV2B>
          <Card
            title="Karma"
            content="Scan out talent network to create the optimal team for your project"
            image={bulb}
          />
          </DIV2B>
        </DIV2>
        <DIV3>
          <Card
            title="Calculator"
            content="Scan out talent network to create the optimal team for your project"
            image={tv}
          />
        </DIV3>
      </Wrap>
    </div>
  );
};

export default Child;
const Newrapper=styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-top:10px;
`

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: skyblue; */
`

const DIV = styled.div`
border-top:4px solid #20C9AD;
border-radius:5px;
`

const DIV2 = styled.div`
display:flex;
flex-direction: column;
margin:10px;
/* line-height:5 */
`

const DIV2A = styled.div`
margin-bottom:5px;
border-top:5px solid #D43832;
border-radius:5px;

/* display:flex;
flex-direction: column;
align-items:space-around; */
/* justify-content:space-between; */
/* margin-top:5px; */
/* line-height:5 */
`

const DIV2B = styled.div`
/* display:flex;
flex-direction: column;
align-items:space-around; */
margin-top:5px;
border-top:5px solid #F7BE27;
border-radius:5px;
/* background:red; */
/* justify-content:space-between; */
/* margin-top:5px; */
/* line-height:5 */
`

const DIV3 = styled.div`
border-top:5px solid #1F6096;
border-radius:5px;

`


