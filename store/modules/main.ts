import { Reducer } from "redux"

const SET_INITIAL_SEQ = 'main/SET_INITIAL_SEQ' as const
const SET_SEQ_ARRAY = 'main/SET_SEQ_ARRAY' as const
const INCREASE_SEQ = 'main/INCREASE_SEQ' as const
const SET_SCORE = 'main/SET_SCORE' as const
const GET_RESULT = 'main/GET_RESULT' as const
const SET_INITIAL_SCORE = 'main/SET_INITIAL_SCORE' as const

export const setInitialSeq = () => ({ type: SET_INITIAL_SEQ })
export const setSeqArray = () => ({ type: SET_SEQ_ARRAY })
export const increaseSeq = () => ({ type: INCREASE_SEQ })
export const setScore = (score: number) => ({ type: SET_SCORE, score })
export const getResult = () => ({ type: GET_RESULT })
export const setInitialScore = () => ({ type: SET_INITIAL_SCORE })

export type MainAction =
    | ReturnType<typeof setInitialSeq>
    | ReturnType<typeof setSeqArray>
    | ReturnType<typeof increaseSeq>
    | ReturnType<typeof setScore>
    | ReturnType<typeof getResult>
    | ReturnType<typeof setInitialScore>;

export interface MainState {
    seq: number,
    seqArray: number[],
    resultTypes:
    { value: number, key: string }[],
    resultKey: string,
    score1: number,
    score2: number,
    score3: number,
    totalScore: number
}

const initialState: MainState = {
    seq: 0,
    seqArray: [0, 1, 2],
    resultTypes: [
        { value: 4, key: 'dwight' },
        { value: 5, key: 'mary' },
        { value: 6, key: 'tim' },
        { value: 7, key: 'ted' },
    ],
    resultKey: '',
    score1: 0,
    score2: 0,
    score3: 0,
    totalScore: 0
}

const reducer = (state: MainState = initialState, action: MainAction) => {
    switch (action.type) {
        case SET_INITIAL_SEQ:
            return { ...state, seq: 0 }

        case SET_SEQ_ARRAY: {
            const array: number[] = [0, 1, 2]
            const sortedArray = array.sort(() => Math.random() - 0.5);
            return { ...state, seqArray: sortedArray }
        }
        case INCREASE_SEQ:
            return { ...state, seq: state.seq + 1 }

        case SET_SCORE: {
            switch (state.seq) {
                case 0: return { ...state, score1: action.score }
                case 1: return { ...state, score2: action.score }
                case 2: return { ...state, score3: action.score }
                default: return { ...state }
            }
        }

        case GET_RESULT: {
            state.totalScore = state.score1 + state.score2 + state.score3
            const resultType = state.resultTypes.find(type => type.value === state.totalScore)
            return { ...state, resultKey: resultType }
        }

        case SET_INITIAL_SCORE:
            return { ...state, score: 0 }

        default: return state
    }
}

export default reducer;