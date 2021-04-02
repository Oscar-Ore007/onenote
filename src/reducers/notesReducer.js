export default function notesReducer(state = [], action) {
    switch (action.type) {
        case 'FETCH_NOTES':
            return {
                notes: action.payload
            }
        case 'ADD_NOTE':
            return {
                ...state, notes: [...state.notes, action.payload]
            }
        case 'EDIT_NOTE':
            const editNote = state.notes.map(note => note.id === action.payload.id ? action.payload : note)
            return {
                notes: editNote 
            }
        case 'DELET_NOTE':
            const newNotes = state.notes.filter(note => note.id !== action.noteId)
            return {
                notes: newNotes 
            }
            default:
                return state 
    
    }
}