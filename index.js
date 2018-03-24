import React, { Component } from "react";
import ReactDOM from "react-dom"; 
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";

import SearchBar from "./components/search_bar";
import { Component } from "../Library/Caches/typescript/2.6/node_modules/@types/react";

const YTSearch_API = "AIzaSyDYDyHhqSM00mIDSuJP1_p0NNny312tTRg";

// create a new component which produces
// some HTML
 
// Below is a functional-based compoenent:

class App extends Component {
  constructor(porps) {
      super(props);

    this.state = { vidoes: [] };

      YTSearch({key: API_KEY, term: "Ronaldo soccer tricks"}, (video) => {
        this.setState({ vidos })
            // ({ videos: videos})

      });
  }
}
    
    render() {
        return (
        <div>
            <SearchBar />
            <VideoList videos={this.state.videos} />
        </div>
        );
    };



ReactDOM.render(<App />, document.querySelector(".container"));


