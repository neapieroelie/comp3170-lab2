import './App.css'
import Artist from "./components/Artist";
import Header from './components/Header.jsx';
import { ARTISTS } from './artists.js';

function App() {

  const artistDetails = ARTISTS.map(artist => <Artist key={artist.name} artist={artist} />);

  return (
    <div>
      <main>
        <Header/>
        <div className='artistSection'>
          {artistDetails}
        </div>
      </main>
    </div>
  )
}

export default App
