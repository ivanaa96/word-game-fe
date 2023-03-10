import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	@media (max-width: 400px) {
		padding: 0 10px;
	}
	@media (max-width: 991px) {
		padding: 0 30px;
	}
	@media (min-width: 1500px) {
		max-width: 1500px;
	}
	@media (min-width: 1800px) {
		max-width: 1800px;
		padding: 0 30px;
	}
`;

export const Title = styled.h2`
	text-align: center;
	padding: 0 50px;
	width: 100%;
	color: #9274a6;
`;

export const Button = styled.button`
	width: 100px;
	border-radius: 5px;
	background-color: #e1ceed;
	padding: 10px 28px;
	margin: 15px 0;
	font-size: 14px;
	cursor: pointer;
	border: none;
	transition: all 0.5s ease;
	&:hover {
		background-color: #9274a6;
		transform: translateY(-0.5rem) scale(1.02);
		color: #f9f7fa;
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 300px;
	height: 150px;
	background-color: #d3c5db;
	border-radius: 5px;
	padding: 20px 10px 0px 20px;
`;

export const Label = styled.label`
	margin: 10px 0 10px 0;
	font-size: 16px;
	width: 50%;
`;

export const Input = styled.input`
	width: 250px;
	padding: 10px 0;
	border-radius: 5px;
`;

export const Errors = styled.div`
	margin-top: 12px;
	color: red;
	font-weight: 600;
`;

export const Points = styled.div`
	margin-top: 12px;
	font-weight: 600;
`;

export const GameDescription = styled.div`
	width: 300px;
	text-align: left;
	font-size: 14px;
	margin: 10px 0 10px 0;
	font-style: italic;
`;

export const GameDescriptionTitle = styled.h3`
	width: 100%;
	font-style: italic;
`;
