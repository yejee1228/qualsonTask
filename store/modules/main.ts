import axios from "axios"

const SET_INITIAL_SEQ = 'main/SET_INITIAL_SEQ'
const SET_SEQ_ARRAY = 'main/SET_SEQ_ARRAY'
const INCREASE_SEQ = 'main/INCREASE_SEQ'
const SET_SCORE = 'main/SET_SCORE'
const SET_QUESTIONS = 'main/SET_QUESTIONS'
const GET_RESULT = 'main/GET_RESULT'

export const setInitialSeq = () => ({ type: SET_INITIAL_SEQ })
export const setSeqArray = () => ({ type: SET_SEQ_ARRAY })
export const increaseSeq = () => ({ type: INCREASE_SEQ })
export const setScore = (score: number) => ({ type: SET_SCORE, score })
export const setQuestions = (questions: object[]) => ({ type: SET_QUESTIONS, questions })
export const getResult = (score: number) => ({ type: GET_RESULT, score })

const initialState = {
    seq: 0, seqArray: [0, 1, 2],
    resultTypes: [
        { value: 3, key: 'dwight' },
        { value: 5, key: 'mary' },
        { value: 6, key: 'tim' },
        { value: 8, key: 'ted' },
    ],
    questions: [],
    score: 0
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_INITIAL_SEQ:
            return { ...state, seq: 0 }

        case SET_SEQ_ARRAY:
            const array: number[] = [0, 1, 2]
            const sortedArray = array.sort(() => Math.random() - 0.5);
            return { ...state, seqArray: sortedArray }

        case INCREASE_SEQ:
            return { ...state, seq: state.seq + 1 }

        case SET_SCORE:
            return { ...state, score: state.score + action.score }

        case SET_QUESTIONS:
            return { ...state, questions: action.questions }

        case GET_RESULT:
            const resultType = state.resultTypes.filter(resultType => resultType.value === action.score)[0]
            const resultData = getResultAPI(resultType.key)
            return { ...state, result: resultData }

        default: return state
    }
}

const getQuestionAPI = async () => {
    return await axios.get(`http://localhost:3000/api/question`)
}
const getResultAPI = async (key: string) => {
    return await axios.get(`https://ebti.realclass.co.kr/api/result/${key}`)
}
export default reducer;
/* 
import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 }; // 초기 상태 정의

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => { state.value += 1 },
        decrement: state => { state.value -= 1 },
    },
});

export const { increment, decrement } = counterSlice.actions; // 액션 생성함수
export default counterSlice.reducer; // 리듀서 */