import { useNavigate } from "react-router-dom";
import { Question } from "../models/QuestionReponses";
import "./AnswerButton.css";
import { ButtonNavigate } from "./ButtonNavigate";
import { QuestionAnswersBloc } from "./QuestionAnswersBloc";

interface QuizPlayProps {
  questions?: Question[];
  selectedAnswers: string[];
  setSelectedAnswers: (selectedAnswers: string[]) => void;
}

/**
 * Composant qui gère le jeu du quiz et la navigation vers la page des résultats
 */
export const QuizPlay: React.FC<QuizPlayProps> = (props: QuizPlayProps) => {
  const { questions, selectedAnswers, setSelectedAnswers } = props;
  const navigate = useNavigate();

  const isSubmitEnabled = !selectedAnswers.includes("");

  const handleClickOnAnswer = (
    selectedAnswer: string,
    indexQuestion: number
  ) => {
    setSelectedAnswers(
      selectedAnswers.map((valueAnswer, indexAnswer) =>
        indexAnswer === indexQuestion ? selectedAnswer : valueAnswer
      )
    );
  };

  const handleClickOnSubmit = () => {
    navigate("/results", {
      state: { selectedAnswers: selectedAnswers, questions: questions },
    });
  };

  return (
    <div>
      {questions?.map((question, indexQuestion) => (
        <QuestionAnswersBloc
          currentQuestion={question}
          selectedAnswers={selectedAnswers}
          indexQuestion={indexQuestion}
          onClickOnAnswer={handleClickOnAnswer}
          key={question.questionName}
        />
      ))}
      {isSubmitEnabled && (
        <ButtonNavigate
          onClickOnButtonNavigate={handleClickOnSubmit}
          buttonText="Submit"
        />
      )}
    </div>
  );
};
