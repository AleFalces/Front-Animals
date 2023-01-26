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
} from "../ActionTypes";

const initialState = {
  allPets: [],
  adoptionPets: [],
  lostPets: [],
  pets: [],
  Detail: {},
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
        pets: state.adoptionPets.filter(
          (pet) => pet.species === action.payload
        ),
      };
    case FILTER_DOGS_ADOPTION:
      return {
        ...state,
        pets: state.adoptionPets.filter(
          (pet) => pet.species === action.payload
        ),
      };
    case FILTER_SEX_FEMALE_ADOPTION:
      return {
        ...state,
        pets: state.adoptionPets.filter((pet) => pet.sex === action.payload),
      };
    case FILTER_SEX_MALE_ADOPTION:
      return {
        ...state,
        pets: state.adoptionPets.filter((pet) => pet.sex === action.payload),
      };
    case FILTER_AGE_PUPPY_ADOPTION:
      return {
        ...state,
        pets: state.adoptionPets.filter((pet) => pet.age === action.payload),
      };
    case FILTER_AGE_YOUNG_ADOPTION:
      return {
        ...state,
        pets: state.adoptionPets.filter((pet) => pet.age === action.payload),
      };
    case FILTER_AGE_ADULT_ADOPTION:
      return {
        ...state,
        pets: state.adoptionPets.filter((pet) => pet.age === action.payload),
      };
    case FILTER_SIZE_SMALL_ADOPTION:
      return {
        ...state,
        pets: state.adoptionPets.filter((pet) => pet.size === action.payload),
      };
    case FILTER_SIZE_MEDIUM_ADOPTION:
      return {
        ...state,
        pets: state.adoptionPets.filter((pet) => pet.size === action.payload),
      };
    case FILTER_SIZE_BIG_ADOPTION:
      return {
        ...state,
        pets: state.adoptionPets.filter((pet) => pet.size === action.payload),
      };
    case FILTER_BY_SEARCH_AREA_ADOPTION:
      return {
        ...state,
        pets: state.adoptionPets.filter((pet) =>
          pet.area.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case FILTER_CATS_LOST:
      return {
        ...state,
        pets: state.lostPets.filter((pet) => pet.species === action.payload),
      };
    case FILTER_DOGS_LOST:
      return {
        ...state,
        pets: state.lostPets.filter((pet) => pet.species === action.payload),
      };
    case FILTER_LOST_SEX:
      return {
        ...state,
        pets: state.lostPets.filter((pet) => pet.sex === action.payload),
      };
    case FILTER_LOST_AGE:
      return {
        ...state,
        pets: state.lostPets.filter((pet) => pet.age === action.payload),
      };
    case FILTER_LOST_SIZE:
      return {
        ...state,
        pets: state.lostPets.filter((pet) => pet.size === action.payload),
      };
    default:
      return state;
  }
};

export default RootReducer;
