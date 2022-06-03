import { useEffect, useState } from 'react';

const URL = 'http://localhost:5000/';

interface IData {
  id: number;
  name: string;
  age: number;
  city: string;
}

/**
 * Escape an untrusted string to be used as a SQL value. Use this on user
 * provided data.
 */
export const Main = () => {
  const [data, setData] = useState<Array<IData>>();

  useEffect(() => {
    (async() => (
      await fetch(URL)
        .then(res => res.json())
        .then(d => {
          console.log(d.data);

          setData(d.data);
        })
    ))();
  }, []);

  console.log({data})

  return (
    <div>
      {!!data ? data?.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <h2>{item.age}</h2>
          <h2>{item.city}</h2>
          <span>-----------------</span>
        </div>
      )) : ( <h1>Loading data...</h1> )}
    </div>
  );
}
