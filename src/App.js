import './App.css'
import Header from './components/header/header'
import Flex from "./components/flex/flex"

function App() {
  return (
    <Flex center>
      <div className="app_content">
        <Header/>

      </div>
    </Flex>
  )
}

export default App
