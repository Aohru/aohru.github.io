import { Question } from "../models/QuestionReponses";

interface AnswersButtonsRowProps {
  currentQuestion: Question;
  isResultsPage: boolean;
  selectedAnswers: string[];
  indexQuestion: number;
  onClickOnAnswer?: (selectedAnswer: string, indexQuestion: number) => void;
}

/**
 *
 * @param props
 * @returns une ligne de réponses associée à une question
 */
export const AnswersButtonsRow: React.FC<AnswersButtonsRowProps> = (
  props: AnswersButtonsRowProps
) => {
  const {
    currentQuestion,
    isResultsPage = false,
    selectedAnswers,
    indexQuestion,
    onClickOnAnswer,
  } = props;

  const isAnswerChoosed = (answer: string) =>
    selectedAnswers[indexQuestion] === answer;

  const getClassQuizPlayButton = (answer: string) => {
    return `btn quiz-answer-btn ${
      isAnswerChoosed(answer) ? "answer-clicked" : ""
    }`;
  };

  const getClassResultsButton = (answer: string) => {
    if (answer === currentQuestion.correctAnswer) {
      return "correct-answer";
    }
    return isAnswerChoosed(answer) ? "incorrect-answer" : "";
  };

  return (
    <>
      {currentQuestion.answers.map((answer) => (
        <button
          key={answer}
          type="button"
          value={answer}
          className={`col-lg-2 answer-btn ${
            isResultsPage
              ? getClassResultsButton(answer)
              : getClassQuizPlayButton(answer)
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
