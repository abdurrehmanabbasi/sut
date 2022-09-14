import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { apps , themes } from "./settings.js";
import Header from "./Components/Header.jsx";

function App() {
  const [theme, setTheme] = useState(0);
  
  function handleTheme() {
    console.log(themes.length)
    theme < themes.length-1 ? setTheme(c=> c+1 ):setTheme(0)
  }

  return (
    <div className={ `${themes[theme].background} ${themes[theme].text} min-h-screen `}>
      <div className="lg:w-3/4 h-sreen m-auto">
        <Routes>
          {apps.map((app,i)=>(
          <Route key={i} path={`${app.url}`} element={<> <Header title={app.name} backbutton={app.url!=='/'} handleTheme={handleTheme}/>{app.element} </>} />
          ))}

          
        </Routes>
      </div>
    </div>
  );
}

export default App;
