import { useNavigate } from "react-router-dom";
import { Question } from "../models/QuestionReponses";
import { QuestionAnswersBloc } from "./QuestionAnswersBloc";
import "./AnswerButton.css";
import { ButtonNavigate } from "./ButtonNavigate";

interface QuizPlayProps {
  questions?: Question[];
  answers: string[];
  setAnswers: (answers: string[]) => void;
}

/**
 * Composant qui gère le jeu du quiz et la navigation vers la page des résultats
 */
export const QuizPlay: React.FC<QuizPlayProps> = (props: QuizPlayProps) => {
  const { questions, answers, setAnswers } = props;
  const navigate = useNavigate();

  const isSubmitEnabled = !answers.includes("");

  const handleClickOnAnswer = (answer: string, index: number) => {
    setAnswers(answers.map((value, i) => (i === index ? answer : value)));
  };
  const handleClickOnSubmit = () => {
    navigate("/results", { state: { answers: answers, questions: questions } });
  };

  return (
    <div>
      {questions?.map((question, indexQuestion) => (
        <QuestionAnswersBloc
          question={question}
          answers={answers}
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
