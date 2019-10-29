import './cowList.scss';
import cowData from '../../helpers/data/cows';

const buildCows = () => {
    cowData.getCows()
    .then((response) => {
        console.log('cow array from cowList', response)
    }).catch((error) => {
        console.error('it broke', error);
    });
};
// remember cowId represents an individual thing in demCows
export default { buildCows }
