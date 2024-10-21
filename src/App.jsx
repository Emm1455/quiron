import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className='section'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='title'>Vite + React</h1>
      <div className="section">
        <button className='button is-primary' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <section className="hero is-fullheight">
        {/* <!-- Hero head: will stick at the top --> */}
        <div className="hero-head">
          <header className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item">
                  <img src="https://bulma.io/assets/images/bulma-type-white.png" alt="Logo" />
                </a>
                <span className="navbar-burger" data-target="navbarMenuHeroC">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroC" className="navbar-menu">
                <div className="navbar-end">
                  <Link className="navbar-item is-active" to="/">Inicio</Link>
                  <Link className="navbar-item" to="/tutorial">Instrucciones</Link>
                  {/* <Link className="navbar-item button is-success is-inverted" to="/login">Iniciar sesión</Link> */}
                  <span className="navbar-item">
                    <Link className="button is-success is-inverted" to="/login">
                      {/* <span className="icon">
                        <i className="fab fa-github"></i>
                      </span> */}
                      <span>Iniciar sesión</span>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </header>
        </div>

        {/* <!-- Hero content: will be in the middle --> */}
        <div className="hero-body">
          <Routes>
            <Route path="/" element={
              <div className="container has-text-centered">
                <p className="title is-italic is-4">&quot;La web donde puedes practicar&quot;</p>
                <p className="subtitle">page 1</p>
              </div>} />
            <Route path="/tutorial" element={
              <div className="container has-text-centered">
                <p className="title">Tutorial</p>
                <p className="subtitle">page 2</p>
              </div>
            } />
            <Route path="/login" element={
              // <div className="container has-text-centered">
              //   <p className="title">Login</p>
              //   <p className="subtitle">page 3</p>
              // </div>
              <LoginForm/>
            } />
          </Routes>
          
        </div>

        {/* <!-- Hero footer: will stick at the bottom --> */}
        {/* <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth">
            <div className="container">
              <ul>
                <li className="is-active"><a>Overview</a></li>
                <li><a>Modifiers</a></li>
                <li><a>Grid</a></li>
                <li><a>Elements</a></li>
                <li><a>Components</a></li>
                <li><a>Layout</a></li>
              </ul>
            </div>
          </nav>
        </div> */}
      </section>
    </>
  )
}

export default App
