import { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Form = () => {
	const history = useHistory();

	const [inputCity, setInputCity] = useState('');
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		history.push(`/${inputCity.toLowerCase()}`);
	};

	const handleInputCity = (e: ChangeEvent<HTMLInputElement>) => setInputCity(e.target.value);

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" placeholder="City" onChange={handleInputCity} value={inputCity} />
		</form>
	);
};

export default Form;
