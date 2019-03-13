/* eslint-disable quote-props */
export default theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    boxShadow: '0px -2px 4px 1px rgba(0,0,0,0.2), 0px -4px 5px 0px rgba(0,0,0,0.14), 0px -1px 10px 0px rgba(0,0,0,0.12)',
    minWidth: 320,
    backgroundColor: theme.palette.background.secondary,
  },
  paginationSizeLarge: {
    width: '48px',
    height: '48px',
    borderRadius: '50px',
    '&:hover': { background: theme.palette.action.hover },
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
