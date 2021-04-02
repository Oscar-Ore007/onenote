export default function deleteNotebook(notebookId) {

    return (dispatch) => {
        return fetch(`http://localhost:3000/notebooks/${notebookId}`, {
            method: "DELETE"
        })
        .then(reponse => dispatch({type: "DELETE_NOTEBOOK", payload: notebookId}))
    }
}