export const TripCard = (props) => {
  return (
    <div>
      <img alt={props.alt} src={props.src} />
      <p>{props.text}</p>
    </div>
  );
};
