import { Button } from '../common.styled';
import { FilterWrapper } from './Filter.styled';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { StoreContext } from 'index';

const Filter = observer(() => {
  const {
    filter: { filter, update },
  } = useContext(StoreContext);

  return (
    <FilterWrapper>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={e => update(e.target.value)}
      />
      <Button type="button" onClick={e => update('')}>
        Clear field
      </Button>
    </FilterWrapper>
  );
});

export default Filter;
