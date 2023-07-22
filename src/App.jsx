import React from "react";

import Netflix from "./Netflix";
import Amazon from "./Amazon";

const favSeries = "netflix";

// const FavS = () => {
//     if (favSeries === "netflix"){
//        return < Netflix />  
// }else {
//         return <Amazon />
//     }
// };
const App =  () => (
    <>
      <h1>List of top 5 Series of Netflix</h1>
        {/* <FavS /> */}
        {favSeries === "netflix" ? <Netflix /> :Amazon}
    </>
  );
export default App;
