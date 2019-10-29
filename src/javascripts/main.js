import 'bootstrap';
import '../styles/main.scss';
import cowList from '../javascripts/components/cowList/cowList';

console.error('hi');

const init = () => {
  cowList.buildCows();
}

init();
