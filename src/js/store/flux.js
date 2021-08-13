const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			peopleLive: {},
			planets: [],
			planetsLive: {},
			vehicles: [],
			vehiclesLive: {},
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getPeople: data => {
				const store = getStore();
				const endpoint = "https://swapi.dev/api/people/";
				const config = {
					method: "GET"
				};

				fetch(endpoint, config)
					.then(res => res.json())
					.then(data => setStore({ people: data.results }))
					.catch(err => err);
			},

			getPlanets: data => {
				const store = getStore();
				const endpoint = "https://swapi.dev/api/planets/";
				const config = {
					method: "GET"
				};
				fetch(endpoint, config)
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch(err => err);
			},

			getVehicles: data => {
				const store = getStore();
				const endpoint = "https://swapi.dev/api/vehicles/";
				const config = {
					method: "GET"
				};
				fetch(endpoint, config)
					.then(res => res.json())
					.then(data => setStore({ vehicles: data.results }))
					.catch(err => err);
			},

			getpeopleLive: id => {
				const store = getStore();
				const endpoint = `https://swapi.dev/api/people/${id}`;
				const config = {
					method: "GET"
				};
				fetch(endpoint, config)
					.then(res => res.json())
					.then(data => setStore({ peopleLive: data }))
					.catch(err => err);
			},
			getvehiclesLive: id => {
				const store = getStore();
				const endpoint = `https://swapi.dev/api/vehicles/${id}`;
				const config = {
					method: "GET"
				};
				fetch(endpoint, config)
					.then(res => res.json())
					.then(data => setStore({ vehiclesLive: data }))
					.catch(err => err);
			},
			getplanetsLive: id => {
				const store = getStore();
				const endpoint = `https://swapi.dev/api/planets/${id}`;
				const config = {
					method: "GET"
				};
				fetch(endpoint, config)
					.then(res => res.json())
					.then(data => setStore({ planetsLive: data }))
					.catch(err => err);
			},

			addFavorites: element => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, element] });
			},

			removeFavorite: index => {
				const store = getStore();
				store.favorites.splice(index, 1);
				setStore({ favorites: store.favorites });
			}
		}
	};
};

export default getState;
