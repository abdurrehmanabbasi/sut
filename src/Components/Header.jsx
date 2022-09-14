import { Link } from "react-router-dom";
import Clock from "./Clock";
const Header = ({backbutton,title,handleTheme}) => {
    return ( 
        <>
        
        <nav className="flex justify-around bg-opacity-80 bg-black border-b-2 border-l-2 border-r-2 rounded-b-full">
            {backbutton?<Link to="/" className="text-white  p-4 text-2xl"> {String.fromCharCode('8592')} </Link>:''}
            <h2 className="text-white text-3xl p-4">{title}</h2>
            <div className="p-4 font-mono text-2xl text-green-500"><Clock/></div>
            <button onClick={handleTheme} className="text-white p-4 text-2xl"> {String.fromCharCode('9965')}</button>
        </nav>
        </>
     );
}
 
export default Header;