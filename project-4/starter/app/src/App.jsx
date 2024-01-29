import { useEffect, useRef, useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Cards } from "./components/card/Cards";
import { Loading } from "./components/Loading/Loading";

import styled from "styled-components";

const App = () => {
  let [data, setData] = useState([]);
  let [error, SetError] = useState(null);
  let [loading, setLoading] = useState(true);

  let [filteredData, setFilterData] = useState(null);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;

    try {
      fetch("http://localhost:9000", signal)
        .then((response) => response.json())
        .then((data) =>  setFilterData(data) ,setData(data));
    } catch (error) {
      SetError("unable to fetch the data");
    } finally {
      
      setLoading(false);
    }

    return () => {
      controller.abort();
      console.log("aborted");
    };
  }, []);

  return (
    <>
      <Navbar setFilterData={setFilterData} data={data}></Navbar>
      {loading ? <Loading></Loading> : <Cards data={filteredData}></Cards>}
    </>
  );
};

export default App;
