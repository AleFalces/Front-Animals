
import React from "react";
import { SimpleGrid, Button, Icon, Center } from '@chakra-ui/react'
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import "./Pagination.css";


const Pagination = ({ petsPerPage, allPets, paginate, currentPage }) => {
	let pageNumbers = [];
	for (let i = 1; i <= Math.ceil(allPets / petsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<>
			<SimpleGrid columns= {[1, 1 ,1]} spacing={'15px'}>
			<Center>
				<ul>
					<Button w={[ '2rem','2rem','5rem']} mx='1rem'
						onClick={()=>{paginate(currentPage - 1)}}
						hidden={currentPage <= 1 ? true : false}
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
					{pageNumbers.map((number) => (
						<Button mx='0.2rem'
							className={`li ${currentPage === number ? "activePage" : ""}`}
							onClick={()=>{paginate(number)}}
							key={number}>
							{number}
						</Button>
					))}
					<Button w={[ '2rem','2rem','5rem']} mx='1rem'
						onClick={()=>{paginate(currentPage + 1)}}
						hidden={currentPage >= pageNumbers.length ? true : false}>
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