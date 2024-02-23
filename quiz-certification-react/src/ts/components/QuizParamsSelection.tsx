import { useState } from "react";
import { fetchData } from "../services/FetchService";
import { SelectCategory } from "./SelectCategory";
import { SelectDifficulty } from "./SelectDifficulty";
import { Question } from "../models/QuestionReponses";

interface QuizParamsSelectionProps {
  setQuestions: (questions: Question[]) => void;
  setAnswers: (answers: string[]) => void;
}

interface ReponseQuestionsApiType {
  response_code: number;
  results: [
    {
      type: string;
      difficulty: string;
      category: string;
      question: string;
      correct_answer: string;
      incorrect_answers: string[];
    }
  ];
}

export const QuizParamsSelection: React.FC<QuizParamsSelectionProps> = (
  props: QuizParamsSelectionProps
) => {
  const [difficultySelected, setDifficultySelected] = useState<string>();
  const [categorySelected, setCategorySelected] = useState<string>();
  const { setQuestions, setAnswers } = props;

  const handleClickOnCreate = () => {
    fetchData(
      `https://opentdb.com/api.php?amount=5&category=${categorySelected}&difficulty=${difficultySelected}&type=multiple`
    )
      .then((reponse: ReponseQuestionsApiType) => {
        setQuestions(
          reponse.results.map((result) => {
            return getQuestion(result);
          })
        );
        setAnswers(reponse.results.map(() => ""));
      })
      .catch((error) => {
        console.log(error);
        /*    setErrorMessage(
          "Les questions du Quiz n'ont pas pu être correctement générées. Merci de revenir plus tard."
        );
        */
      });
  };

  function getQuestion(result: {
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  }): Question {
    return {
      questionName: decode(result.question) ?? "",
      answers: [
        ...result.incorrect_answers.map((incorrect) => decode(incorrect) ?? ""),
        decode(result.correct_answer) ?? "",
      ].sort(() => Math.random() - 0.5),
      correctAnswer: decode(result.correct_answer) ?? "",
    };
  }

  function decode(str: string) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, "text/html");
    return doc.body.textContent;
  }

  return (
    <div className="row">
      <div className="col-lg-5">
        <SelectCategory setCategorySelected={setCategorySelected} />
      </div>
      <div className="col-lg-5">
        <SelectDifficulty setDifficultySelected={setDifficultySelected} />
      </div>
      <div className="col-lg-2">
        <button
          id="createBtn"
          onClick={handleClickOnCreate}
          disabled={!difficultySelected || !categorySelected}
        >
          Create
        </button>
      </div>
    </div>
  );
};
