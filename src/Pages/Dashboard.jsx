import { Link } from "react-router-dom";
import  {Bounce} from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import { apps } from "../settings";
const Dashboard = () => {
  return (
    <>
    <Helmet>
      <title>Apps</title>
    </Helmet>
    <Bounce>
      <div className="flex flex-wrap items-center justify-center ">
        {apps.map((app,i)=>
        app.url==='/'
        ?''
        :
        <Link to={app.url} className="flex flex-col items-center w-1/4 p-3" key={i}>
            <img src={app.icon} alt="" className="h-44 transition ease-in duration-400 hover:p-3"/>
            <h3>{app.name}</h3>
        </Link>
        )}
      </div>
      </Bounce>
    </>
  );
};

export default Dashboard;
