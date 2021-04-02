export default function notebookReducer(state, action) {

    switch (action.type) {
        case 'FETCH_NOTEBOOKS':
            return {
                notebooks: action.payload 
            }
        case 'ADD_NOTEBOOK':
            return {
                ...state, notebooks: [...state.notebooks, action.payload]
            }

            case 'ADD_NOTE':
                let notebookId = action.payload.notebook_id 
                return {
                    ...state, notes:
                    [...state.notebooks[action.payload.notebook_id].notes, action.payload]
                }
            default:
                return state 
    }
}