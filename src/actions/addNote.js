export default function addNote(note) {
    return (dispatch) => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },

            body: JSON.stringify({note})
        }
    }
}