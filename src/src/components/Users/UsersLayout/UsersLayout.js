import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import styles from './UsersLayout.styles';


const UsersLayout = ({ users, navigation, classes }) => (
  <section className={classes.root}>
    <List>
      {users}
    </List>
    {navigation}
  </section>
);

UsersLayout.propTypes = {
  users:      PropTypes.node.isRequired,
  navigation: PropTypes.node.isRequired,
  classes:    PropTypes.object.isRequired,
};

export default withStyles(styles)(UsersLayout);
