import { Header } from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { MainButton } from "../components/MainButton";
import {
  goToCreateTripPage,
  goToHome,
  goToTripDetails,
} from "../routes/coordinator";
import { MainBox } from "../components/MainBox";
import { useEffect, useState } from "react";
import { getTrips } from "../services/getTrips";
import styled from "styled-components";

const TripsCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

const TripsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const AdminHomePage = () => {
  const [trips, setTrips] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      console.log("Nao esta logado");
      goToHome(navigate);
    }
  }, []);

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
      <MainBox>
        Admin Home Page{" "}
        <MainButton
          onClick={() => goToCreateTripPage(navigate)}
          name="Criar Viagem"
        />
      </MainBox>
      <TripsDiv>
        <TripsCardGrid>
          {trips.map((trip) => {
            return (
              <TripBox
                onClick={() => goToTripDetails(navigate, trip.id)}
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
