import HeaderImage from './components/HeaderImage/HeaderImage.component';
import Filters from './components/Filters/Filters.component';
import './App.css';
import { GlobalProvider } from './context/GlobalState';
import PokemonCards from './components/PokemonCards/PokemonCards.component';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <header className="App-header">
          <HeaderImage />
        </header>
        <main className="App-main">
          <Filters />
          <PokemonCards />
        </main>
      </div>
    </GlobalProvider>
  );
}

export default App;
