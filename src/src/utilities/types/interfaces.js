import { string, arrayOf, shape } from 'prop-types';


export const userInterface = {
  id:       string,
  name:     string,
  surname:  string,
  desc:     string,
};

export const usersInterface = arrayOf(shape(userInterface));
