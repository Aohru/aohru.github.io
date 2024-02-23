import { Question } from "../models/QuestionReponses";
import { QuestionAnswersBloc } from "./QuestionAnswersBloc";

interface ResultsProps {
  questions: Question[];
  answers: string[];
}

export const Results: React.FC<ResultsProps> = (props: ResultsProps) => {
  const { answers, questions } = props;

  function getScore() {
    let score = 0;
    questions.map((question, index) => {
      question.correctAnswer === answers[index] && score++;
    });
    return score;
  }

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
      <div>
        <h1 className="h1" style={{ marginBottom: "1em" }}>RESULTS</h1>
      </div>
      <div>
        {questions?.map((question, indexQuestion) => (
          <QuestionAnswersBloc
            question={question}
            answers={answers}
            indexQuestion={indexQuestion}
            key={question.questionName}
            isResultsPage
          />
        ))}
      </div>
      <p className="row justify-content-md-center">
        <span
          className="col-lg-6"
          style={{ backgroundColor: getColorByScore() }}
        >
          You scored {getScore()} out of {answers.length}
        </span>
      </p>
    </>
  );
};
