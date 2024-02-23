export interface QuestionReponses {
    type: string;
    category: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export interface Question {
    questionName: string;
    answers: string[];
    correctAnswer: string;
  }