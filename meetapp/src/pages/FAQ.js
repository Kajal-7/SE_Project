import React from "react";
import questions from "./questions.js";
import Banner from "./Banner";
import Navbar from "../components/Navbar/Navbar"
import { FooterContainer } from "../containers/footer";
function Faq() {
  return (
    <div>
      <div><Navbar /></div>
      <div>
        <Banner>
          <Banner.Header>Frequently Asked Questions</Banner.Header>
          {questions.map((question) => (
            <Banner.Entity key={question.id}>
              <Banner.Question>{question.question}</Banner.Question>
              <Banner.Text>{question.answer}</Banner.Text>
            </Banner.Entity>
          ))}
          <h4>
            Question not on the list? Contact us for further enquiries
          </h4>
        </Banner>
      </div>
      <div>
        <FooterContainer />
      </div>
    </div>

    //<h1>Hello World</h1>
  );
}

export default Faq

// import React from 'react'

// function FAQ() {
//   return (
//     <div>Hello I am FAQ page</div>
//   )
// }

// export default FAQ