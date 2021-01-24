import styled from 'styled-components';

export const SearchFormStyle = styled.form`
	background-color: rgba(0, 0, 0, 0.2);
	position: relative;
	color: #ececec;
	border-radius: 5rem;
	outline: 0;

	input {
		background-color: transparent;
		border: 0;
		padding: 1rem 4rem 1rem 1.5rem;
		font-family: inherit;
		font-size: 1.6rem;
		width: 30rem;
		color: inherit;
		outline: 0;

		&::placeholder {
			color: inherit;
			opacity: 0.5;
		}
	}

	button {
		background-color: transparent;
		border: 0;
		position: absolute;
		top: 50%;
		right: 1rem;
		transform: translateY(-50%);
		font-size: 1.6rem;
		cursor: pointer;
		color: inherit;
		height: 100%;
	}
`;
