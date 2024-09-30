import { FaStar } from "react-icons/fa";
import './Ratings.scss';


const Ratings = ({rating}) => {
    const elements = [];

    for(let i = 1; i <= 5; i++) {
        if(i <= Math.round(rating.rate)) {
            elements.push(<FaStar className='star-filled' />);
        } else {
            elements.push(<FaStar className='star-unfilled' />);

        }
    }
    
    return(
        <>
            {elements}
        </>
    )
}

export default Ratings;