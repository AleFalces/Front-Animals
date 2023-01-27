import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActualPage, Next, Prev } from "../../Redux/Actions/index";
import "./Pagination.css";
const Pagination = ({ PetPerPage, pets }) => {
	const dispatch = useDispatch();
	const activePage = useSelector((state) => state.actualPage);
	let pages = [];
	for (let i = 1; i <= Math.ceil(pets.length / PetPerPage); i++) {
		pages.push(i);
	}
	console.log(pages);
	return (
		<>
			<ul className="Pages">
				<button
					onClick={() => dispatch(Prev(activePage))}
					hidden={activePage <= 1 ? true : false}
					className={"button"}>
					🡸
				</button>
				{pages.map((el) => (
					<button
						className={`li ${activePage === el ? "activePage" : ""}`}
						onClick={() => {
							dispatch(ActualPage(el));
						}}
						key={el}>
						{el}
					</button>
				))}
				<button
					onClick={() => dispatch(Next(activePage))}
					hidden={activePage >= pages.length ? true : false}>
					🡺
				</button>
			</ul>
		</>
	);
};

export default Pagination;
