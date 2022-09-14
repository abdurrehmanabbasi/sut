import Screen from "../Components/Screen";
import Button from "../Components/Button";
import { useState } from "react";
import { Bounce } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
const Calculator = () => {
  
  const btnValues = [
    ["C","X","(",")","%","/"],
    [7, 8, 9,"*"],
    [4, 5, 6, "+"],
    [1, 2, 3, "-"],
    [0, ".", "="],
  ];
  const [calc,setCalc]=useState('0');
  function digitHandler(e) {
    calc==="0"
    ?setCalc(e.target.innerHTML)
    :setCalc(calc+e.target.innerHTML)
  }
  function resetHandler() {
    setCalc('0')
  }
  function resultHandler() {
    let res=eval(calc)
    setCalc(res.toString())
  }
  function backspaceHandler() {
    let newCalc=calc.slice(0,-1)
    setCalc(newCalc)
  }
  return (
    <>
    <Helmet>
      <title>Calculator</title>
    </Helmet>

<Bounce>

    <div className="flex flex-col items-center">
      <Screen
        className={"w-full h-28 text-6xl bg-transparent text-right p-3 overflow-x-auto scroll"}
        value={calc}
      />
      <div className="w-full grid grid-cols-7 gap-0 ">
        {btnValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={`${
                 btn==="C"
                  ? 'bg-yellow-500 col-span-2'
                  : btn==="X"
                  ? 'bg-red-600 col-span-1'
                  : Number.isInteger(btn) || btn==='.'
                  ? "bg-white text-black col-span-2 "
                  : btn ==='='
                  ? 'col-span-3 bg-purple-600'
                  :'bg-blue-500'
              } h-28 text-2xl m-1 rounded-full hover:opacity-75`}
              
              value={btn}

              onClick={
                btn==="C"
                ?resetHandler
                :btn==="="
                ?resultHandler
                :btn==="X"
                ?backspaceHandler
                :digitHandler

              }
            />
          );
        })}
      </div>
    </div>
    </Bounce>
    </>
  );
};

export default Calculator;
