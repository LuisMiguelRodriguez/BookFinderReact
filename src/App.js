import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import {
  withStyles
} from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import books from 'google-books-search';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Card from './components/card.js'

const options = {
  key: process.env.GOOGLE_API_KEY,
  field: 'title',
  offset: 0,
  limit: 10,
  type: 'books',
  order: 'relevance',
  lang: 'en'

};

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
      search: 'Professional JavaScript for Web Developers',
      books: []
    };
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    });
  }

  handleSubmit = () => {

    const self = this;
    books.search(this.state.search, options, function(error, results, apiResponse) {
      if (!error) {
        console.log(results);
        self.setState({
          books: results
        });

      } else {
        console.log(error);

      }

    });

  }
  componentDidMount() {}

  render() {
    const {
      classes
    } = this.props;

    return (
      <div className="App">
        <h1>BOOK FINDER</h1>

        <TextField
                id="outlined-bare"
                className={classes.textField}
                value={this.state.search}
                margin="normal"
                variant="outlined"
                onChange={this.handleChange}
              />
                    <Button onClick={this.handleSubmit}variant="contained" color="primary" className={classes.button}>
                              Send
                                              <Icon className={classes.rightIcon}>send</Icon>
            </Button>
             
            <div style={{display:'flex', flexWrap:'wrap'}}>
            {this.state.books ? this.state.books.map((book ,i)=>{
              return(
                <Card 
                authors={book.authors}
                title={book.title}
                publish={book.publisher}
                thumbnail={book.thumbnail}
              />
              
              )
            }):
                <div> No Books!</div>
            
            }
          </div>
           
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,

};

export default withStyles(styles)(App);
