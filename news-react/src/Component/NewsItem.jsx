import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class NewsItem extends Component {
  render() {
    let { title, description, url, urlToImage } = this.props.article;

    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img src={urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <NavLink to={url} className="btn btn-dark">
              Know More Details
            </NavLink>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
