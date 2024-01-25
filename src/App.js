import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import JobSkills from "./components/jobskills/JobSkills"
import Academic from "./components/allcourses/Academic"
import Safety from "./components/safety/Safety"
import Driving from "./components/driving/Driving"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Search from "./components/common/search/Search"
import SoftSkills from "./components/softskills/SoftSkills"
import SoftSkillsLeaders from "./components/softskillsleaders/SoftSkillsLeaders"


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/jobskills' component={JobSkills} />
          <Route exact path='/academic' component={Academic} />
          <Route exact path='/safety' component={Safety} />
          <Route exact path='/driving' component={Driving} />
          <Route exact path='/softskills' component={SoftSkills} />
          <Route exact path='/softskillsleaders' component={SoftSkillsLeaders} />
        </Switch>
        <Search />
        <Footer />
      </Router>
    </>
  )
}

export default App
