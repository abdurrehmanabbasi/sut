import Dashboard from "./Pages/Dashboard.jsx";
import Calculator from "./Pages/Calculator.jsx";
import Scicalculator from "./Pages/Scicalculator.jsx";
import Uconverter from "./Pages/Uconverter.jsx"
import Stopwatch from "./Pages/Stopwatch.jsx";
import Tictoe from "./Pages/Tictoe.jsx";
import Cconverter from "./Pages/Cconverter.jsx"
import Image from "./Pages/Image.jsx";

export const apps=[
    { icon: "", url: "/", name: "Apps",element: <Dashboard /> },
    { icon: "images/calc.png", url: "/calculator", name: "Calculator" ,element:<Calculator/>},
    { icon: "images/scalc.png", url: "/scalculator", name: "Scientific Calculator",element:<Scicalculator/> },
    { icon: "images/uconverter.png", url: "/uconverter", name: "Units Converter",element:<Uconverter/> },
    { icon: "images/cc.png", url: "/cconverter", name: "Currency Converter",element:<Cconverter/> },
    { icon: "images/stopwatch.png", url: "/stopwatch", name: "Stopwatch" ,element:<Stopwatch/>},
    { icon: "images/tictoe.png", url: "/tictoe", name: "Tie Toe",element:<Tictoe/> },
    { icon: "images/imageview.png", url: "/imageview", name: "Image Viewer",element:<Image /> },
  ];

export const themes= [
    { background: "bg-gradient-to-r from-yellow-200 to-green-300", text: "text-white" },
    { background: "bg-gradient-to-r from-yellow-200 to-yellow-700", text: "text-black" },
    { background: "bg-gradient-to-r from-green-200 to-blue-700", text: "text-white" },
    { background: "bg-gradient-to-r from-yellow-200 to-red-700", text: "text-white" },
  ];