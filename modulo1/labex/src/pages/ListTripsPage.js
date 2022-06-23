import { OrangeText } from "../components/OrangeText";
import { useState } from "react";
import { TripCard } from "../components/TripCard";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";

const TripsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TripsCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

export const ListTripsPage = () => {
  const [trips, setTrips] = useState([
    <TripCard
      alt="Random"
      src="https://picsum.photos/150
    "
      text="Random"
    />,
    <TripCard
      alt="Random2"
      src="https://picsum.photos/150
    "
      text="Random 2"
    />,
    <TripCard
      alt="Random3"
      src="https://picsum.photos/150
    "
      text="Random 3"
    />,
  ]);

  return (
    <div>
      <Link to="/">
        <Header />
      </Link>
      <TripsDiv>
        <h1>
          Viagens <OrangeText name="Labex" />
        </h1>
        <TripsCardGrid>
          {trips.map((trip) => (
            <Link to={`${trip.props.alt}`}>
              <div>{trip}</div>
            </Link>
          ))}
        </TripsCardGrid>
      </TripsDiv>
    </div>
  );
};
