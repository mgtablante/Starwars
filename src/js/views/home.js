import React, { useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "../component/card.js";

export const Home = () => {
	const [planets, setPlanets] = useState();

	useEffect(() => {
		fetch("https://www.swapi.tech/api/planets")
			.then(response => response.json())
			.then(data => setPlanets(data.results))
			.catch(err => console.error(err));
	}, []);

	let planetCards = [];
	if (planets) {
		planetCards = planets.map((planet, key) => {
			return <Card name={planet.name} uid={planet.uid} url={planet.url} key={key} />;
		});
	}

	return <div>{planetCards}</div>;
};
