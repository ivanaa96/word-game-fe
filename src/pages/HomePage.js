import React, { useState } from "react";
import WordService from "../service/WordService";
import {
	Container,
	Title,
	Button,
	Form,
	Label,
	Input,
	Errors,
	GameDescription,
	Points,
	GameDescriptionTitle,
} from "../styles/global";

function HomePage() {
	const [word, setWord] = useState("");
	const [errors, setErrors] = useState([]);
	const [points, setPoints] = useState();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrors([]);
		setPoints();
		const data = await WordService.getPoints(word);
		if (data.points) setPoints(data.points);
		if (data.error) setErrors(data.error);
	};

	return (
		<Container>
			<Title>Word Game</Title>
			<GameDescription>
				<GameDescriptionTitle>Rules for points:</GameDescriptionTitle>
				- You get 1 point for each unique letter. <br />
				- You get 3 extra points if the word is a palindrome. <br />- You get 2
				extra points if the word is “almost palindrome” - if by removing at most
				one letter from the word, the word will be a true palindrome.
			</GameDescription>
			<Form onSubmit={handleSubmit}>
				<Label htmlFor="word">Enter a word:</Label>
				<Input
					id="word"
					name="word"
					type="text"
					placeholder="Enter a word..."
					value={word}
					onChange={({ target }) => setWord(target.value)}
				/>
				<Button>Check</Button>
				{errors && <Errors>{errors}</Errors>}
				{points && <Points>You get {points} points for this word!</Points>}
			</Form>
		</Container>
	);
}

export default HomePage;
