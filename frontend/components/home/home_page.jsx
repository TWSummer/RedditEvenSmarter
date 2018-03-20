import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <a href="https://www.reddit.com/api/v1/authorize?client_id=H6zic9bY55zEnw&response_type=code&state=TrickNutsackPotato&redirect_uri=https://reddit-even-smarter.herokuapp.com/&duration=temporary&scope=identity edit flair history">
          Authenticate!
        </a>
      </div>
    );
  }
}

export default HomePage;
