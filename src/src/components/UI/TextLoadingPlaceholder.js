import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


/* eslint-disable quote-props */
const styles = ({
  root: {
    animationDuration: '1s',
    animationIterationCount: 'infinite',
    animationName: 'placeHolderShimmer',
    animationTimingFunction: 'linear',
    background: 'linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%)',
    backgroundSize: '100vw',
    position: 'relative',
    marginBottom: '4px',
  },
  '@keyframes placeHolderShimmer': {
    '0%': { backgroundPosition: '-8vw 0' },
    '100%': { backgroundPosition: '80vw 0' },
  },
});

const TextLoadingPlaceholder = ({ rows, height, width, classes }) => (
  Array.isArray(rows)
    ? (
      rows.map((row, i) => (
        <div key={i} className={classes.root} style={{ width, height }} />
      ))
    )
    : (
      Array(rows).fill(1).map((_, i) => (
        <div key={i} className={classes.root} style={{ width, height }} />
      ))
    )
);

TextLoadingPlaceholder.propTypes = {
  rows:   PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  width:  PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

TextLoadingPlaceholder.defaultProps = {
  rows: 1,
  height: '0.8em',
  width: '100%',
};


export default withStyles(styles)(TextLoadingPlaceholder);
