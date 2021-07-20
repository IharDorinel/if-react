import '../styles/App.css';
import Data from './Data'


function App() {
  return (
    <div className="App">
      <section className="homes-guests">
        <div className="homes-guests-container">
          <h1>Homes guests loves</h1>
          <div className="home-guests-gallery gallery">
      <Data/>

          </div>
        </div>

      </section>

    </div>
  );
}

export default App;
