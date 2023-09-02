import React from 'react';

function NewItem({ id }) {
  return (
    <div id={id}>
      <input type="text" name="english" placeholder="English word" />
      <input type="text" name="translation" placeholder="Переклад" />
    </div>
  );
}

export default NewItem;
