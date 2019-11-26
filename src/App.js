import React from "react";
import "./App.scss";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }
  
  getData = (topic) => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=${topic}&per_page=20`,
        {
          headers: {
            Authorization:
              "Client-ID 7e5804804a9e90fddf3cbd411e45c50737a06319ba8204f91f04ce927e2bca87",
            "Accept-Version": "v1"
          }
        }
      )
      .then(res => {
        const images = res.data.results;
        this.setState({ images });
      });
  }

  componentDidMount() {
      this.getData()
  }

  render() {
    
    return (
      <div>
        <div className="container">
          <div className="button-wrapper mt-5">
            <button
              className="btn btn-outline-warning btn-large"
              onClick={() =>this.getData("Autumn")}
            >
              Autumn
            </button>
            <button
              className="btn btn-outline-dark btn-large"
              onClick={() =>this.getData("Cliff")}
            >
              Cliff
            </button>
            <button
              className="btn btn-outline-info btn-large"
              onClick={() =>this.getData("Ocean")}
            >
              Ocean
            </button>
          </div>
          <div className="grid">
          <div className="grid-sizer"></div>
          {
                this.state.images.map((image, i) => {
                  return  (
                 
                  <div className="grid-item" key={i}>
                   <img src={image.urls.small}/>
                  </div> 
                 
                )})
              }

          </div>
        </div>
      </div>
    );
  }
}
