import {
	GET_ALL_PETS,
	GET_ADOPTION_PETS,
	GET_PET_ID,
	GET_LOST_PETS,
	POST_PET,
	POST_USER,
	FILTER_CATS_ADOPTION,
	FILTER_DOGS_ADOPTION,
	FILTER_SEX_FEMALE_ADOPTION,
	FILTER_SEX_MALE_ADOPTION,
	FILTER_AGE_PUPPY_ADOPTION,
	FILTER_AGE_YOUNG_ADOPTION,
	FILTER_AGE_ADULT_ADOPTION,
	FILTER_SIZE_SMALL_ADOPTION,
	FILTER_SIZE_MEDIUM_ADOPTION,
	FILTER_SIZE_BIG_ADOPTION,
	FILTER_BY_SEARCH_AREA_ADOPTION,
	FILTER_CATS_LOST,
	FILTER_DOGS_LOST,
	FILTER_LOST_SEX,
	FILTER_LOST_AGE,
	FILTER_LOST_SIZE,
	FILTER_LOST_SEARCH_AREA,
	GET_ALL_PRODUCTS,
	GET_PRODUCT_DETAIL,
	SHOP_SEARCH_INPUT_NAME,
	SHOP_FILTER_VALUE,
	NEXT_PAGE,
	PREV_PAGE,
	ACTUAL_PAGE,
	GET_VETERINARIES,
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
	actualPage: 1,
	allVets: [],
};

const RootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_PETS:
			return {
				...state,
				allPets: action.payload,
				pets: action.payload,
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
		case POST_USER:
			return {
				...state,
			};
		case FILTER_CATS_ADOPTION:
			return {
				...state,
				pets: state.pets.filter((pet) => pet.species === action.payload),
				actualPage: 1,
			};
		case FILTER_DOGS_ADOPTION:
			return {
				...state,
				pets: state.pets.filter((pet) => pet.species === action.payload),
				actualPage: 1,
			};
		case FILTER_SEX_FEMALE_ADOPTION:
			return {
				...state,
				pets: state.pets.filter((pet) => pet.sex === action.payload),
				actualPage: 1,
			};
		case FILTER_SEX_MALE_ADOPTION:
			return {
				...state,
				pets: state.pets.filter((pet) => pet.sex === action.payload),
				actualPage: 1,
			};
		case FILTER_AGE_PUPPY_ADOPTION:
			return {
				...state,
				pets: state.pets.filter((pet) => pet.age === action.payload),
				actualPage: 1,
			};
		case FILTER_AGE_YOUNG_ADOPTION:
			return {
				...state,
				pets: state.pets.filter((pet) => pet.age === action.payload),
				actualPage: 1,
			};
		case FILTER_AGE_ADULT_ADOPTION:
			return {
				...state,
				pets: state.pets.filter((pet) => pet.age === action.payload),
				actualPage: 1,
			};
		case FILTER_SIZE_SMALL_ADOPTION:
			return {
				...state,
				pets: state.pets.filter((pet) => pet.size === action.payload),
				actualPage: 1,
			};
		case FILTER_SIZE_MEDIUM_ADOPTION:
			return {
				...state,
				pets: state.pets.filter((pet) => pet.size === action.payload),
				actualPage: 1,
			};
		case FILTER_SIZE_BIG_ADOPTION:
			return {
				...state,
				pets: state.pets.filter((pet) => pet.size === action.payload),
				actualPage: 1,
			};
		case FILTER_BY_SEARCH_AREA_ADOPTION:
			return {
				...state,
				pets: state.pets.filter((pet) =>
					pet.area.toLowerCase().includes(action.payload.toLowerCase())
				),
				actualPage: 1,
			};
		case FILTER_CATS_LOST:
			return {
				...state,
				pets: state.pets.filter((pet) => pet.species === action.payload),
				actualPage: 1,
			};
		case FILTER_DOGS_LOST:
			return {
				...state,
				pets: state.pets.filter((pet) => pet.species === action.payload),
				actualPage: 1,
			};
		case FILTER_LOST_SEX:
			return {
				...state,
				pets: state.pets.filter((pet) => pet.sex === action.payload),
				actualPage: 1,
			};
		case FILTER_LOST_AGE:
			return {
				...state,
				pets: state.pets.filter((pet) => pet.age === action.payload),
				actualPage: 1,
			};
		case FILTER_LOST_SIZE:
			return {
				...state,
				pets: state.pets.filter((pet) => pet.size === action.payload),
				actualPage: 1,
			};
		case GET_ALL_PRODUCTS:
			return {
				...state,
				allProducts: action.payload,
				products: action.payload,
			};
		case GET_PRODUCT_DETAIL:
			console.log("DENTRO DE REDUCER", action.payload);
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
		case FILTER_LOST_SEARCH_AREA:
			return {
				...state,
				pets: state.lostPets.filter((pet) =>
					pet.area.toLowerCase().includes(action.payload.toLowerCase())
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

		default:
			return state;
	}
};

export default RootReducer;
