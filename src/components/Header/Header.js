import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

function Types(props) {

  return (
      <Typography variant="h3" align='center' gutterBottom>
       BOOK FINDER
      </Typography>
  
  );
}

Types.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Types;
