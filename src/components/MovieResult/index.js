import React from "react";
import { Button, Card, Grid, Typography } from "@material-ui/core";
import { withRouter } from "react-router-dom";

import style from "./style";

const MovieResult = ({ Title, Year, Type, imdbID, Poster, history }) => {
  const classes = style();

  const handleSeeMovieClick = () => {
    history.push(`/movie/${imdbID}`);
  };

  return (
    <Card className={classes.cardContainer}>
      <Grid container>
        <Grid item>
          <img src={Poster} alt={Title} className={classes.poster} />
        </Grid>
        <Grid item className={classes.titlesContainer}>
          <Typography>{Title}</Typography>
          <Typography>{Year}</Typography>
          <Typography>{Type}</Typography>
          <Button
            color="primary"
            variant="contained"
            onClick={handleSeeMovieClick}
          >
            Show more
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default withRouter(MovieResult);
