import React, { Component } from "react";

class CardContainer extends Component {
  render() {
    const { id, name, email } = this.props.monster;

    return (
      <div>
        <div className="card-container" key={id}>
          <img
            alt={`monster ${name}`}
            src={`https://robohash.org/${id}?set=set2&size=180x180`}
          />
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    );
  }
}

export default CardContainer;