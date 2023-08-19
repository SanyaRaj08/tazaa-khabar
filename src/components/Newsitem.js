import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, source, description, imageUrl, newsUrl, author, date } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imageUrl
                ? "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/11787/production/_124395517_bbcbreakingnewsgraphic.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <span className="badge bg-danger">{source}</span>
            <p className="card-text">{description}...</p>
            <div style={{ color: "red" }}>
              <p className="card-text">
                <small className="text-body-secondary">
                  by {!author ? "Unknown author" : author} on{" "}
                  {new Date(date).toGMTString()}
                </small>
              </p>
            </div>
            <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
