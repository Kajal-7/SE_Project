import React from "react";
import questions from "./questions.js";
import Banner from "./Banner";
import Navbar from "../components/Navbar/Navbar"
import { FooterContainer } from "../containers/footer";
import { useAuthContext } from "../data/auth.js";
import BgIcons from "../components/backGround/BgIcons";
function Faq() {
  const {user} = useAuthContext();
  console.log(user);
  return (
    <div>
      <Navbar />
      <BgIcons
        mt="-15%"
      />
      <div>
        <Banner>
          <h1 style={{color: "white"}}>Frequently Asked Questions</h1>
          {questions.map((question) => (
            <Banner.Entity key={question.id}>
              <Banner.Question>{question.question}</Banner.Question>
              <Banner.Text>{question.answer}</Banner.Text>
              <br></br>
            </Banner.Entity>
            
          ))}
          <br></br>
          <h4 >
            Question not on the list? Contact us for further enquiries
          </h4>
        </Banner>
      </div>

      <FooterContainer />

    </div>
  );
}

export default Faq
