import { OrangeText } from "../components/OrangeText";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { goToTripForm } from "../routes/coordinator";
import { getTrips } from "../services/getTrips";

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

const TripBox = styled.div`
  width: 140px;
  height: 100px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid;
  border-radius: 4px;
  border-color: rgb(0, 0, 0, 0.2);
  :hover {
    border-color: #fac710;
    background-color: #fac710;
  }
`;

export const ListTripsPage = () => {
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const loadTrips = async () => {
      try {
        const tripList = await getTrips(token);
        setTrips(tripList.trips);
      } catch (e) {
        alert(e.response);
      }
    };
    loadTrips();
  }, []);

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
          {trips.map((trip) => {
            return (
              <TripBox
                onClick={() => goToTripForm(navigate, trip.id)}
                key={trip.id}
              >
                {trip.name}
              </TripBox>
            );
          })}
        </TripsCardGrid>
      </TripsDiv>
    </div>
  );
};
