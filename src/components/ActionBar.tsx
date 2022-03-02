import { ActionBarStyle } from '../styles/components/ActionBarStyles';
import GeoLocationButton from './GeoLocationButton';
import DarkModeButton from './DarkModeButton';
import ChangeLang from './ChangeLang';

const ActionBar = () => (
  <ActionBarStyle>
    <GeoLocationButton />
    <DarkModeButton />
    <ChangeLang />
  </ActionBarStyle>
);

export default ActionBar;
