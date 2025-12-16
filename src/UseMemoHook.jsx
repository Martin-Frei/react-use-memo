import React, { useState, useMemo } from "react";

export default function UseMemoHook() {
  //  useMemo = it remembers the  result of a function  between  re-renders
  // it only  recomputes the memoized value when one of its dependencies change

const [count, setCount] = useState(0);
const [search, setSearch] = useState("");
const products = ['cake','pizza','burger','fries','pasta','biryani','samosa'];
const filetered = useMemo(() => {
    console.log("filtering products");
    return products.filter((p) => {
        return p.toLowerCase().includes(search.toLowerCase());
    })
}, [search]);


//   const heavyCalculation = (num) => {
//     console.log("heavy calculation");
//     let total = 0;
//     for (let i = 0; i < 1000000000; i++) {
//       total += i;
//     }
//     return total;
//  };


// const heavyResult = useMemo(() => {
//     console.log("heavy calculation running only onces ");
//     let total = 0;
//     for (let i = 0; i < 1000000000; i++) {
//       total += i;
//     }
//     return total;

// },[])



//   const result = heavyCalculation();

  return (
    <div>


        <input type="text" placeholder="Search here...." value={search} onChange={(e) => setSearch(e.target.value)}/>
        <ul>
            {filetered.map((p,index) => (
                <li key={index}>{p}</li>
            ))}
        </ul>
        {/* <h2>Result: {heavyResult}</h2> */}
      <button
        className="p-2 bg-red-300 border-red-500"
        onClick={() => setCount((count) => count + 1)}
      >
        Count {count}
      </button>


    </div>
  );
}
