const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
		     
		         personajes:[],
		         planetas:[],
		         favoritos:[],

			
		},
		actions: {



	
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getPersonajes: ()=> {
				fetch("https://www.swapi.tech/api/people")
				.then(response=>response.json())
				.then(data=>setStore({personajes:data.results}))
	
			},
			getPlanetas: ()=> {
				fetch("https://www.swapi.tech/api/planets")
				.then(response=>response.json())
				.then(data=>setStore({planetas:data.results}))
			},
			
				
			agregarFavoritos:(titulo)=>{
				const store = getStore();
				console.log("agregar favoritos: "+titulo)
				setStore({favoritos:[...store.favoritos,titulo]})
	
			},
			deleteFav: (index) => {
				const store = getStore();
				const newFavoritos = [...store.favoritos]; 
				newFavoritos.splice(index, 1);
				setStore({ favoritos: newFavoritos });
			
			},
			
		},
		
	}






		}
	


export default getState;
