import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchBeersData } from "../lib/api";
import useHttp from "../hooks/use-http";
import { beerActions } from "../store/beer-slice";
import BeersList from "../components/beers/BeersList";
import Card from "../components/UI/Card";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NotFound from "./NotFound";

const AllBeers = (props) => {
  const { setBeersList } = beerActions;
  const dispatch = useDispatch();

  const {
    sendRequest,
    status,
    data: loadedBeers,
    error,
  } = useHttp(fetchBeersData, true);

  useEffect(() => {
    sendRequest();
    dispatch(setBeersList(loadedBeers));
  }, [sendRequest, dispatch, setBeersList]);

  console.log("STATUS", status);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && !loadedBeers) {
    return <NotFound />;
  }

  if (status === "completed") {
    return (
      <Card>
        <BeersList inventory={loadedBeers} />
      </Card>
    );
  }
  if (status === "error") {
    return <NotFound />;
  }
};

export default AllBeers;
