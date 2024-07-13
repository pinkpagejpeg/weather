import Header from './components/header/Header'
import Now from './components/now/Now'
import NearestDay from './components/nearestDays/NearestDay'

function App() {
  return (
      <div className='container'>
        <Header />
        <Now />
        <NearestDay />
      </div>
  )
}

export default App
