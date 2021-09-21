import React from 'react';

import ChildAgeSelect from './ChildAgeSelect';

const FilterQuest = (props) => {
  const children = [];
  for (let i = 0; i < props.childrenNumber; i++) {
    children.push(<ChildAgeSelect key={i} />);
  }

  return (
    <div>
      <p className="filter-related-quest">What is the age of the child you are travelling with?</p>

      {children}
    </div>
  );
};

export default FilterQuest;
