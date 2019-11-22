import React from 'react';
import './App.css';
import axios from 'axios';
import StackGrid from "react-stack-grid";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []

    }
  }

  getData(topic) {
    axios.get(
      `https://api.unsplash.com/search/photos?query=${topic}&per_page=20`,
      {
        headers: {
          Authorization:
            "Client-ID 7e5804804a9e90fddf3cbd411e45c50737a06319ba8204f91f04ce927e2bca87",
          "Accept-Version": "v1"
        }
      }
    ).then(res => {
      const images = res.data.results
      this.setState({ images })

    })

  }
  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div id="App">
        <div className="container">
          <div className="button-wrapper"> 
          <button className="btn" onClick={this.getData('Autumn')}>Autumn</button>
          <button className="btn" onClick={this.getData('Cliff')}>Cliff</button>
          <button className="btn" onClick={this.getData('Ocean')}>Ocean</button>
        </div>
        <div className="container">
          {this.state.images.map((image,i)=> {
            return (
              <StackGrid>
                <img src={image.urls.small}></img>
              </StackGrid>
             
            )
          })}
        </div>
        </div>
      </div>
    )
  }
}