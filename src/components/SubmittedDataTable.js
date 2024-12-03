import React from "react";

const SubmittedDataTable = ({ data }) => {
  return (
    <div>
      <h2>Submitted Data</h2>
      <table>
        <thead>
          <tr>
            {Object.keys(data).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.values(data).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SubmittedDataTable;
