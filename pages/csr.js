// client side rendering

import { useEffect, useState } from "react";
import { MY_API_URL } from "../lib/api";

export default function ClientSiteRendered() {
  const [myData, setMyData] = useState([]);

  async function getData() {
    const res = await fetch(MY_API_URL);
    const data = await res.json();
    setMyData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {myData.map((e) => (
        <h2 key={e.id}>{e.name}</h2>
      ))}
    </>
  );
}
