const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
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
			addList(id) {
				const store = getStore();
				if (store.favorites.includes(id) == true) {
					const list = store.favorites.filter((element, index) => {
						return element != id;
					});
					setStore({ favorites: list });
					localStorage.setItem("favoriteId", list);
				} else {
					const list = [...store.favorites];
					list.push(id);
					setStore({ favorites: list });
					localStorage.setItem("favoriteId", list);
				}
			},
			deleteList(name) {
				const store = getStore();
				const list = store.favorites.filter((element, index) => {
					return element != name;
				});
				localStorage.removeItem("favoriteId");
				setStore({ favorites: list });
				localStorage.setItem("favoriteId", list);
				// console.log("eliminado", store.favorites);
			},

			setFavorite(favoriteId) {
				setStore({ favorites: favoriteId });
			}
		}
	};
};

export default getState;
