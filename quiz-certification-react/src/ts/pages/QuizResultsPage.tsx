import { useLocation, useNavigate } from "react-router-dom";
import { Results } from "../components/Results";
import { Question } from "../models/QuestionReponses";

interface QuizResultsPageState {
  questions: Question[];
  answers: string[];
}
export const QuizResultsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { questions, answers } = location.state as QuizResultsPageState;

  const handleClickOnCreate = () => {
    navigate("/");
  };

  return (
    <>
      <Results answers={answers} questions={questions} />
      <button className="submit-btn" onClick={handleClickOnCreate}>
        Create a new quiz
      </button>
    </>
  );
};
