import { RootState } from '@/store/store';
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    time: 'value',
    start: '',
    finish: ''
}

export const tripSlice = createSlice({
    name: 'trip',
    initialState,
    reducers: {
        setFullDestionation: (state, {payload}) => {
            state.start = payload.start;
            state.finish = payload.finish
        },
        setStartPoint: (state, {payload}) => {
            state.start = payload;
        },
        setFinishPoint: (state, {payload}) => {
            state.finish = payload;
        },

        setPoint: (state, {payload}) => {
            state[payload.key as 'start' | 'finish'] = payload.value
        }
    }
})

const {reducer, actions} = tripSlice;

export default reducer;

export const {setFullDestionation, setStartPoint, setFinishPoint, setPoint} = actions;

export const selectTrip = (rootState: RootState) => rootState.trip;
