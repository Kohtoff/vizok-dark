import { RootState } from '@/store/store'
import { TicketType } from '@/types/tickets'
import { createSlice } from '@reduxjs/toolkit'

type State = {
    selectedTickets: TicketType[]
}

const initialState: State = {
    selectedTickets: []
}

export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        addTicket: (state, {payload}) => {
            state.selectedTickets = [...state.selectedTickets, payload.ticket]
        },

        removeTicket: (state, {payload}) => {
            state.selectedTickets = state.selectedTickets.filter(ticket => ticket.id === payload.id);
        },

        cleanCart: (state) => {
            state.selectedTickets = initialState.selectedTickets;
        }
    }
})

const {reducer, actions} = ticketsSlice;

export default reducer;

export const {addTicket, removeTicket, cleanCart} = actions;

export const selectTickets = (rootState: RootState) => rootState.tickets;
