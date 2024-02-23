import { useEffect } from "react";
import { Question } from "../models/QuestionReponses";
import { useLocation, useNavigate } from "react-router-dom";

export const QuizResultsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(location);
  }, [location]);

  const { questions, answers } = location.state;

  const isAnswerChoosed = (answer: string) => answers.includes(answer);

  const handleClickOnCreate = () => {
    navigate("/");
  };

  return (
    <>
      <div>
        <h1 style={{ marginBottom: "1em" }}>RESULTS</h1>
      </div>
      <div>
        {questions?.map((question: Question) => (
          <div key={question.questionName} className="row">
            <p className="col-lg-12" style={{ textAlign: "left" }}>
              {question.questionName}
            </p>
            <p className="col-lg-12" style={{ textAlign: "left" }}>
              <div className="btn-group mr-2 row" aria-label="First group">
                {question.answers.map((answer: string) => (
                  <button
                    key={answer}
                    type="button"
                    value={answer}
                    className={`btn col-lg-2 answer-btn ${
                      answer === question.correctAnswer
                        ? "correct-answer"
                        : isAnswerChoosed(answer) && "incorrect-answer"
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
      <button className="submit-btn" onClick={handleClickOnCreate}>
        Create a new quiz
      </button>
    </>
  );
};
