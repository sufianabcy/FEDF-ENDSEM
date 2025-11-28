import { useState } from "react";

export default function Form() {
  const [ProductID, SetProductID] = useState("");
  const [ProductName, SetProductName] = useState("");
  const [ProductCost, SetProductCost] = useState("");
  const [products, setProducts] = useState([]);
  function handlePID(e) {
    SetProductID(e.target.value);
  }
  function handlePN(e) {
    SetProductName(e.target.value);
  }
  function handlePC(e) {
    SetProductCost(e.target.value);
  }
  function printTable(e) {
    e.preventDefault();
    const newProduct = { id: ProductID, name: ProductName, cost: ProductCost };
    setProducts([...products, newProduct]);
    SetProductID("");
    SetProductName("");
    SetProductCost("");
  }

  return (
    <div>
        <div>Product ID:
      <input
        onChange={handlePID}
        type="text"
        value={ProductID}
        placeholder="Enter the Product ID"
      />
      </div>

      <div>Product Name:
      <input
        onChange={handlePN}
        type="text"
        value={ProductName}
        placeholder="Enter the Product Name"
      />
      </div>

      <div>Product Cost:
      <input
        onChange={handlePC}
        type="number"
        value={ProductCost}
        placeholder="Enter the Product Cost"
      />
    </div>
      <button onClick={printTable} type="submit">
        SUBMIT
      </button>
      <table border="2">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Cost</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
