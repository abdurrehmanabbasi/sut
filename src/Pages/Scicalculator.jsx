import { Bounce } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet';
import Screen from '../Components/Screen.jsx'
const Scicalculator = () => {
    return ( <>
    <Helmet>
        <title>Scientific Calculator</title>
    </Helmet>
    <Bounce>
        {/*Wrapper for Calculator*/}
        <div className='flex'>
        <Screen value={0}/>
        </div>
    </Bounce>
    </> );
}
 
export default Scicalculator;