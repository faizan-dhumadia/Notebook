import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    note: [],
}

export const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        setNotes: (state, payload) => {
            state.note += payload
            console.log(state.note);
        }
    },
})

// Action creators are generated for each case reducer function
export const { setNotes, note } = noteSlice.actions

export default noteSlice.reducer