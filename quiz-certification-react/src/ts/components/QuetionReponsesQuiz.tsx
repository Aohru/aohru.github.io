import { useEffect, useState } from "react";
import { fetchData } from "../services/FetchService";
import { QuestionReponses } from "../models/QuestionReponses";
import "./QuestionButton.css";

export interface Question {
  nomQuestion: string;
  reponses: Reponse[];
}

export interface Reponse {
  nomReponse: string;
  isCorrect: boolean;
}

export interface Anwsers {
  answer: string;
  question: string;
}

export const QuestionReponsesQuiz: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>();
  const [answers, setAnswers] = useState<Anwsers[]>();

  useEffect(() => {
    fetchData(
      "https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple"
    ).then((reponse) => {
      setQuestions(
        reponse.results.map((result) => {
          return getQuestion(result);
        })
      );
      setAnswers(reponse.results.map((result) => {
        return result.question;
      }));
     
    });
  }, []);

  function getQuestion(result: {
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  }): Question {
    return {
      nomQuestion: result.question,
      reponses: [
        { nomReponse: result.correct_answer, isCorrect: true },
        ...result.incorrect_answers.map((incorrect) => {
          return { nomReponse: incorrect, isCorrect: false };
        }),
      ],
    };
  }

  const handleClickOnAnswer = (event: any, question2: Question) => {
    console.log("quiz ", event.target.value);
    // setAnswers((answers2) => [...answers2, event.target.value]);
    // setAnswers((lesAnswers) => questions?.map(question => question.nomQuestion === question2.nomQuestion ?  {anwser: event.target.value} : question))
    setAnswers((anwsers2) => {
      const b = anwsers2?.map((an) =>
        an.question === question2.nomQuestion ? event.target.value : an.answer
      );
      console.log(b);
    });
    // const a = questions?.map(question => question.nomQuestion === question2.nomQuestion ?  {anwser: event.target.value} : question);
    // console.log(a);
  };

  useEffect(() => {
    console.log(answers);
  }, [answers]);

  const [reponse1, setReponse1] = useState<string>();

  return (
    <div>
      {questions?.map((question) => (
        <div key={question.nomQuestion} className="row">
          <p className="col-lg-12" style={{ textAlign: "left" }}>
            {question.nomQuestion}
          </p>
          <p className="col-lg-12" style={{ textAlign: "left" }}>
            <div className="btn-group mr-2 row" aria-label="First group">
              {question.reponses.map((reponse, index) => (
       
                <button
                  key={reponse.nomReponse}
                  type="button"
                  value={reponse.nomReponse}
                  className="btn btn-primary col-lg-2 question-btn"
                  style={{ marginLeft: "1em" }}
                  onClick={(event) => handleClickOnAnswer(event, question)}
                >
                  {reponse.nomReponse}
                </button>
              ))}
            </div>
          </p>
        </div>
      ))}
    </div>
  );
};
