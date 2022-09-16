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
        <Screen className={"w-full h-28 text-6xl bg-transparent text-right p-3 overflow-x-auto scroll"} value={0}/>
        Area for button
        </div>
    </Bounce>
    </> );
}
 
export default Scicalculator;