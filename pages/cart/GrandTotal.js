const GrandTotal = ({ name, quantity,line_total }) => {
  return (
    <p>
      {name} <span>{line_total} </span>
    </p>
  );
};
export default GrandTotal;
