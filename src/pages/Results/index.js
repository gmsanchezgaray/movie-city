import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, CircularProgress } from "@material-ui/core";
import queryString from "query-string";

import { searchMovie } from "../../redux/actions/search";
import { movieResults, isSearchLoading } from "../../redux/selectors";
import MovieResult from "../../components/MovieResult";

const Results = ({ location }) => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => movieResults(state));
  const isLoading = useSelector((state) => isSearchLoading(state));
  const [isLooked, setIsLooked] = useState(false);

  useEffect(() => {
    const { movieName } = queryString.parse(location.search);
    if (movieName && !isLooked) {
      setIsLooked(true);
      dispatch(searchMovie({ movieName }));
    }
  });

  const renderMovies = () => {
    if (movies) {
      return movies.map((value, key) => <MovieResult key={key} {...value} />);
    } else if (isLoading) {
      return <CircularProgress size={100} color="primary" />;
    }
    return <div />;
  };

  return (
    <div>
      <Container>{renderMovies()}</Container>
    </div>
  );
};

export default Results;
