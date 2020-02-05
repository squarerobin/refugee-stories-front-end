import React from "react";
import Carousel from "../Carousel/MyCarousel.js";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import "./Home.css";

const Home = () => {
  const WrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fef9c7;
    color: #7e685a;
    height: 100vh;
    font-family: Ubuntu;
    text-align: justify;
    padding: 2rem;
    max-width: 46rem;
  `;

  const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    self-align: center;
    width: 10rem;
    padding: 1rem;
    margin-top: 2rem;
    font-size: 1.2rem;
    font-weight: 900;
    margin-bottom: 3rem;
    z-index: 10;
    font-family: "Roboto";
  `;

  const Form = styled.form`
    z-index: 10;
  `;

  const Paragraph = styled.p`
    margin-top: -5rem;
    margin-bottom: 3rem;

    @media (min-width: 600px) {
      font-size: 1.2rem;
    }

    @media (min-width: 968px) {
      font-size: 1.3rem;
    }
  `;

  return (
    <div className="homepage">
      <WrapperDiv className="wrapper">
        <Carousel />
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta
          sequi reprehenderit tempore dolores at incidunt tempora ipsum eveniet
          illo, dolor sed dolorum reprehenderit tempore dolores at incidunt
          tempora ipsum eveniet illo, dolor sed placeat, delectus adipisci
          consequuntur minus! Molestiae, nostrum!
        </Paragraph>
        <Form action="./stories">
          <StyledButton className="button" type="submit" value="Read More">
            READ MORE
          </StyledButton>
        </Form>
      </WrapperDiv>
      <Footer/>
    </div>
  );
};

export default Home;

export const footerdes = {
    display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  
  
}
export const footerdes2 ={
    flex:'1',
   
}
export const footerdes3={
    backgroundColor:'gray',
}

export const Footer = () => {
    return(
    <div>

        <button style={footerdes3}>Copyright @ 2020</button>
        <button style={footerdes3}>About</button> 
        <button style={footerdes3}>Help</button>

       
    </div>
    )
};