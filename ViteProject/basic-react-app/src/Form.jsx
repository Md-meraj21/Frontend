function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form Was Submitted !");
}

export default function Form() {
    return (
        <form action="">
            <input type="text" placeholder="Hello" />
            <button onClick={handleFormSubmit}>Submit</button>
        </form>
    )
}