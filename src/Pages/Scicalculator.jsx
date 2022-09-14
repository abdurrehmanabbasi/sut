import { Bounce } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet';
const Scicalculator = () => {
    return ( <>
    <Helmet>
        <title>Scientific Calculator</title>
    </Helmet>
    <Bounce>
        {/*Wrapper for Calculator*/}
        <div className='flex'>
        Scientific Calculator
        </div>
    </Bounce>
    </> );
}
 
export default Scicalculator;