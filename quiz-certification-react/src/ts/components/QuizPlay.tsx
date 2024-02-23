import { useState } from "react";
import { Question } from "../models/QuestionReponses";
import "./QuestionButton.css";

interface QuizPlayProps {
  questions?: Question[];
  answers: string [];
  setAnswers: (answers: string[]) => void;
}

export const QuizPlay: React.FC<QuizPlayProps> = (props: QuizPlayProps) => {
  const { questions, answers, setAnswers } = props;
  const [errorMessage] = useState<string>();

  const handleClickOnAnswer = (answer: string, index: number) => {
    setAnswers(
      answers.map((value, i) => (i === index ? answer: value))
    );
  };


  return errorMessage ? (
    <p style={{ color: "red" }}>{errorMessage}</p>
  ) : (
    <div>
      {questions?.map((question, index) => (
        <div key={question.questionName} className="row">
          <p className="col-lg-12" style={{ textAlign: "left" }}>
            {question.questionName}
          </p>
          <p className="col-lg-12" style={{ textAlign: "left" }}>
            <div className="btn-group mr-2 row" aria-label="First group">
              {question.answers.map((answer) => (
                <button
                  key={answer}
                  type="button"
                  value={answer}
                  className={`btn col-lg-2 answer-btn ${answers.includes(answer) && "answer-clicked"}`}
                  style={{ marginLeft: "1em" }}
                  onClick={(event: any) => handleClickOnAnswer(event.target.value, index)}
                >
                  {answer}
                </button>
              ))}
            </div>
          </p>
        </div>
      ))}
    </div>
  );
};
