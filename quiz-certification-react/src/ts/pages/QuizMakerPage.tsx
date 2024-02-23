import React from "react";
import { ChoixQuiz } from "../components/ChoixQuiz";
import { QuestionReponsesQuiz } from "../components/QuetionReponsesQuiz";

const QuizMakerPage: React.FC = () => {
  return (
    <div>
      <h1>QUIZ MAKER</h1>
      <ChoixQuiz />
      <QuestionReponsesQuiz />
    </div>
  );
};

export default QuizMakerPage;
