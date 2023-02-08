import {
	GET_PETS,
	GET_ADOPTION_PETS,
	GET_PET_ID,
	GET_LOST_PETS,
	POST_PET,
	UPDATE_PET,
	DELETE_PET,
	POST_USER,
	POST_PRODUCT,
	POST_VET,
	FILTER_ADOPTION_VALUES,
	FILTER_BY_SEARCH_AREA,
	GET_ALL_PRODUCTS,
	GET_PRODUCT_DETAIL,
	SHOP_SEARCH_INPUT_NAME,
	SHOP_FILTER_VALUE,
	NEXT_PAGE, // se pueden sacar
	PREV_PAGE, // se pueden sacar
	ACTUAL_PAGE, // se pueden sacar
	GET_VETERINARIES,
	GET_DETAILS_VETERINARIES,
	GET_ALL_USERS,
	GET_USER_ID,
	SET_STATUS_USER,
	UPDATE_PRODUCT,
	UPDATE_USER,
	UPDATE_VET,
	MODIFY_PRODUCT,
	SET_IMAGE,
} from "../ActionTypes";

const initialState = {
	allPets: [],
	adoptionPets: [],
	lostPets: [],
	pets: [],
	Detail: {},
	allProducts: [],
	products: [],
	productDetail: {},
	modifyProduct: {},
	actualPage: 1,
	allVets: [],
	vetsDetail: {},
	allUsers: [],
	user: [],
	cart: [],
	functions: {},
	imageUrl: "",
};

const RootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_USERS:
			return {
				...state,
				allUsers: action.payload,
			};
		case GET_PETS:
			if (action.payload.value === undefined) {
				return {
					...state,
					allPets: action.payload.allPets,
				};
			}
			if (action.payload.value === "lostPets") {
				return {
					...state,
					lostPets: action.payload.lostPets,
					pets: action.payload.lostPets,
				};
			}
			if (action.payload.value === "adoptions") {
				return {
					...state,
					adoptionPets: action.payload.adoptionPets,
					pets: action.payload.adoptionPets,
				};
			}
		case GET_USER_ID:
			return {
				...state,
				user: action.payload,
			};
		case GET_ADOPTION_PETS:
			return {
				...state,
				allPets: action.payload,
				adoptionPets: action.payload.filter(
					(pet) => pet.status === "encontrado"
				),
				pets: action.payload.filter((pet) => pet.status === "encontrado"),
			};
		case GET_LOST_PETS:
			return {
				...state,
				lostPets: action.payload.filter((pet) => pet.status === "perdido"),
				pets: action.payload.filter((pet) => pet.status === "perdido"),
			};
		case GET_PET_ID:
			return {
				...state,
				Detail: action.payload,
			};
		case POST_PET:
			return {
				...state,
			};
		case UPDATE_PET:
			return {
				...state,
			};
		case POST_USER:
			return {
				...state,
				user: action.payload,
			};
		case POST_PRODUCT:
			return {
				...state,
			};
		case POST_VET:
			return {
				...state,
			};
		case FILTER_ADOPTION_VALUES:
			let all;
			if (action.payload.value === "adoptions") {
				all = state.adoptionPets;
			} else {
				all = state.lostPets;
			}

			action.payload.arrayFilterValues.forEach((filterValue) => {
				if (filterValue === "macho" || filterValue === "hembra") {
					all = all.filter((pet) => pet.sex === filterValue);
				}
				if (filterValue === "perro" || filterValue === "gato") {
					all = all.filter((pet) => pet.species === filterValue);
				}
				if (
					filterValue === "cachorro" ||
					filterValue === "joven" ||
					filterValue === "adulto"
				) {
					all = all.filter((pet) => pet.age === filterValue);
				}
				if (
					filterValue === "pequeño" ||
					filterValue === "mediano" ||
					filterValue === "grande"
				) {
					all = all.filter((pet) => pet.size === filterValue);
				}
			});
			return {
				...state,
				pets: all,
			};
		case FILTER_BY_SEARCH_AREA:
			if (action.payload.value === "adoptions") {
				return {
					...state,
					pets: state.adoptionPets.filter((pet) =>
						pet.area
							.toLowerCase()
							.includes(action.payload.inputValue.toLowerCase())
					),
					actualPage: 1,
				};
			} else {
				return {
					...state,
					pets: state.lostPets.filter((pet) =>
						pet.area
							.toLowerCase()
							.includes(action.payload.inputValue.toLowerCase())
					),
				};
			}
		case GET_ALL_PRODUCTS:
			return {
				...state,
				allProducts: action.payload,
				products: action.payload,
			};
		case GET_PRODUCT_DETAIL:
			return {
				...state,
				productDetail: action.payload,
			};
		case SHOP_SEARCH_INPUT_NAME:
			return {
				...state,
				products: state.allProducts.filter((product) =>
					product.name.toLowerCase().includes(action.payload.toLowerCase())
				),
			};
		case SHOP_FILTER_VALUE:
			return {
				...state,
				products: state.allProducts.filter(
					(p) => p.Category === action.payload
				),
			};
		case ACTUAL_PAGE:
			return {
				...state,
				actualPage: action.payload,
			};
		case NEXT_PAGE:
			return {
				...state,
				actualPage: action.payload,
			};
		case PREV_PAGE:
			return {
				...state,
				actualPage: action.payload,
			};
		case GET_VETERINARIES:
			return {
				...state,
				allVets: action.payload,
			};
		case GET_DETAILS_VETERINARIES:
			return {
				...state,
				vetsDetail: action.payload,
			};
		case SET_STATUS_USER:
			return {
				...state,
			};
		case UPDATE_PRODUCT:
			return {
				...state,
			};
		case UPDATE_USER:
			return {
				...state,
			};
		case MODIFY_PRODUCT:
			return {
				...state,
				modifyProduct: action.payload,
			};
		case SET_IMAGE:
			return {
				...state,
				imageUrl: action.payload,
			};
		case DELETE_PET:
			return {
				...state,
				user: action.payload,
			};
		default:
			return state;
	}
};

export default RootReducer;
