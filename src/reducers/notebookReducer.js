export default function notebookReducer(state, action) {

    notebooks: [],
    notes: []
    }, action) {

    switch (action.type) {
        case 'FETCH_NOTEBOOKS':
            return {
                notebooks: action.payload 
            }
            case 'FETCH_NOTES':
                return {
                    notes: action.payload
                }
        case 'ADD_NOTEBOOK':
            return {
                ...state, notebooks: [...state.notebooks, action.payload]
            }

        case 'DELETE_NOTEBOOK':
            const NewNotebooks = state.notebooks.filter(notebook => notebook.id !== action.payload)
            return {
                notebooks: newNotebooks
            }

            case 'ADD_NOTE':
                let notebookId = action.payload.notebook_id 
                return {
                    ...state, note:
                [...state.notebooks[action.payload.notebook_id].notes, action.payload]
                }

                case 'DELETE_NOTE':
                    const newNotes = 
                    state.notebooks[action.notebookId].notes.filter(note => note.id !== action.noteId)
                    return {
                        notes: newNotes 
                    }
            default:
                return state 
    }
}