import "./Navbar.css";

function NavBar() {
	return (
		<div className="nav-container">
			<ul className="nav-list">
				<li><a href="/">Accueil</a></li>
				<li><a href="/#meditation">Méditation</a></li>
				<li><a href="/#lithotherapie">Lithotherapie</a></li>
			</ul>
		</div>
	);
}

export default NavBar;
