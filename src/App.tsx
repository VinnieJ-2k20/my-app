import { FC } from 'react';
import { Link, Route, Routes, Outlet, NavLink } from 'react-router-dom';
import './App.scss';

const TodosNavigation: FC = () => (
  <div>
    <Link to="all">All</Link>
    {'  '}
    <Link to="active">Active</Link>
    {'  '}
    <Link to="completed">Completed</Link>

    <Outlet />
  </div>
);

const ErrorPage: FC = () => {
  return (<p>Page not found</p>)
}

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? 'isActive' : ''}
        >
          Home
        </NavLink>
        {'  '}
        <NavLink
          to="todos"
          className={({ isActive }) => isActive ? 'isActive' : ''}
          style={({ isActive }) => ({
            color: isActive ? 'red' : 'green',
          })}
        >
          TODOs page
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Home page</h1>}/>

        <Route path="/todos" element={<TodosNavigation />}>
          <Route index element={<h1>TODOs home page</h1>}/>
          <Route path="all" element={<p>All TODOs</p>}/>
          <Route path="active" element={<p>Active TODOs</p>}/>
          <Route path="completed" element={<p>Completed TODOs</p>}/>
        </Route>

        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </div>
  );
}

export default App;
