export default function addNote(note) {
    // return (dispatch) => {
    //     const options = {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },

    //         body: JSON.stringify({note})
    //     }
    //     fetch('http://localhost:3000/notebooks/${notebookId}/notes', options)
    //     .then(response => response.json())
    //     .then(note => {
    //         dispatch({type: 'ADD_NOTE', payload: note})
    //     })
    // }

    return (dispatch) => {
        fetch('http://localhost:3000/notes', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({note})
        })

        .then(result => result.text())
        .then(note => dispatch({type: 'ADD_NOTE', payload: note}))
    }
}