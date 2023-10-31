function handleFormSubmit(evt){
    console.log('submitted')
    evt.preventDefault()
}

export default function Form(){
    return (
        <form onSubmit={handleFormSubmit}>
            <button>Submit</button>
        </form>
    )
}