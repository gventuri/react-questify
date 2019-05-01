import React from "react";

import ReactQuestify from "react-questify";

const App = () => {
  const questions = [
    {
      name: "name",
      text: "Who are you?",
      suggestion: "I am your worst nightmare",
      type: "text",
      answers: {
        default: {
          goTo: 1
        }
      }
    },
    {
      name: "character",
      text: "What's your favorite character?",
      type: "select",
      options: ["Mickey Mouse", "Donald Duck", "Bugs Bunny", "Duffy Duck"],
      answers: {
        "Mickey Mouse": {
          goTo: 3
        },
        default: {
          goTo: 2
        }
      }
    },
    {
      name: "experience",
      text: "How many years of experience do you have?",
      type: "options",
      options: ["1", "< 5", "< 10", "> 10"],
      answers: {
        default: {
          goTo: 3
        }
      }
    },
    {
      name: "color",
      text: "What is your favorite color?",
      type: "color",
      options: ["red", "#f90", "black", "#800"],
      skippable: true,
      answers: {
        default: {
          goTo: 4
        }
      }
    },
    {
      name: "facebook",
      text: "Please, write your facebook page url",
      suggestion: "https://facebook.com/example",
      type: "url",
      answers: {
        default: {
          goTo: 5
        }
      }
    },
    {
      name: "photos",
      text: "We are almost there... Please, update your photos",
      type: "images",
      answers: {
        default: {
          goTo: 6
        }
      }
    }
  ];

  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: "800px",
        width: "100%",
        marginTop: "200px"
      }}
    >
      <ReactQuestify questions={questions} />
    </div>
  );
};

export default App;
