import React from 'react';
import PropTypes from 'prop-types';

import compose from 'recompose/compose';
import { withStyles, withTheme } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';

import Pagination from 'material-ui-flat-pagination';
import Icon from '@material-ui/core/Icon';
import NavigateNext from '@material-ui/icons/NavigateNext';
import NavigateBefore from '@material-ui/icons/NavigateBefore';

import PaginationStyles from './Pagination.styles';

const styles = theme => PaginationStyles(theme);


const StyledPagination = ({ limit, offset, total, onChange, classes, width }) => (
  <Pagination
    classes={{
      root: classes.root,
      sizeLarge: classes.paginationSizeLarge,
    }}
    limit={limit}
    offset={offset}
    total={total}
    onClick={(e, offset, page) => onChange(page)}
    size='large'
    reduced={width === 'xs'}
    nextPageLabel={(
      <Icon>
        <NavigateNext classes={{ root: classes.icons }} />
      </Icon>
    )}
    previousPageLabel={(
      <Icon>
        <NavigateBefore classes={{ root: classes.icons }} />
      </Icon>
    )}
  />
);


StyledPagination.propTypes = {
  limit:    PropTypes.number.isRequired,
  offset:   PropTypes.number.isRequired,
  total:    PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  classes:  PropTypes.object.isRequired,
};

export default compose(
  withTheme(),
  withStyles(styles),
  withWidth(),
)(StyledPagination);
