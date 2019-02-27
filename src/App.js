import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import Card from './components/card.js'
import Header from './components/Header';
import Search from './components/Search';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',

  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,

  },
  dense: {
    marginTop: 16,

  },
  menu: {
    width: 200,

  },
  button: {
    margin: theme.spacing.unit,

  },
  leftIcon: {
    marginRight: theme.spacing.unit,

  },
  rightIcon: {
    marginLeft: theme.spacing.unit,

  },
  iconSmall: {
    fontSize: 20,

  },

});


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: 'Harry Potter',
      books: false
    };
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    });
  }

  handleSubmit = () => {

    const self = this;

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}`)
      .then(results => {
        return results.json();
      })
      .then(data => {

        console.log(data.items)
        self.setState({
          books: data.items.map(book => book.volumeInfo)
        })

      })
  }

  keyUp = (e) => {

    if (e.keyCode === 13) {
      this.handleSubmit();
    }
  }

  render() {

    const { search, books } = this.state;

    return (

      <div className="App" onKeyUp={this.keyUp}>
        <Header />
        <Search
          search={search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}

        />
        <Grid container justify='center' style={{ margin: '10px auto' }}>

          {books ? books.map((book, i) => {
            return (
              <Grid item >
                <Card
                  key={i}
                  authors={book.authors}
                  title={book.title}
                  publisher={book.publisher}
                  thumbnail={book.imageLinks.thumbnail}
                  link={book.previewLink}
                />
              </Grid>

            )
          }) :
            <div> Please Enter Something In the Search Input!</div>

          }
        </Grid>

      </div>
    );
  }
}



export default withStyles(styles)(App);
