// REACT
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// PAGES
import Home from './pages/Home'
import About from './pages/About'
import Cryptocurrency from './pages/Cryptocurrency'

// COMPONENTS
import Navbar from './components/navbar/Navbar'

// MATERIAL-UI
import { ThemeProvider } from '@material-ui/core/styles'
import { lightTheme } from './util/theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import Footer from './components/footer/Footer'

// OTHER

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Router>
                <Navbar />

                <Switch>
                    <Route
                        exact
                        path="/"
                        render={(props) => <Home {...props} />}
                    />
                    <Route path="/about" component={About} />

                    <Route
                        path="/cryptocurrency/:id"
                        component={Cryptocurrency}
                    />
                </Switch>
                <Footer />
            </Router>
        </ThemeProvider>
    )
}

export default App
