import React from "react";
import Card from "../Card";

import "./styles.css";

const Categories: React.FC = () => {
  return (
    <div className="container">
      <div className="card-container">
        <div className="categories-content">
          <h1>categories</h1>
          <p>discover new possibilities to help you today</p>
        </div>
        <div className="row">
          <Card
            text="Nature"
            description="Lorem ipsum dolor sit amet"
            position="left"
            imgUri="https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
          />
          <Card
            text="Daily"
            description="Lorem ipsum dolor sit amet"
            position="left"
            cardWidth={800}
            imgUri="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          />
        </div>
        <Card
          text="Together"
          description="Lorem ipsum dolor sit amet"
          position="left"
          imgUri="https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
          cardWidth={1210}
        />
        <div className="row">
          <Card
            text="Analysis"
            description="Duis sollicitudin mauris vitao venenatis aliquet"
            position="right"
            imgUri="https://images.unsplash.com/photo-1549927681-0b673b8243ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            cardWidth={800}
          />
          <Card
            text="pictures"
            description="Lorem ipsum dolor sit amet"
            position="left"
            imgUri="https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80"
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
