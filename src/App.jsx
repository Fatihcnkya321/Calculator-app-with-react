
import './App.css'

function App() {


  return (
    <>
      <div className="container">
    <Header/>
    <Calc/>
      </div>
    </>
  )
}

function Header(){
  return(
    <>
     <header>
            <h1>calc</h1>
            <div class="calc_theme">
                <h3>THEME</h3>
                <img src="./assets/img/theme_logo.png" alt=""/>
            </div>
        </header>
    </>
  )
}

function Calc(){
  return(
    <>
    <div class="calc">
            <div class="calc_top">
                <h1>399,981</h1>
            </div>
    
            <div class="calc_board">
                <button class="button">7</button>
                <button class="button">8</button>
                <button class="button">9</button>
                <button class="button special01">DEL</button>
                <button class="button">4</button>
                <button class="button">5</button>
                <button class="button">6</button>
                <button class="button">+</button>
                <button class="button">1</button>
                <button class="button">2</button>
                <button class="button">3</button>
                <button class="button">-</button>
                <button class="button">.</button>
                <button class="button">0</button>
                <button class="button">/</button>
                <button class="button">x</button>
                <button class="button special02">RESET</button>
                <button class="button special03">=</button>
            </div>
        </div>
    </>
  )
}

export default App
