import './styles/calculator.css';


const Calculator = (props) => {

    return(
        <div class="container"> 
            <div class="comp-1"> 
                <button id="ce-1"> CE </button>
                <div class="screen">
                    <h3 class="res">{props.res}</h3>
                </div>
            </div>
            <div class="btn-1-op" id="num_sim"> 
                <button class="type-1-sim" value="7">7</button>
                <button class="type-1-sim" value="8">8</button>
                <button class="type-1-sim" value="9">9</button>
                <button class="type-1-sim" id="color-btn" value="/">/</button>
                <button class="type-1-sim" value="4">4</button>
                <button class="type-1-sim" value="5">5</button>
                <button class="type-1-sim" value="6">6</button>
                <button class="type-1-sim" id="color-btn" value="*">*</button>
                <button class="type-1-sim" value="1">1</button>
                <button class="type-1-sim" value="2">2</button>
                <button class="type-1-sim" value="3">3</button>
                <button class="type-1-sim" id="color-btn" value="-">-</button>
                <button class="type-1-sim" value="0">0</button>
                <button class="type-1-sim" value=".">.</button>
                <button class="type-1-sim" id="color-btn">=</button>
                <button class="type-1-sim" id="color-btn" value="+">+</button>
                </div>
        </div>
    );
}


export default Calculator;