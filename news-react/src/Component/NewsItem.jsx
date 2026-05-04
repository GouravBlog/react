import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class NewsItem extends Component {
  render() {
    let { title, description, url, urlToImage } = this.props.article;
    const defaultImage =
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c";
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={urlToImage ? urlToImage : defaultImage}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = defaultImage;
            }}
            alt="news"
          />
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
