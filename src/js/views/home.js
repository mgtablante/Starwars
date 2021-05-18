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

	const [people, setPeople] = useState();

	useEffect(() => {
		fetch("https://www.swapi.tech/api/people")
			.then(response => response.json())
			.then(data => setPeople(data.results))
			.catch(err => console.error(err));
	}, []);

	let peopleCards = [];
	if (people) {
		peopleCards = people.map((people, key) => {
			return <Card name={people.name} uid={people.uid} url={people.url} key={key} />;
		});
	}
	const [vehicles, setVehicles] = useState();

	useEffect(() => {
		fetch("https://www.swapi.tech/api/vehicles")
			.then(response => response.json())
			.then(data => setVehicles(data.results))
			.catch(err => console.error(err));
	}, []);

	let vehiclesCards = [];
	if (vehicles) {
		vehiclesCards = vehicles.map((vehicles, key) => {
			return <Card name={vehicles.name} uid={vehicles.uid} url={vehicles.url} key={key} />;
		});
	}

	return (
		<div className="home">
			<h1> Characters</h1>
			<div className="planet d-flex flex-row">{planetCards}</div>
			<h1>Planets</h1>
			<div className="people d-flex flex-row">{peopleCards}</div>
			<h1>People</h1>
			<div className="vehicles d-flex flex-row">{vehiclesCards}</div>
			<h1>Vehicles</h1>
		</div>
	);
};
