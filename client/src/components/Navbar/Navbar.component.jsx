import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { getUser } from '../../redux/actions/user/user.selectors';
import { selectTotalItems } from '../../redux/actions/cart/cart.selectors';
import { signOut, setToggle } from '../../redux/actions/user/user.actions';
import { doSignOut } from '../../firebase/firebase';
import {
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { AccountCircle, Person, ShoppingCart } from '@material-ui/icons';
import MenuDropdown from '../MenuDropdown/MenuDropdown.component';
import CustomButton from '../Button/CustomButton.component';
import CartDropdown from '../CartDropdown/CartDropdown.component';
import NavbarMenu from '../NavbarMenu/NavbarMenu.component';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  buttonLink: {
    textDecoration: 'none',
    color: '#fff',
  },
  navbar: {
    backgroundColor: '#333',
  },
  subNavbarMenu: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  navbarMenu: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  navbarMenuItem: {
    padding: 10,
    textTransform: 'uppercase',
    display: 'inline-block',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  subNavBar: {
    backgroundColor: '#444',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const listMenu = [
  {
    id: 1,
    name: 'Profile',
    url: '/profile',
  },
  {
    id: 2,
    name: 'My Account',
    url: '/account',
  },
];

const Navbar = ({
  title,
  users: { isAuth, isToggle },
  signOut,
  totalItems,
  setToggle,
}) => {
  const classes = useStyles();
  const [openCart, setOpenCart] = useState(false);
  const open = Boolean(isToggle);

  const onHandleCloseMenu = () => {
    setToggle(null);
  };

  const onHandleOpenMenu = (e) => {
    setToggle(e.currentTarget);
  };

  const onHandleSignOut = () => {
    doSignOut();
    signOut();
  };

  const onHandleOpenCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.navbar}>
        <Toolbar>
          <Typography variant='h6' className={classes.title} noWrap>
            <Link to='/' className={classes.buttonLink}>
              {title}
            </Link>
          </Typography>

          <div className={classes.navbarMenu}>
            <NavbarMenu
              label='Mens'
              url='/mens'
              component='span'
              className={classes.navbarMenuItem}
            />
            <NavbarMenu
              label='Womens'
              url='/womens'
              component='span'
              className={classes.navbarMenuItem}
            />
            <NavbarMenu
              label='Accessories'
              url='/accessories'
              component='span'
              className={classes.navbarMenuItem}
            />
          </div>

          {!isAuth && (
            <div>
              <Link to='login' className={classes.buttonLink}>
                <CustomButton
                  component='div'
                  color='inherit'
                  name='Login'
                  startIcon={<Person />}
                />
              </Link>
            </div>
          )}
          {isAuth && (
            <div>
              <IconButton
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={onHandleOpenMenu}
                color='inherit'
              >
                <AccountCircle />
              </IconButton>
              <CustomButton
                component='div'
                onClick={onHandleSignOut}
                color='inherit'
                name='Sign Out'
              />
              <MenuDropdown
                listMenu={listMenu}
                open={open}
                onHandleCloseMenu={() => onHandleCloseMenu()}
                anchorEl={isToggle}
              />
            </div>
          )}
          <CustomButton
            component='div'
            color='secondary'
            variant='contained'
            name={totalItems}
            onMouseEnter={onHandleOpenCart}
            startIcon={<ShoppingCart />}
          />
        </Toolbar>
      </AppBar>
      <CartDropdown
        open={openCart}
        onHandleToggle={onHandleOpenCart}
        onToggle={onHandleOpenCart}
      />

      <AppBar position='static' className={classes.subNavBar}>
        <Toolbar variant='dense'>
          <div className={classes.subNavbarMenu}>
            <NavbarMenu
              label='Mens'
              url='/mens'
              component='span'
              className={classes.navbarMenuItem}
            />
            <NavbarMenu
              label='Womens'
              url='/womens'
              component='span'
              className={classes.navbarMenuItem}
            />
            <NavbarMenu
              label='Accessories'
              url='/accessories'
              component='span'
              className={classes.navbarMenuItem}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  users: getUser,
  totalItems: selectTotalItems,
});

const mapDispatchToProps = {
  signOut,
  setToggle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
