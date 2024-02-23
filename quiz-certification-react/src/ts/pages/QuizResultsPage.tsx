import { useEffect, useState } from "react";
import { Question } from "../models/QuestionReponses";
import { useLocation, useNavigate } from "react-router-dom";

interface QuizResultsPageState {
  questions: Question[];
  answers: string[];
}
export const QuizResultsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(location);
  }, [location]);

  const { questions, answers } = location.state as QuizResultsPageState;

  const isAnswerChoosed = (answer: string,question: Question, index: number) =>   answers[index] === answer;

  function getScore() {
    let score = 0;
    questions.map((question, index) => {
      question.correctAnswer === answers[index] && score++;
    });
    return score;
  }

  const handleClickOnCreate = () => {
    navigate("/");
  };

  const getColorByScore = () => {
    switch (getScore()) {
      case 0 | 1:
        return "red";

      case 2 | 3:
        return "yellow";
      default:
        return "green";
    }
  };

  return (
    <>
      <div>
        <h1 style={{ marginBottom: "1em" }}>RESULTS</h1>
      </div>
      <div>
        {questions?.map((question: Question, questionIndex: number) => (
          <div key={question.questionName} className="row justify-content-md-center">
            <p className="col-9" style={{ textAlign: "left" }}>
              {question.questionName}
            </p>
            <p className="col-12">
              <div className=" row justify-content-md-center">
                {question.answers.map((answer: string) => (
                  <button
                    key={answer}
                    type="button"
                    value={answer}
                    className={`btn col-lg-2 answer-btn ${
                      answer === question.correctAnswer
                        ? "correct-answer"
                        : isAnswerChoosed(answer, question, questionIndex) && "incorrect-answer"
                    }`}
                    style={{ marginLeft: "1em" }}
                  >
                    {answer}
                  </button>
                ))}
              </div>
            </p>
          </div>
        ))}
      </div>
      <p className="row justify-content-md-center">
        <span className="col-lg-6" style={{ backgroundColor: getColorByScore()}}>
          You scored {getScore()} out of {answers.length}
        </span>
      </p>
      <button className="submit-btn" onClick={handleClickOnCreate}>
        Create a new quiz
      </button>
    </>
  );
};
