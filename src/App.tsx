import { FromC } from './sources/FromC'
import { FromAS } from './sources/FromAS'
import { FromTS } from './sources/FromTS'
import CalcForm from './components/CalcForm'
import './App.css';

const algs: { [key: string]: any } = {
    
}


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    WebAssembly test benchmark
                </p>
            </header>
            <CalcForm></CalcForm>
        </div>
    );
}

export default App;
