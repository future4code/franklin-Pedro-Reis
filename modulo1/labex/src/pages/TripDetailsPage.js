import { Header } from "../components/Header";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToAdminHomePage, goToHome } from "../routes/coordinator";
import { useParams } from "react-router-dom";
import { getTrip } from "../services/getTrip";
import { MainBox } from "../components/MainBox";
import { OrangeText } from "../components/OrangeText";
import { MainButton } from "../components/MainButton";
import { deleteTrip } from "../services/deleteTrip";

export const TripDetailsPage = () => {
  const navigate = useNavigate();
  const [trip, setTrip] = useState([]);
  const tripParams = useParams();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      console.log("Nao esta logado");
      goToHome(navigate);
    }
  }, []);

  useEffect(() => {
    const loadTrip = async () => {
      try {
        const loadedTrip = await getTrip({
          path: tripParams.tripId,
          token: token,
        });
        setTrip(loadedTrip.trip);
      } catch (e) {
        alert(e.response);
      }
    };
    loadTrip();
  }, []);

  return (
    <div>
      <Link to="/">
        <Header />
      </Link>
      <MainBox>
        <h1>
          <OrangeText name={trip.name} />
        </h1>
        <p>{trip.description}</p>
        <h3>Em análise</h3>
        {trip.candidates &&
          trip.candidates.map((person) => {
            return <div key={person.id}>{person.name}</div>;
          })}
        <h3>Aprovados</h3>
        {trip.approved &&
          trip.approved.map((person) => {
            return <div key={person.id}>{person.name}</div>;
          })}

        <MainButton
          onClick={() =>
            deleteTrip({
              path: tripParams.tripId,
              token: token,
            }) &
            alert("Trip delatada") &
            goToAdminHomePage(navigate)
          }
          name={"Excluir Viagem"}
        />
      </MainBox>
    </div>
  );
};
