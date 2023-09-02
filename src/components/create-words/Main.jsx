// import NewItem from './NewItem';
// import ListButtons from './ListButtons';
//
// function Main() {
//   const handleKeyDown = event => {
//     const element = event.target;
//     const parent = element.parentElement;
//     const elementName = element.getAttribute('name');
//     if (event.key === 'ArrowDown') {
//       const next = parent.nextElementSibling;
//       next && focusElement(parent, elementName);
//     } else if (event.key === 'ArrowUp') {
//       const prev = parent.previousElementSibling;
//       prev && focusElement(prev, elementName);
//     } else if (event.key === 'ArrowLeft') {
//       focusElement(parent, 'english');
//     } else if (event.key === 'ArrowRight') {
//       focusElement(parent, 'translation');
//     }
//   };
//   const focusElement = (parentElement, name) => {
//     const elementToFocus = parentElement.querySelector(`input[name=${name}]`);
//     elementToFocus.focus();
//   };
//
//   return (
//     <div className="App" onKeyDown={handleKeyDown}>
//       <NewItem id={1} />
//       <NewItem id={2} />
//       <NewItem id={3} />
//       <NewItem id={4} />
//       <ListButtons />
//     </div>
//   );
// }
//
// export default Main;
