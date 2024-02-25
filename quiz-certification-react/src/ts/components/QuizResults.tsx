import { Question } from "../models/QuestionReponses";
import { QuestionAnswersBloc } from "./QuestionAnswersBloc";

interface ResultsProps {
  questions: Question[];
  selectedAnswers: string[];
}

/**
 * @param props
 * @returns un composant associé aux résultats
 */
export const QuizResults: React.FC<ResultsProps> = (props: ResultsProps) => {
  const { selectedAnswers, questions } = props;

  const getScore = () => {
    let score = 0;
    questions.map((question, index) => {
      question.correctAnswer === selectedAnswers[index] && score++;
    });
    return score;
  };

  const getColorByScore = () => {
    switch (getScore()) {
      case 0:
      case 1:
        return "red";
      case 2:
      case 3:
        return "yellow";
      default:
        return "green";
    }
  };

  return (
    <>
      {questions?.map((question, indexQuestion) => (
        <QuestionAnswersBloc
          currentQuestion={question}
          selectedAnswers={selectedAnswers}
          indexQuestion={indexQuestion}
          key={question.questionName}
          isResultsPage
        />
      ))}
      <p className="row justify-content-md-center">
        <span
          className="col-lg-6"
          style={{ backgroundColor: getColorByScore() }}
        >
          You scored {getScore()} out of {selectedAnswers.length}
        </span>
      </p>
    </>
  );
};
