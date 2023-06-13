// import { useSelector, useDispatch } from 'react-redux';
// import { getFilter } from 'redux/selectors';
// import { updateFilter } from 'redux/actions';

import filterStore from 'stores/filterStore';

import { Button } from '../common.styled';
import { FilterWrapper } from './Filter.styled';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';

const Filter = observer(() => {
  // const filter = useSelector(getFilter);
  // const dispatch = useDispatch();

  const { filter, update } = useContext(MobxContext);

  return (
    <FilterWrapper>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={e => update(e.target.value)}
      />
      <Button
        type="button"
        onClick={e => update('')}
      >
        Clear field
      </Button>
    </FilterWrapper>
  );
});

export default Filter;
