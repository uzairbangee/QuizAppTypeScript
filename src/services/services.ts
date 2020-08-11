import axios from 'axios';
import {quizType, questionType} from './../Types/Types';

const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);

export const getQuiz = async (category_id: string, mode: string) => {
    const res = await axios.get(`https://opentdb.com/api.php?amount=10&category=${category_id}&difficulty=${mode}&type=multiple`);
    const data: quizType[] = res.data.results;
    const new_data: questionType[] = data.map((item: quizType, index: number) => {
            return {
                question: item.question,
                answers: shuffleArray([item.correct_answer, ...item.incorrect_answers]),
                correct_answer: item.correct_answer
            }
    })

    return new_data;
}