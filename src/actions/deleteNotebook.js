export default function deleteNotebook(notebookId) {

    return (dispatch) => {
        // debugger
        return fetch(`http://localhost:3000/notebooks/${notebookId}`, {
            method: "DELETE"
        })
        .then(response => dispatch({type: "DELETE_NOTEBOOK", payload: notebookId}))
    }
     
}