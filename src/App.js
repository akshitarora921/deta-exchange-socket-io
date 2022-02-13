import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.delta.exchange/v2/products")
      .then((res) => res.json())
      .then((res) => setData(res.result))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);

  return (
    <div>
      <h1>Delta-Exhange socket-io</h1>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Description</th>
            <th>Symbol</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((data) => (
              <tr>
                <td>{data.symbol}</td>
                <td>{data.description}</td>
                <td>{data.underlying_asset.symbol}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
