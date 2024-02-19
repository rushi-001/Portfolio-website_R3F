import './App.css'

function App() {

  return (
    <>
      <header className="text-gray-400 bg-black body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0" href='#'>
            <img src="fav-icon.png" alt="logo" className='size-11'/>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-white " href='#'>about me</a>
            <a className="mr-5 hover:text-white " href='#'>Projects</a>
            <a className="mr-5 hover:text-white " href='#'>Contact</a>
          </nav>
        </div>
      </header>
    </>
  )
}

export default App
