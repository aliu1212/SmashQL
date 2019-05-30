import React from 'react';
import Heading from './Heading.jsx'
import { gql } from 'apollo-boost';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      GET_CHARS : gql`
        query {
          characters {
            name
            weight
            pic_url
            big_url
            zero_rank
            esam_rank
            leffen_rank
          }
        }
      `,
      allCharacters: []
    };
  }

  componentDidMount() {
    this.props.client
      .query({
        query: this.state.GET_CHARS
      })
      .then(result => {
        this.setState({
          allCharacters: result.data.characters
        })
      })
      .then(a => console.log(this.state.allCharacters))
      .catch(err => console.error(err))
  }
  

  render() {
    return (
      <div className='main-page'>
        <Heading />
      </div>
    );
  }
}

export default App;
