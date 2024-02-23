import { useNavigate } from "react-router-dom";
import { Question } from "../models/QuestionReponses";
import { QuestionAnswersBloc } from "./QuestionAnswersBloc";
import "./QuestionButton.css";

interface QuizPlayProps {
  questions?: Question[];
  answers: string[];
  setAnswers: (answers: string[]) => void;
}

export const QuizPlay: React.FC<QuizPlayProps> = (props: QuizPlayProps) => {
  const { questions, answers, setAnswers } = props;
  const navigate = useNavigate();

  const isSubmitEnabled = !answers.includes("");

  console.log("render");

  const handleClickOnAnswer = (answer: string, index: number) => {
    setAnswers(answers.map((value, i) => (i === index ? answer : value)));
  };
  const handleClickOnSubmit = () => {
    // const score = questions?.map((question, index) => question.correctAnswer === answers[index] ? score + 1)
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
        <button className="submit-btn" onClick={handleClickOnSubmit}>
          Submit
        </button>
      )}
    </div>
  );
};
