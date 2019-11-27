import React from "react";
import "./App.scss";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
      // myClassArray : [
      //  "grid-item grid-item--width2",
      //  "grid-item grid-item--width3", 
      //  "grid-item grid-item--width4",
      //  "grid-item grid-item--height2", 
      //  "grid-item grid-item--height3", 
      //  "grid-item grid-item--height4",
      // ],
      // randomItem: ""
    };
  }
  
  getData = (topic) => {
    // this.setState({
    //   randomItem: this.state.myClassArray[Math.floor(Math.random()*this.state.myClassArray.length)]
    // });
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
        <div className="container mt-5">
          <div className="button-wrapper">
            <button
            type="button"
              className="btn btn-orange-moon btn-large text-uppercase"
              onClick={() =>this.getData("Autumn")}
            >
              Autumn
            </button>
            <button
             type="button"
              className="btn btn-ultra-voilet btn-large text-uppercase"
              onClick={() =>this.getData("Cliff")}
            >
              Cliff
            </button>
            <button
             type="button"
              className="btn btn-cool-blues btn-large text-uppercase"
              onClick={() =>this.getData("Ocean")}
            >
              Ocean
            </button>
          </div>
          <div className="grid">
          <div className="static-banner"></div>
          {
                this.state.images.map((image, i) => {
                  return  (
                 
                  <div className="grid-item" key={i}>
                   <img src={image.urls.small} alt={image.alt_description}/>
                  </div> 
                 
                )})
              }

          </div>
        </div>
      </div>
    );
  }
}
