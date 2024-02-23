import { Question } from "../models/QuestionReponses";

interface AnswersButtonsRowProps {
  question: Question;
  isResultsPage: boolean;
  answers: string[];
  indexQuestion: number;
  onClickOnAnswer?: (selectedAnswer: string, indexQuestion: number) => void;
}

export const AnswersButtonsRow: React.FC<AnswersButtonsRowProps> = (
  props: AnswersButtonsRowProps
) => {
  const { question, isResultsPage = false, answers, indexQuestion, onClickOnAnswer } = props;

  const getClassQuizPlayButton = (indexAnswer: number) => {
    return `btn quiz-answer-btn ${
      question.answers[indexAnswer] === answers[indexQuestion]
        ? "answer-clicked"
        : ""
    }`;
  };

  const getClassResultsButton = (answer: string) => {
    if (answer === question.correctAnswer) {
      return "correct-answer";
    }
    if (answers[indexQuestion] === answer) {
      return "incorrect-answer";
    }
    return "";
  };

  return (
    <>
      {question.answers.map((answer, indexAnswer) => (
        <button
          key={answer}
          type="button"
          value={answer}
          className={`col-lg-2 answer-btn ${
            isResultsPage
              ? getClassResultsButton(answer)
              : getClassQuizPlayButton(indexAnswer)
          }`}
          style={{ marginLeft: "1em" }}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            onClickOnAnswer &&
              onClickOnAnswer(event.currentTarget.value, indexQuestion);
          }}
        >
          {answer}
        </button>
      ))}
    </>
  );
};
