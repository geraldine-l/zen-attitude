import "./App.css";
import Header from "./components/Header";
import Meditation from "./components/Meditation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Litho from "./components/Lithotherapie";

function App() {
	return (
		<div className="container-app">
			<Header />
			<Navbar />
			<body>
				<Meditation />
				<Litho />
			</body>
			<Footer />
		</div>
	);
}

export default App;
