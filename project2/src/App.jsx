import food1 from './assets/food1.jpg'
import food4 from './assets/food4.jpg'
import food5 from './assets/food5.jpg'
import food2 from './assets/food 2.jpg'


function App() {
  return(
  <div>
    <div className="container">
      <div className="row">
        <div className="col">
          <img src={food1} alt="auu" height="180px" width="200px"/>
        </div>
        <div className="col">cake</div>
      </div>
    </div>
  </div>
  )
}

export default App
