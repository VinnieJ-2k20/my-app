import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { fetchTodos } from './fetchTodos';
import './App.scss';
import { Link, useParams } from 'react-router-dom';

type Todo = {
  id: number;
  title: string;
};

export const Todos: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const { todoId } = useParams();

  useEffect(() => {
    fetchTodos()
      .then(setTodos);
  }, []);

  return (
    <ul>
      {todos.map(todo => (
        <Link
          to={`/todos/all/${todo.id}`}
          key={todo.id}
          className={cn(
            'todoItem',
            {
              'isActive': Number(todoId) === todo.id,
            }
          )}
        >
          {todo.title}
        </Link>
    ))}
</ul>
  );
};
