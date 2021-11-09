import "./App.css";

function App() {
    let onSubmitHandler = () => {
        let text = document.getElementById("string");
        alert(text.value);
    };

    return (
        <div className='App'>
            <input
                type='text'
                id='string'
                placeholder='Enter Text Here'
                name='string'
            />
            <br />
            <button onClick={onSubmitHandler}>Get Value</button>
        </div>
    );
}

export default App;
