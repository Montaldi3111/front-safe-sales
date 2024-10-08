import { FaMagnifyingGlass } from 'react-icons/fa6'
import './App.css'
import Sales from './components/Sales/Sales'

function App() {

  return (
    <main>
      <section>
        <span id="title-container">
          <h1 className='text-3xl font-semibold'>Safe Sales</h1>
          <div id="timer">
            <h3>Lunes 7 de octubre</h3>
            <p>17:34:45</p>
          </div>
        </span>
      </section>
        <section>
          <span id="search-bar">
            <div>
            <FaMagnifyingGlass />
            <input type="text" className='bg-lightGray text-lg' placeholder="Buscar por producto" />
            </div>
            <button id="search-btn">Buscar</button>
          </span>
          <Sales />
          <span id="pagination">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
          </span>
        </section>
    </main>
  )
}

export default App
