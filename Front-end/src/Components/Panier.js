import React, { useEffect, useState } from "react";
import { Grid, Segment, Image } from "semantic-ui-react";

//redux

import { connect } from "react-redux";

const Panier = ({ addToPanier, Panier }) => {
  const [statePanier, setStatePanier] = useState(Panier);
  console.log("from panier ", Panier);

  const PanierCards = statePanier.map((card) => {
    return (
      <Grid.Row columns={5} stretched>
        <Grid.Column>
          <Image src="https://natashaskitchen.com/wp-content/uploads/2021/06/pizza-dough-sq-500x375.jpg" />
        </Grid.Column>
        <Grid.Column>
          <Segment>{card.title}</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Qte: {card.wishedQte} </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Price : {card.TotalPrice} </Segment>
        </Grid.Column>
        <Grid.Column width={2}>
          <Segment>Actions : X</Segment>
        </Grid.Column>
      </Grid.Row>
    );
  });

  return (
    <Grid
      columns="equal"
      style={{ marginTop: "10px" }}
      container
      divided="vertically"
    >
      {PanierCards}
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    Panier: state.panier,
  };
};
export default connect(mapStateToProps)(Panier);
