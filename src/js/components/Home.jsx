import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"
import Jumbotron2 from "./Jumbotron2"
import Cards from "./Cards"

//create your first component
const Home = () => {
	return (

		<div>
			<Navbar />
			<div className="container">

				<Jumbotron2 />
				<div className="d-flex row justify-content-center">
						<Cards />
						<Cards />
						<Cards />
						<Cards />
				</div>
			</div>
			<Footer />
		</div>

	);
};

export default Home;