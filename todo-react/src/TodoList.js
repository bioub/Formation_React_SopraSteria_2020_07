import React, { memo, Component, PureComponent } from "react";
import TodoItem from "./TodoItem";

function TodoList({ items = [], onDelete = () => {}}) {
  console.log('render TodoList');
  return (
    <div className="TodoList">
      {items.map((el) => (
        <TodoItem key={el.id} item={el} onDelete={onDelete} />
      ))}
    </div>
  )
}

// useMemo
// const sumMemo = memo(sum);
// sumMemo(1, 2); // appelle sum et  stocke le resultat en cache
// sumMemo(1, 2); // pas de rappel de sum car les params sont les memes

export default memo(TodoList);

// class TodoList extends PureComponent {
//   // shouldComponentUpdate(newProps) {
//   //   return this.props.items !== newProps.items;
//   // }
//   render() {
//     console.log("render TodoList");
//     const { items = [], onDelete = () => {} } = this.props;
//     return (
//       <div className="TodoList">
//         {items.map((el) => (
//           <TodoItem key={el.id} item={el} onDelete={onDelete} />
//         ))}
//       </div>
//     );
//   }
// }

// export default TodoList;
