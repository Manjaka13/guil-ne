import "./App.css";
import "./Card.css";
import "./Balloons.css";

function App() {
  return (
    <div className="app">
      <canvas id="confetti"></canvas>
      <div class="container">
        <div class="balloon">
          <div>
            <span>G</span>
          </div>
          <div>
            <span>U</span>
          </div>
          <div>
            <span>I</span>
          </div>
          <div>
            <span>L</span>
          </div>
          <div>
            <span>È</span>
          </div>
          <div>
            <span>N</span>
          </div>
          <div>
            <span>E</span>
          </div>
        </div>
      </div>
      <div class="card">
        <p class="card__wish">
          Nous t'envoyons plein d'amour, de souhait de bonne santé et de grosses
          pensées positives. Biiiiiises
        </p>
        <h1 class="card__title">Rétablis-toi vite !</h1>
      </div>
      <div class="lottie-container">
        <iframe
          class="lottie"
          src="https://embed.lottiefiles.com/animation/61257"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
