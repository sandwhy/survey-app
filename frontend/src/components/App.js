import React, {useEffect} from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import {fetchUser} from '../actions/index'


import Header from './Header'
import Landing from './Landing'
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>


const App = () => {
  const dispatch = useDispatch()
  dispatch(fetchUser())
  
  return (
    <div className='container'>
        <BrowserRouter>
            <div>
                <Header />
                <Route path="/" exact component={Landing} />
                <Route path="/surveys" exact component={Dashboard} />
                <Route path="/surveys/new" exact component={SurveyNew} />
            </div>
        </BrowserRouter>
    </div>
  )
}

export default App