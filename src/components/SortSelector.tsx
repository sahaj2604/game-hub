import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface prop{
    onSelectSortOrder:(sortOrder:string)=>void;
    sortOrder:string;
}
const SortSelector = ({onSelectSortOrder,sortOrder}:prop) => {
    const sortOrders=[
        {value:'',label:'Relevance'},
        {value:'-added',label:'Date Added'},
        {value:'name',label:'Name'},
        {value:'-released',label:'Release Date'},
        {value:'-metacritic',label:'popularity'},
        {value:'-rating',label:'Average Rating'},
    ]
    const value=sortOrders.find(order=>order.value===sortOrder)
  return (
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order By: {value?.label || 'Relevance'}
        </MenuButton>
        <MenuList>
          {sortOrders.map(order=><MenuItem key={order.value} onClick={()=>onSelectSortOrder(order.value)}>{order.label}</MenuItem>)}
        </MenuList>
      </Menu>
    );
}

export default SortSelector
