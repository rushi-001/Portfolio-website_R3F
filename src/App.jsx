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
            <a className="mr-5 hover:text-white " href='#section-01'>about me</a>
            <a className="mr-5 hover:text-white " href='#section-02'>Projects</a>
            <a className="mr-5 hover:text-white " href='#section-03'>Contact</a>
          </nav>
        </div>
      </header>
      <div id="body">
        <div id="section-00" className='bg-red-500 h-screen'>
          
        </div>
        <div id="section-01" className=' h-screen flex items-center'>
          <div className="AboutMe flex flex-row items-center ml-auto mr-auto">
            <img src="src/assets/gif-0.gif" alt="photo-gif" className='rounded-md size-60'/>
            <span id='para'>
              <p className='text-3xl text-white'>hello</p>
            </span>
          </div>
        </div>
        <div id="section-02" className='bg-blue-500 h-screen'>
          <h1>blue</h1>

        </div>
        <div id="section-03" className='bg-green-500 h-screen'>
          <h1>blue</h1>

        </div>
      </div>
    </>
  )
}

export default App
