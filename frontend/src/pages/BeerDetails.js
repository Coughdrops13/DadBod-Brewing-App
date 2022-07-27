import { Fragment, useEffect } from "react";
import { useParams, Link, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

import { fetchSingleBeer } from "../lib/api";
import useHttp from "../hooks/use-http";
import SingleBeer from "../components/beers/SingleBeer";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import CommentsList from "../components/comments/CommentsList";
import CommentForm from "../components/comments/CommentForm";
import NotFound from "./NotFound";

const BeerDetails = (props) => {
  const isLoggedIn = useSelector(state => state.loggedIn.isLoggedIn)
  const params = useParams();
  const beerId = params.beerId;

  const {
    sendRequest,
    status,
    data: loadedBeer,
    error,
  } = useHttp(fetchSingleBeer, true);

  useEffect(() => {
    sendRequest(beerId);
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (status === 'completed' && !loadedBeer) {
    return (
      <NotFound />
    )
  }

  return (
    <Fragment>
      <div>
        <Link to="/beers" className="btn">{`<< Beer List`}</Link>
      </div>
      <SingleBeer beer={loadedBeer} />
      {isLoggedIn && (
        <Routes>
          <Route
            path=""
            exact
            element={
              <div className="centered">
                <Link to="comments" className="btn">
                  Comments
                </Link>
              </div>
            }
          />
          <Route
            path="comments"
            element={
              <Fragment>
                <div className="centered">
                  <Link to="newComment" className="btn">
                    Add Comment
                  </Link>
                </div>
                <CommentsList beer_id={beerId} />
              </Fragment>
            }
          />
          <Route path="comments/newComment" element={<CommentForm />} />
          </Routes>
        )}
    </Fragment>
  );
};

export default BeerDetails;
