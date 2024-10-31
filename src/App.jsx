import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Movies from './components/pages/movies/Movies'
import Dashboard from './components/pages/dashboard/Dashboard'
import Settings from './components/pages/settings/Settings'
import TopMovies from './components/pages/top-movies/TopMovies'
import Home from './components/pages/website/Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const App = () => {
  const queryClient = new QueryClient();

  return (
   <QueryClientProvider client={queryClient}>
   <Router>
    <Routes>
      <Route path="/admin/dashboard" element={<Dashboard/>}/>
      <Route path="/admin/movies" element={<Movies/>}/>
      <Route path="/admin/top-movies" element={<TopMovies/>}/>
      <Route path="/admin/settings" element={<Settings/>}/>

      <Route path="/home" element={<Home/>}/>
    </Routes>
   </Router>
   </QueryClientProvider>
  )
}

export default App