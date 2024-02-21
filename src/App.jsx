import './App.css'
import TypeWritter from './TypeWritter';

function App() {

  // >> function for typewriter
  // function typeWriter({text, delay}){
  //   const [currentText, setCurrentText] = useState('');
  //   const [currentIndex, setCurrentIndex] = useState(0);

  //   useEffect(()=>{
  //     let timeout;
  //     if(currentIndex <= text.length){
  //       timeout = setTimeout(() => {
  //         setCurrentText(prevText => prevText+text[currentIndex]);
  //         setCurrentIndex(prevIndex => prevIndex+1);
  //       }, delay);

  //       return ()=>clearTimeout(timeout);
  //     }else if (infinite) { 
  //       setCurrentIndex(0);
  //       setCurrentText('');
  //     }
  //   }, [currentIndex, delay, infinite, text]);

  //   return <span>{currentText}</span>
  // }

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
            <img src="src/assets/gif-0.gif" alt="photo-gif" className='rounded-full size-96'/>
            <div id='para' className='absolute right-6 text-wrap size-96'>
              <h1 className='text-wrap text-white ml-3'>
                - <TypeWritter text="I've been coding for a year now and have gained knowledge in HTML, CSS, JavaScript, React.js, Bootstrap, and R3F." delay={100} infinite />
              </h1>
              {/* - I've been coding for a year now and have gained knowledge in HTML, CSS, JavaScript, React.js, Bootstrap, and R3F. */}
              <br />
              <h1 className='text-wrap text-white ml-3'>
                hello
              </h1>
              {/* - I want to learn more about R3F websites & Software Development(C++, Js). */}
              <br />
              <h1 className='text-wrap text-white ml-3'>
                hello
              </h1>
              {/* - I enjoy playing and video games [Chess](https://www.chess.com/member/panchalrushi) in my free time. */}
            </div>
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
