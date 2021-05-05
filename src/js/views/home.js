import React, { useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "../component/card.js";

export const Home = () => {
	const [planets, setPlanets] = useState(0);

	useEffect(() => {
		fetch("https://www.swapi.tech/api/planets")
			.then(response => response.json())
			.then(data => console.log(data.results))
			.catch(err => console.error(err));
	}, []);

	return <div className="text-center mt-5">{/* <Card name="A Warm Welcome!" uid="" url="" /> */}</div>;
};
