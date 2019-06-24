import React from 'react';
import Heading from './Heading.jsx'
import CharPicker from './CharPicker.jsx'
import CharDisplay from './CharDisplay.jsx'
import Footer from './Footer.jsx'
import { gql } from 'apollo-boost';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      GET_CHARS : gql`
        query {
          characters {
            id
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
      allCharacters: [],
      currChar: null,
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
      // .then(a => console.log(this.state.allCharacters))
      .catch(err => console.error(err))
  }
  

  render() {
    return (
      <div className='main-page'>
        <Heading />
        <CharPicker allCharacters={this.state.allCharacters} />
        <CharDisplay currChar={this.state.currChar} />
        <Footer />
      </div>
    );
  }
}

export default App;
