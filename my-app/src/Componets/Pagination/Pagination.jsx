import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActualPage, Next, Prev } from "../../Redux/Actions/index";
import { SimpleGrid,Box, Button, Icon, Center } from '@chakra-ui/react'
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import "./Pagination.css";


const Pagination = ({ PetPerPage, pets }) => {
	const dispatch = useDispatch();
	const activePage = useSelector((state) => state.actualPage);
	let pages = [];
	for (let i = 1; i <= Math.ceil(pets.length / PetPerPage); i++) {
		pages.push(i);
	}


	return (
		<>
		

			<SimpleGrid columns= {[1, 1 ,1]} spacing={'15px'}>
			<Center>
				<ul /* className="Pages" */>
					<Button w={[ '2rem','2rem','5rem']} mx='1rem'
						onClick={() => dispatch(Prev(activePage))}
						hidden={activePage <= 1 ? true : false}
						className={"button"}>
						<Icon
							as={MdArrowBackIosNew}
							color="orange.400"
							boxSize={5}
							_hover={{
								color: "grey",
								boxSize: "3",
							}}
						/>
					</Button>
					{pages.map((el) => (
						<Button mx='0.2rem'
							className={`li ${activePage === el ? "activePage" : ""}`}
							onClick={() => {
								dispatch(ActualPage(el));
							}}
							key={el}>
							{el}
						</Button>
					))}
					<Button w={[ '2rem','2rem','5rem']} mx='1rem'

						onClick={() => dispatch(Next(activePage))}
						hidden={activePage >= pages.length ? true : false}>
						<Icon
							as={MdArrowForwardIos}
							color="orange.400"
							boxSize={5}
							_hover={{
								color: "grey",
								boxSize: "3",
							}}
						/>

					</Button>
				</ul>
				</Center>
			</SimpleGrid>
			
		</>
	);
};

export default Pagination;






