// import {getData} from "../../API";

import { useState, useEffect } from "react";


function Dashboard() {
  const [data, setData] = useState(0);

  // useEffect(() => {
  //   getData().then((res) => {
  //     setData(res.total);
  // 
  //   });
  // }, []);

  return (
    <div>
      Dashboard
    </div>
  );
}

export default Dashboard;
