import { Route, Switch } from 'react-router-dom';

import BookList from './components/book/BookList';
import BookDetail from './components/book/BookDetail.js';
import './App.css';
import NotFound from './components/NotFound.js';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <Switch>
        <Route exact path="/" component={BookList} />
        <Route exact path="/details/:id" component={BookDetail} />
        <Route path="*" component={NotFound} />
      </Switch>
    </main>
  );
}

export default App;
