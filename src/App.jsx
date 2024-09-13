import logo from './logo.svg';
import './App.css';

// import FirstComponent from './components/FirstComponent.jsx';
// import TemplateExpressions from './components/TemplateExpressions.jsx';
// import MyComponent from './components/MyComponent.jsx';
import ney10 from './assets/image-ney10.jpeg'
import OutroComponent from './components/OutroComponent.jsx';
import ComponentORemake from './components/ComponentORemake.jsx';

function App() {
  const n = 15
  const classDiferente = true

  return (
    <div className='App'>
      {/*
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponent/>
      */}

      <ComponentORemake/>

      <h1>Olha só um texto aqui</h1>
      {/* CSS no proprio modulo */}
      <OutroComponent/>

      {/* CSS inline */}
      <p style={{color:"blue", padding:"25px", backgroundColor:"red", fontSize:"40px"}}>Este parágrafo é do App.jsx</p>

      {/* CSS com if ternário */}
      <h3 style={n > 10 ? ({color:"green", backgroundColor:"yellow"}) : ({color:"red", backgroundColor:"black"}) }>Aqui tem um texto com o primeiro estilo</h3>

      <h3 style={n < 10 ? ({color:"green", backgroundColor:"yellow"}) : ({color:"red", backgroundColor:"black"}) }>Aqui tem um texto com o segundo estilo</h3>

      {/* Class diferente de acordo com a verificação */}
      <h2 className={classDiferente ? "red-title" : "normal-title" }> Texto com classe diferente 1</h2>
      <h2 className={classDiferente ? "normal-title" : "red-title" }> Texto com classe diferente 2 - O Retorno</h2>
      
      {/* Importação pela pasta public */}
      <img src="./image-cr7.jpeg" width={1000} height={600} alt="Cristiano Ronaldo" />

      {/* Importação pela pasta assets */}
      <img src={ney10} width={1000} height={600} alt="Neymar" />
    </div>
  );
}

export default App;
