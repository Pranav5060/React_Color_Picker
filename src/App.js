import logo from './logo.svg';
import './App.css';
import ColorPick from './components/Colorpick';

function App() {
  const colors = ['#FF0000', '#00FF00', '#0000FF'];
  return (
    <div className="App">
      <ColorPick colors={colors}/>
    </div>
  );
}

export default App;
