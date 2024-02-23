import React from "react";
import { Question } from "../models/QuestionReponses";
import { AnswersButtonsRow } from "./AnswersButtonsRow";

interface QuestionAnswersProps {
  question: Question;
  answers: string[];
  indexQuestion: number;
  onClickOnAnswer?: (selectedAnswer: string, indexQuestion: number) => void;
  isResultsPage?: boolean;
}

export const QuestionAnswersBloc: React.FC<QuestionAnswersProps> = (
  props: QuestionAnswersProps
) => {
  // const [selectedAnswer, setSelecAnswer] = useState<string>();
  const {
    question,
    answers,
    indexQuestion,
    onClickOnAnswer,
    isResultsPage = false,
  } = props;

  return (
    <div className={`row ${isResultsPage ? "justify-content-md-center" : ""}`}>
      <p
        className={`col-lg-${isResultsPage ? "9" : "12"}`}
        style={{ textAlign: "left" }}
      >
        {question.questionName}
      </p>
      <div
        className="col-lg-12"
        style={{ textAlign: "left", marginBottom: "1em" }}
      >
        <div
          className={`row ${isResultsPage ? "justify-content-md-center" : ""}`}
        >
          <AnswersButtonsRow
            question={question}
            answers={answers}
            indexQuestion={indexQuestion}
            key={question.questionName}
            isResultsPage={isResultsPage}
            onClickOnAnswer={onClickOnAnswer}
          />
        </div>
      </div>
    </div>
  );
};
