import React, { Fragment } from 'react';
import { Menu, MenuItem } from '@material-ui/core';

const MenuDropdown = ({
  listMenu,
  open,
  onHandleCloseMenu,
  anchorEl,
  onClick,
}) => {
  return (
    <Fragment>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={onHandleCloseMenu}
      >
        {listMenu.map((list) => (
          <MenuItem
            component='a'
            onClick={onClick}
            href={list.url}
            dense={true}
            key={list.id}
          >
            {list.name}
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
};

export default MenuDropdown;
