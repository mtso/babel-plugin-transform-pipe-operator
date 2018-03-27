const Shout = ({ name }) => {
  return <div>YO, {name | toUpperCase}!</div>;
};