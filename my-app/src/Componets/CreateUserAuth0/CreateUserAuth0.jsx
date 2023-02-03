import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postUser } from "../../Redux/Actions";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export default function CreateUserAuth0() {
	const dispatch = useDispatch();
	const { user, isAuthenticated } = useAuth0();
	const navegate = useNavigate();

	const [logUser, setlogUser] = useState([]);

	const [input, setInput] = useState({
		name: "",
		surname: "",
		email: "",
		username: "",
		phone: "123456789",
		password: "123456789",
		role: "user",
	});

	const CheckUser = async () => {
		try {
			let login = await axios.post("http://localhost:3001/loginAuth0", user);
			let response = login.data;
			let guardado = localStorage.setItem(
				"loggedUser",
				JSON.stringify(response)
			);
			setlogUser(guardado);
			navegate("/home");
		} catch (error) {
			return handlerSubmit();
		}
	};

	const handlerSubmit = () => {
		dispatch(postUser(input));
		localStorage.setItem("loggedUser", JSON.stringify(input));
	};

	if (user && !input?.email) {
		setInput({
			...input,
			name: user?.given_name,
			surname: user?.family_name,
			email: user?.email,
			username: user?.nickname,
			phone: "123456789",
			password: "123456789",
			role: "user",
			status: "active",
		});
	}
	if ((user && logUser.length <= 0) || user || logUser.length <= 0) {
		CheckUser();
	}
	console.log(user, input);
	return <div>{!user ? <h1>Estamos comprobando sus datos</h1> : <div />}</div>;
}
