import { FC } from 'react';
import styles from './header.module.scss';
import Form from '../Form/Form';
import ChangeLang from '../ChangeLang';

const Header: FC = () => (
	<header className={styles.header}>
		<div className="container flex flex-ai:center flex-jc:center">
			<Form />

			<div>
				<ChangeLang />
			</div>
		</div>
	</header>
);

export default Header;
