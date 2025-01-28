import ImageLitho from "public/litho.jpg";
import "./Lithotherapie.css";

function Litho() {
	return (
		<div className="container-article-litho">
			<img className="article-image-litho" src={ImageLitho} alt="" />
			<h2 id="lithotherapie" className="article-title">
				La lithotherapie
			</h2>
			<p className="text-article">
				La lithothérapie est une pratique qui repose sur l’utilisation des
				pierres et des cristaux pour favoriser le bien-être physique, émotionnel
				et spirituel. On croit que chaque pierre possède des vibrations
				énergétiques particulières qui peuvent avoir un effet positif sur le
				corps et l’esprit. Les bienfaits associés à la lithothérapie varient en
				fonction des pierres utilisées. Par exemple, l'améthyste est souvent
				liée à la relaxation et à la réduction du stress, tandis que la pierre
				de lune est censée favoriser l'équilibre émotionnel. Les utilisateurs
				croient que ces pierres peuvent aider à apaiser l’anxiété, stimuler la
				créativité, ou encore améliorer la qualité du sommeil. Cependant, il est
				important de noter que ces effets n’ont pas été prouvés
				scientifiquement, et la lithothérapie est souvent perçue comme une
				approche complémentaire aux soins médicaux traditionnels
			</p>
			<p className="auteur">Auteur: Géraldine</p>
			<a className="link-article" href="/">
				Revenir à l'accueil
			</a>
		</div>
	);
}

export default Litho;
