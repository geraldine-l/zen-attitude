import "./Meditation.css";
import ImageMeditation from "${process.env.PUBLIC_URL}/meditation.jpg";

function Meditation() {
	return (
		<div className="container-article">
			<img className="article-image" src={ImageMeditation} alt="" />
			<h2 id="meditation" className="article-title">La méditation</h2>
			<p className="text-article">
				La méditation présente de nombreux bienfaits, tels que la réduction du
				stress, l'amélioration de la concentration, la gestion des émotions, et
				une meilleure qualité de sommeil. Elle peut aussi diminuer l’anxiété et
				renforcer le système immunitaire. Parmi les différentes méthodes de
				pratique, on trouve la méditation de pleine conscience, de
				concentration, de visualisation, guidée, et de bienveillance (Metta).
				Chaque technique aide à calmer l’esprit, à mieux se connaître et à
				cultiver un état de relaxation. L’essentiel est de pratiquer
				régulièrement, même quelques minutes par jour.
			</p>
			<p className="auteur">Auteur: Géraldine</p>
			<a className="link-article" href="/">Revenir à l'accueil</a>
		</div>
	);
}

export default Meditation;
