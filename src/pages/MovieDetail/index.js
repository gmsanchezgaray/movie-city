import React, { useEffect } from "react";
import { Container, CircularProgress, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { movieResult as movieResultSelector } from "../../redux/selectors";
import { searchMovieById } from "../../redux/actions/search";

const MovieDetail = ({ match }) => {
  const dispatch = useDispatch();
  const movieResult = useSelector((state) => movieResultSelector(state));

  //! DESCOMENTAR PARA VER QUE TRAE MOVIERESULT  console.log(movieResult);

  useEffect(() => {
    const movieId = match.params.id;
    if (!movieResult || (movieResult && movieResult.imdbID !== movieId)) {
      dispatch(searchMovieById({ movieId }));
    }
  });
  if (!movieResult) {
    return <CircularProgress size={80} color="primary" />;
  }
  return (
    <Container>
      <Typography variant="h3">{movieResult.Title}</Typography>
      <img src={movieResult.Poster} alt={movieResult.Title} />
      <Typography>
        <strong>Actors: </strong>
        {movieResult.Actors}
      </Typography>
      <Typography>
        <strong>Director: </strong>
        {movieResult.Director}
      </Typography>
      <Typography>
        <strong>Country: </strong>
        {movieResult.Country}
      </Typography>
      <Typography>
        <strong>Rated:</strong>
        {movieResult.Rated}
      </Typography>
      <Typography>
        <strong>Awards:</strong>
        {movieResult.Awards}
      </Typography>
      <Typography>
        <strong>Plot:</strong>
        {movieResult.Plot}
      </Typography>
    </Container>
  );
};

export default MovieDetail;
