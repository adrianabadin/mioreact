import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Itemcounter } from "./itemcounter";
import styled from "styled-components";
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function ProductCard() {
  return (
    <Card sx={{ maxWidth: 345 }} style={{ margin: "2rem" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="http://placekitten.com/300/200"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "center" }}>
        <StyledContainer>
          <Itemcounter />
          <Button size="small" color="primary">
            Share
          </Button>
        </StyledContainer>
      </CardActions>
    </Card>
  );
}
