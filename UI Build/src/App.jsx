import Card from './card'
import data from './data'
function App() {
  

  return (
  <div>
    <nav className='nav'>
      <h1>New York Times Best Sellers</h1>
      <span className="material-icons">
menu
</span>
    </nav>
    <div className='container'>
    <div className='books'>
    {data.cards.map((card, index) => (<Card key={index} index={index} {...card}/>))}
    </div>
    </div>
  </div>
  )
}

export default App
