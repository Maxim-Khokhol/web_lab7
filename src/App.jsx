import './App.css'
import Header from './Header';
import Image from './Image';
import Content from './Content';
import Task2 from "./Task2.jsx";

function App() {
    return <>
        <main>
        <div className="container">
            <Header />
            <Content />
            <Image />
            <Task2/>
        </div>
        </main>
    </>
}

export default App;
