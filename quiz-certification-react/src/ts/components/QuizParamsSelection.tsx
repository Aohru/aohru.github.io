import { useState } from "react";
import { fetchData } from "../services/FetchService";
import { SelectCategory } from "./SelectCategory";
import { SelectDifficulty } from "./SelectDifficulty";
import { Question } from "../models/QuestionReponses";
import { ReponseQuestionsApiType, ResultQuestionApiType } from "../models/ApiOpentdb";

interface QuizParamsSelectionProps {
  setQuestions: (questions: Question[]) => void;
  setAnswers: (answers: string[]) => void;
}

export const QuizParamsSelection: React.FC<QuizParamsSelectionProps> = (
  props: QuizParamsSelectionProps
) => {
  const [difficultySelected, setDifficultySelected] = useState<string>();
  const [categorySelected, setCategorySelected] = useState<string>();
  const { setQuestions, setAnswers } = props;

  const handleClickOnCreateQuiz = () => {
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
  };

  function getQuestion(result: ResultQuestionApiType): Question {
    return {
      questionName: decode(result.question),
      answers: [
        ...result.incorrect_answers.map((incorrectAnswer) => decode(incorrectAnswer)),
        decode(result.correct_answer),
      ].sort(() => Math.random() - 0.5),
      correctAnswer: decode(result.correct_answer),
    };
  }

  function decode(encodedString: string) {
    const parser = new DOMParser();
    const document = parser.parseFromString(encodedString, "text/html");
    return document.body.textContent ?? "";
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
          onClick={handleClickOnCreateQuiz}
          style={{backgroundColor: "green", color: "white"}}
          disabled={!difficultySelected || !categorySelected}
        >
          Create
        </button>
      </div>
    </div>
  );
};
