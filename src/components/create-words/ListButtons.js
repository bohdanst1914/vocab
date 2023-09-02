import React from 'react';

const ListButtons = () => {
  const addNewItem = () => {};

  return (
    <div>
      <button>Remove</button>
      <button onClick={addNewItem}>Add</button>
    </div>
  );
};

export default ListButtons;
