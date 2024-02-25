import React, { useState } from "react";
import { QuizParamsSelection } from "../components/QuizParamsSelection";
import { QuizPlay } from "../components/QuizPlay";
import { Title } from "../components/Title";
import { Question } from "../models/QuestionReponses";

/**
 *
 * @returns un composant associé à la génération du quiz et au jeu
 */
const QuizMakerPage: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>();
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([""]);

  return (
    <div>
      <Title title="QUIZ MAKER" />
      <QuizParamsSelection
        setQuestions={setQuestions}
        setSelectedAnswers={setSelectedAnswers}
      />
      <QuizPlay
        questions={questions}
        selectedAnswers={selectedAnswers}
        setSelectedAnswers={setSelectedAnswers}
      />
    </div>
  );
};

export default QuizMakerPage;
