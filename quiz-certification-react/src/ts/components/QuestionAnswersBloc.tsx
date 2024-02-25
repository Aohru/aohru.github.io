import React from "react";
import { Question } from "../models/QuestionReponses";
import { AnswersButtonsRow } from "./AnswersButtonsRow";

interface QuestionAnswersProps {
  currentQuestion: Question;
  selectedAnswers: string[];
  indexQuestion: number;
  onClickOnAnswer?: (selectedAnswer: string, indexQuestion: number) => void;
  isResultsPage?: boolean;
}

/**
 *
 * @param props
 * @returns un bloc contenant une question et une ligne de réponses associées
 */
export const QuestionAnswersBloc: React.FC<QuestionAnswersProps> = (
  props: QuestionAnswersProps
) => {
  const {
    currentQuestion,
    selectedAnswers,
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
        {currentQuestion.questionName}
      </p>
      <div
        className="col-lg-12"
        style={{ textAlign: "left", marginBottom: "1em" }}
      >
        <div
          className={`row ${isResultsPage ? "justify-content-md-center" : ""}`}
        >
          <AnswersButtonsRow
            currentQuestion={currentQuestion}
            selectedAnswers={selectedAnswers}
            indexQuestion={indexQuestion}
            key={currentQuestion.questionName}
            isResultsPage={isResultsPage}
            onClickOnAnswer={onClickOnAnswer}
          />
        </div>
      </div>
    </div>
  );
};
