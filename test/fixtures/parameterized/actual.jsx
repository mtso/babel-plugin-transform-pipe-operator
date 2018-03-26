const Cell = ({ value }) => {
  return (
    <td>{ value | toFixed:2 }</td>
  )
};
