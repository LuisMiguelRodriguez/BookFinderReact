import React from 'react';
import { Button, Paper, TextField, Icon } from '@material-ui/core/';

function Search(props) {

    const {
        handleChange,
        handleSubmit,
        search
    } = props;

    return (
        <div className="App">
            <Paper align='center' elevation={0}>
                <TextField
                    value={search}
                    // margin="none"
                    variant="outlined"
                    onChange={handleChange}
                    // style={{height:'10px'}}
                    inputProps={{
                      style:{ 
                          fontSize: 19,
                          padding:7,
                          margin:0
                    }
                    }}
                />
                <Button onClick={handleSubmit}
                    variant="contained"
                    color="primary"
                    style={{marginLeft:10}}
                >
                    Send
                <Icon >send</Icon>
                </Button>
            </Paper>

        </div>
    );

}

export default Search;