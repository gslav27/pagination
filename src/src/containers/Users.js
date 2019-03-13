import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ListItem from '@material-ui/core/ListItem';

import { usersInterface } from '_Utils_/types/interfaces';
import { PaginationLimits } from '_Utils_/constants/constants';
import UsersLayout from '../components/Users/UsersLayout/UsersLayout';
import UserListItemText from '../components/Users/UserListItemText/UserListItemText';
import Pagination from '../components/Users/Pagination/Pagination';

import {
  getUsers,
  setCurrentPage,
} from '../store/users/usersActionCreators';

import {
  getUsersList,
  getCurrentPage,
  getAllUsersLoadingStatus,
  getAllUsersQty,
} from '../store/users/usersSelectors';



class Users extends Component {
  constructor() {
    super();
    this.handleCurrentPageChange = this.handleCurrentPageChange.bind(this);
  }

  componentDidMount() {
    const { page } = this.props.match.params;
    this.props.getUsers();
    page && this.props.setCurrentPage(Number(page));
  }

  shouldComponentUpdate(nextProps) {
    const { page: nextPage } = nextProps.match.params;
    const { currentPage, allUsersLoadingStatus } = this.props;
    if (!nextPage && (currentPage === 1) && !allUsersLoadingStatus) return false;
    return true;
  }

  componentDidUpdate(prevProp) {
    const { page } = this.props.match.params;
    const { currentPage, setCurrentPage, allUsersLoadingStatus, history } = this.props;
    !page && (currentPage != 1) && setCurrentPage(1);

    (prevProp.allUsersLoadingStatus && !allUsersLoadingStatus && (page > currentPage)) &&
      history.push(`${currentPage}`);
  }

  handleCurrentPageChange(page) {
    this.props.setCurrentPage(page);
    this.props.history.push(`${page}`);
    window.scrollTo(0, 0);
  }

  render() {
    const {
      usersList,
      currentPage,
      allUsersQty,
    } = this.props;

    return (
      <UsersLayout
        users={
          usersList.map(({ id, name, surname, desc }) => (
            <ListItem key={id}>
              <UserListItemText
                primary={name && `${name} ${surname}`}
                secondary={desc}
              />
            </ListItem>
          ))
        }
        navigation={(
          <Pagination
            limit={PaginationLimits.usersPerPage}
            offset={(currentPage - 1) * PaginationLimits.usersPerPage}
            total={allUsersQty}
            onChange={this.handleCurrentPageChange}
          />
        )}
      />
    );
  }
}

Users.propTypes = {
  getUsers:               PropTypes.func.isRequired,
  setCurrentPage:         PropTypes.func.isRequired,
  usersList:              usersInterface.isRequired,
  currentPage:            PropTypes.number.isRequired,
  allUsersLoadingStatus:  PropTypes.bool.isRequired,
  allUsersQty:            PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  usersList:              getUsersList(state, ownProps.match.params.page),
  currentPage:            getCurrentPage(state),
  allUsersLoadingStatus:  getAllUsersLoadingStatus(state),
  allUsersQty:            getAllUsersQty(state),
});

const mapDispatchToProps = {
  getUsers,
  setCurrentPage,
};


export default connect(mapStateToProps, mapDispatchToProps)(Users);
