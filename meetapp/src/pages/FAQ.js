import React from "react";
import questions from "./questions.js";
import Banner from "./Banner";
import Navbar from "../components/Navbar/Navbar"
import { FooterContainer } from "../containers/footer";
function Faq() {
  return (
    <div>
      <Navbar />
      <div>
        <Banner>
          <Banner.Header>Frequently Asked Questions</Banner.Header>
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
