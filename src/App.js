import { BrowserRouter, Switch, Route } from 'react-router-dom'


//page components
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Recipe from './pages/recipe/Recipe'
import ThemeSelector from './components/ThemeSelector'

//styles
import './App.css'

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/Create'>
            <Create/>
          </Route>
          <Route path='/Search'>
            <Search/>
          </Route>
          <Route path='/Recipes/:id'>
            <Recipe/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
