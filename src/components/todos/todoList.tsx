import React from 'react';
import { Button, Header } from 'semantic-ui-react';
import { TodoCard } from './todoCard';
import { getTodos, addTodo } from '../../firebase/firestore';
import { Todo } from '../../types';

export const TodoList: React.FC = () => {
  const [todos, setTodos] = React.useState<Todo[] | null>(null);

  React.useEffect(() => {
    handleClick();
  }, []);

  const handleClick = async () => {
    const todos = await getTodos();
    setTodos(todos);
    console.log(todos);
  };

  const handleAddClick = async () => {
    await addTodo('Title', 'test content', new Date(2020, 9, 1), {
      text: 'test label',
      color: 'purple',
    });
  };

  return (
    <>
      <Button content="get Todos" onClick={handleClick} />
      {/* <Button content="add Todo" onClick={handleAddClick} /> */}
      <Header content={todos?.length} />
      {todos ? (
        todos.map((todo) => <TodoCard todo={todo} key={todo.id} />)
      ) : (
        <Header content="No Todos." />
      )}
    </>
  );
};
