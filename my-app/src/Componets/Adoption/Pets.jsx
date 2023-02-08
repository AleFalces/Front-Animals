import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import FilterBar from "./FilterBar";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import { getPets } from "../../Redux/Actions/index";
import { Link } from "react-router-dom";
import { SimpleGrid, Box, Stack, Center, Icon, Text } from "@chakra-ui/react";
import { SiDatadog } from "react-icons/si";
import Pagination from "../Pagination/Pagination";

const Adoption = ({ value }) => {
	const pets = useSelector((state) => state.pets);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getPets(value));
		setCurrentPage(1);
	}, [dispatch, value]);

	const [currentPage, setCurrentPage] = useState(1);
	const [petsPerPage, setPetsPerPage] = useState(3);
	const indexOfLastPet = currentPage * petsPerPage;
	const indexOfFirstPet = indexOfLastPet - petsPerPage;
	const currentPets = pets.slice(indexOfFirstPet, indexOfLastPet);
	const paginate = (number) => {
		setCurrentPage(number);
	};

	return (
		<>
			<Navbar />

			<FilterBar value={value} paginate={paginate} />

			<Box my="1rem">
				<Pagination
					paginate={paginate}
					petsPerPage={petsPerPage}
					allPets={pets.length}
					currentPage={currentPage}
				/>
			</Box>
			<Center>
				<SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>
					{!pets?.length ? (
						<Center>
							<Stack direction="row">
								<Box bg="purple.100">
									<Text px="4rem" fontFamily={"body"}>
										No hay mascotas en tu área
									</Text>
									<Icon boxSize={120} w="100px" as={SiDatadog}></Icon>
								</Box>
							</Stack>
						</Center>
					) : (
						currentPets?.map((el) => (
							<Link to={`/pets/${el?.id}`} key={el?.id}>
								<Card data={el} />
							</Link>
						))
					)}
				</SimpleGrid>
			</Center>
			<Footer />
		</>
	);
};

export default Adoption;
