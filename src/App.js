import {Switch, Route, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'

import Home from './components/Home'

import FilterJobs from './components/FilterJobs'

import JobItemDetails from './components/JobItemDetails'

import NotFound from './components/NotFound'

import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path='/login' component={LoginForm} />
      <ProtectedRoute exact path='/' component={Home} />
      <ProtectedRoute exact path='/jobs' component={FilterJobs} />
      <ProtectedRoute exact path='/jobs/:id' component={JobItemDetails} />
      <Route exact path='/not-found' component={NotFound} />
      <Redirect to='/not-found' />
    </Switch>
  </>
)

export default App
