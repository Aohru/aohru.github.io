import React, { useState } from "react";
import { QuizParamsSelection } from "../components/QuizParamsSelection";
import { QuizPlay } from "../components/QuizPlay";
import { Question } from "../models/QuestionReponses";

const QuizMakerPage: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>();
  const [answers, setAnswers] = useState<string[]>([""]);

  return (
    <div>
      <h1 style={{ marginBottom: "1em" }}>QUIZ MAKER</h1>
      <QuizParamsSelection setQuestions={setQuestions} setAnswers={setAnswers} />
      <QuizPlay questions={questions} answers={answers} setAnswers={setAnswers}/>
    </div>
  );
};

export default QuizMakerPage;
