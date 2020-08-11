import React from 'react';

export type CategoryPropType = {
    title: string,
    id: string
}

export type ModePropType = {
    mode: string,
    name: string,
    ids: string,
}

export type questionType = {
    question: string,
    answers: string[],
    correct_answer: string
}

export type quizType = {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    question: string,
    type: string,
}

export type quizShowPropType = {
    number: number,
    question: string,
    answers : string[],
    handleNext: (e:React.FormEvent<EventTarget>, ans:string) => void
}