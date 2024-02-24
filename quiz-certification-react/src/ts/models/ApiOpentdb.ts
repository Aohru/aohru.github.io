import { Category } from "./Category";

export interface ReponseQuestionsApiType {
    response_code: number;
    results: ResultQuestionApiType[];
}

export interface ResultQuestionApiType {
    type: string;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];

}

export interface CategoriesApiType {
    trivia_categories: Category[];
}