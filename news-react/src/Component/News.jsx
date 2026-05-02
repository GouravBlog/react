import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  async componentDidMount() {
    try {
      let data = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=b1ff5696dad5417e91595aa7ea8e4574`,
      );
      data = await data.json();
      this.setState({
        articles: data.articles,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    console.log(this.state.articles);
    return (
      <div className="d-flex justify-content-between  flex-wrap gap-4 mx-5">
        {this.state.articles &&
          this.state.articles.map((article) => <NewsItem article={article} />)}
      </div>
    );
  }
}

export default News;
