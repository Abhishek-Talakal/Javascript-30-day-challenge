// //Task 6:  Use closures to create a simple module for managing a collection of items.Implement methods to add, remove, and list items.
function modulePattern() {
    let items = [];
  
    function addItem(item) {
      items.push(item);
    }
  
    function removeItem(item) {
      const index = items.indexOf(item);
      if (index > -1) {
        items.splice(index, 1);
      }
    }
  
    function listItem() {
      return items.slice();
    }
  
    addItem("item 1");
    console.log(items);
  
    addItem("item 2");
    console.log(items);
  
    listItem();
    console.log(items);
  
    removeItem("item 1");
    console.log(items);
  }
  
  modulePattern();

