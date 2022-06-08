import './calculator.css';


function Calculator(){

    return(
        <div class="container"> 
            <div class="comp-1"> 
                <button id="ce-1"> CE </button>
                <div class="screen">
                    <h3 class="res">0</h3>
                </div>
            </div>
            <div class="btn-1-op"> 
                <button class="type-1-sim">7</button>
                <button class="type-1-sim">8</button>
                <button class="type-1-sim">9</button>
                <button class="type-1-sim">/</button>
                <button class="type-1-sim">4</button>
                <button class="type-1-sim">5</button>
                <button class="type-1-sim">6</button>
                <button class="type-1-sim">*</button>
                <button class="type-1-sim">1</button>
                <button class="type-1-sim">2</button>
                <button class="type-1-sim">3</button>
                <button class="type-1-sim">-</button>
                <button class="type-1-sim">0</button>
                <button class="type-1-sim">.</button>
                <button class="type-1-sim">=</button>
                <button class="type-1-sim">+</button>
                </div>
        </div>
    );
}
export default Calculator;