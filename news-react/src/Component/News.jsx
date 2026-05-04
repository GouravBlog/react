import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      totalResults: 0,
      page: 1,
    };
  }

  async componentDidMount() {
    try {
      this.props.setProgress(30);
      this.setState({ loading: true });
      let data = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&page=${this.state.page}&category=${this.props.category}&apiKey=b1ff5696dad5417e91595aa7ea8e4574`,
      );
      this.setState({ loading: true });
      this.props.setProgress(70);

      data = await data.json();
      this.props.setProgress(100);

      console.log("data", data);

      this.setState({
        articles: data.articles,
        loading: false,
        totalResults: data.totalResults,
      });
      document.title = `News-App/${this.capitalize(this.props.category)}`;
    } catch (error) {
      console.log(error.message);
      this.setState({ loading: false });
    }
  }

  capitalize = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  fetchMoreData = async () => {
    try {
      let data = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&page=${this.state.page + 1}&category=${this.props.category}&apiKey=b1ff5696dad5417e91595aa7ea8e4574`,
      );
      this.setState({
        page: this.state.page + 1,
      });

      data = await data.json();

      this.setState({
        articles: this.state.articles.concat(data.articles),
        totalResults: this.state.totalResults,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    return (
      <>
        <h1 className="my-4 text-center">
          News App Top - {this.capitalize(this.props.category)} Category News
        </h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
        >
          {this.state.loading ? (
            <Spinner />
          ) : (
            <div className="d-flex justify-content-between  flex-wrap gap-4 mx-5">
              {this.state.articles &&
                this.state.articles.map((article, i) => (
                  <NewsItem article={article} key={i} />
                ))}
            </div>
          )}
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
