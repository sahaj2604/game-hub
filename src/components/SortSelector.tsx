import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react'
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
  return (
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Sort By
        </MenuButton>
        <MenuList>
          <MenuItem>one</MenuItem>
          <MenuItem>two</MenuItem>
          <MenuItem>three</MenuItem>
        </MenuList>
      </Menu>
    );
}

export default SortSelector
