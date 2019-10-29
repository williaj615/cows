import 'bootstrap';
import '../styles/main.scss';
import cowList from '../javascripts/components/cowList/cowList';
import farmerList from './components/farmerList/farmerList';

console.error('hi');

const init = () => {
  cowList.buildCows();
  farmerList.buildFarmers();
}

init();
