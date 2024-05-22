import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        setError("");
        const response = await axios.get(`api/product?search=${input}`, {
          signal: controller.signal,
        });
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          return;
        }
        setError(error.message);
        setLoading(false);
      }
    })();
    // Clean up code
    return () => {
      controller.abort();
    };
  }, [input, setProduct]);

  // const [product, error, loading] = customReactQuery(
  //   `api/product?search=${input}`
  // );

  return (
    <>
      <h1>
        PRODUCTS <span>{product.length}</span>
      </h1>
      <span>
        <label htmlFor="items">Search</label> &nbsp;
        <input
          type="search"
          id="items"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </span>
      {error && <h2>{error}</h2>}
      <div>
        {loading ? (
          <h2>Loading ......</h2>
        ) : (
          product.map((product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default App;

// const customReactQuery = (urlPath) => {
//   const [product, setProduct] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     (async () => {
//       try {
//         setLoading(true);
//         setError("");
//         const response = await axios.get(urlPath);
//         setProduct(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     })();
//   }, [setProduct, setError]);

//   return [product, error, loading];
// };
