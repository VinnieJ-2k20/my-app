export const fetchTodos = () => {
  const fetchUrl = 'https://jsonplaceholder.typicode.com/todos';

  const result = fetch(fetchUrl)
    .then(res => res.json());
  
  return result;
};
