import { useState } from "react";
import { Question } from "../models/QuestionReponses";
import "./QuestionButton.css";
import { useNavigate } from "react-router-dom";

interface QuizPlayProps {
  questions?: Question[];
  answers: string[];
  setAnswers: (answers: string[]) => void;
}

export const QuizPlay: React.FC<QuizPlayProps> = (props: QuizPlayProps) => {
  const { questions, answers, setAnswers } = props;
  const [errorMessage] = useState<string>();
  const navigate = useNavigate();

  const handleClickOnAnswer = (answer: string, index: number) => {
    setAnswers(answers.map((value, i) => (i === index ? answer : value)));
  };

  const isSubmitEnabled = !answers.includes("");

  const handleClickOnSubmit = () => {
    // const score = questions?.map((question, index) => question.correctAnswer === answers[index] ? score + 1)
    navigate("/results", { state: { answers: answers, questions: questions } });
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
              {question.answers.map((answer, indexAnswer) => (
                <button
                  key={answer}
                  type="button"
                  value={answer}
                  className={`btn col-lg-2 answer-btn ${
                    question.answers[indexAnswer] === answers[index] ? "answer-clicked" : "" 
                  }`}
                  style={{ marginLeft: "1em" }}
                  onClick={(event: any) =>
                    handleClickOnAnswer(event.target.value, index)
                  }
                >
                  {answer}
                </button>
              ))}
            </div>
          </p>
        </div>
      ))}
      {isSubmitEnabled && (
        <button className="submit-btn" onClick={handleClickOnSubmit}>
          submit
        </button>
      )}
    </div>
  );
};
