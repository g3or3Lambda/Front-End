import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { useForm } from "../hooks/useForm";

const Form = styled.form`
	box-sizing: border-box;
	width: 100%;
	font-family: Original Surfer, sans-serif;
	font-size: 1.5rem;
	color: black;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-bottom: 20px;
	margin: auto auto;

	.btn-submit {
		margin-top: 20px;
		margin-left: 20px;
		border: 2px solid red;
		font-size: 1rem;
	}

	.btn-submit:hover {
		background-color: black;
		color: white;
	}
`;

const initialFormValues = {
	id: "",
	nickname: "",
	species: "",
	h2ofrequency: "",
};

function PlantForm() {
	const [formVals, handleChange, clearForm] = useForm(initialFormValues);

	const { push } = useHistory();

	const handleClick = (e) => {
		clearForm();
		push("/dashboard");
	};

	return (
		<Form>
			<div className="container form inputs">
				<label>
					Id
					<input
						type="text"
						value={formVals.id}
						onChange={(handleChange, clearForm)}
						name="id"
						placeholder="please enter ID here"
					/>
				</label>

				<label>
					Nickname
					<input
						type="text"
						value={formVals.nickname}
						onChange={(handleChange, clearForm)}
						name="nickname"
						placeholder="type a nickname here"
					/>
				</label>

				<label>
					Species
					<input
						type="text"
						value={formVals.species}
						onChange={(handleChange, clearForm)}
						name="species"
						placeholder="input species here"
					/>
				</label>

				<label>
					H20 Frequency
					<input
						type="text"
						value={formVals.h2ofrequency}
						onChange={(handleChange, clearForm)}
						name="h2ofrequency"
						placeholder="input frequency here"
					/>
				</label>

				<div className="submit">
					<button className="btn-submit">Submit</button>
					<button
						type="button"
						onClick={handleClick}
						className="btn-submit"
					>
						Cancel
					</button>
				</div>
			</div>
		</Form>
	);
}

export default PlantForm;
