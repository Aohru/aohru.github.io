import { useLocation, useNavigate } from "react-router-dom";
import { QuizResults } from "../components/QuizResults";
import { Question } from "../models/QuestionReponses";
import { ButtonNavigate } from "../components/ButtonNavigate";
import { Title } from "../components/Title";

interface QuizResultsPageState {
  questions: Question[];
  selectedAnswers: string[];
}

/**
 *
 * @returns un composant associé à la page des résultats du quiz et à la navigation vers un nouveau quiz
 */
export const QuizResultsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { questions, selectedAnswers } = location.state as QuizResultsPageState;

  const handleClickOnCreate = () => {
    navigate("/");
  };

  return (
    <>
      <Title title="RESULTS" />
      <QuizResults selectedAnswers={selectedAnswers} questions={questions} />
      <ButtonNavigate
        onClickOnButtonNavigate={handleClickOnCreate}
        buttonText="Create a new quiz"
      />
    </>
  );
};
