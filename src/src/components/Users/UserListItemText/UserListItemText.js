import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import TextLoadingPlaceholder from '_Ui_/TextLoadingPlaceholder';

import styles from './UserListItemText.styles';



const UserListItemText = ({ classes, ...props }) => (
  props.primary
    ? (
      <ListItemText
        classes={{ secondary: classes.listItemTextSecondary }}
        {...props}
      />
    )
    : (
      <div className={classes.placeholder}>
        <TextLoadingPlaceholder width='150px' height='1.3em ' />
        <TextLoadingPlaceholder height='1em ' />
      </div>
    )
);


UserListItemText.propTypes = {
  primary:    PropTypes.string,
  secondary:  PropTypes.string,
  classes:    PropTypes.object.isRequired,
};

UserListItemText.defaultProps = {
  primary: '',
  secondary: '',
};

export default withStyles(styles)(UserListItemText);
