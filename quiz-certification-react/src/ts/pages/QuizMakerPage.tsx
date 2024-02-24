import React, { useState } from "react";
import { QuizParamsSelection } from "../components/QuizParamsSelection";
import { QuizPlay } from "../components/QuizPlay";
import { Question } from "../models/QuestionReponses";
import { Title } from "../components/Title";

/**
 *
 * @returns un composant associé à la génération du quiz et au jeu
 */
const QuizMakerPage: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>();
  const [answers, setAnswers] = useState<string[]>([""]);

  return (
    <div>
      <Title title="QUIZ MAKER"/>
      <QuizParamsSelection
        setQuestions={setQuestions}
        setAnswers={setAnswers}
      />
      <QuizPlay
        questions={questions}
        answers={answers}
        setAnswers={setAnswers}
      />
    </div>
  );
};

export default QuizMakerPage;
