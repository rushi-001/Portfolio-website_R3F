import { useEffect, useRef, useState } from "react";
import "./App.css";
import TypeWritter from "./TypeWritter";
import { useInView } from "react-intersection-observer";
import { MatrixRain } from "./MatrixRain";
import CanvasAnimation from "./CanvasAnimation";

// >> function for typewriter {not use this it have some problem which fixed in TyepWritter component}
// function TypeWriter({text, delay}){
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
//     }
//   }, [currentIndex, delay, text]);

//   return <span>{currentText}</span>
// }

function App() {
  const { ref: type, inView } = useInView();
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (inView && !isInView) {
      setIsInView(true);
    }
  }, [inView, isInView]);

  return (
    <>
      <header className="text-gray-400 bg-black body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
            href="#"
          >
            <img src="fav-icon.png" alt="logo" className="size-11" />
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-white " href="#section-01">
              About Me
            </a>
            <a className="mr-5 hover:text-white " href="#section-02">
              Projects
            </a>
            <a className="mr-5 hover:text-white " href="#section-03">
              Connect
            </a>
          </nav>
        </div>
      </header>

      <div id="body">
      
        <div id="section-00" className=" h-screen">
        {/* <MatrixRain numColumns="30" speed={100} /> */}
        <CanvasAnimation />
        </div>


        <div id="section-01" className="h-screen flex items-center">
          
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center lg:flex-grow ">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
              <div className="lg:flex lg:flex-col lg:items-center">
                <img
                  className="object-cover object-center rounded-full lg:w-80 lg:h-80 w-full h-auto mb-4"
                  alt="hero"
                  src="src/assets/gif-0.gif"
                />
                <div id="icons" className="flex flex-wrap justify-center">
                  <img
                    alt="testimonial"
                    className="m-2 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10 w-14 h-14 hover:scale-75 transition-transform duration-300 ease-out"
                    src="src/assets/html-icon.png"
                  />
                  <img
                    alt="testimonial"
                    className="m-2 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10 w-14 h-14 hover:scale-75 transition-transform duration-300 ease-out"
                    src="src/assets/css-icon.png"
                  />
                  <img
                    alt="testimonial"
                    className="m-2 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10 w-14 h-14 hover:scale-75 transition-transform duration-300 ease-out"
                    src="src/assets/js-icon.png"
                  />
                  <img
                    alt="testimonial"
                    className="m-2 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10 w-14 h-14 hover:scale-75 transition-transform duration-300 ease-out"
                    src="src/assets/react-icon.png"
                  />
                  <img
                    alt="testimonial"
                    className="m-2 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10 w-14 h-14 hover:scale-75 transition-transform duration-300 ease-out"
                    src="src/assets/tailwind-icon.png"
                  />
                  <img
                    alt="testimonial"
                    className="m-2 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10 w-14 h-14 hover:scale-75 transition-transform duration-300 ease-out"
                    src="src/assets/bootstrap-icon.png"
                  />
                </div>
              </div>
            </div>

            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:text-left">
              <div>
                <h1
                  ref={type}
                  className="title-font mb-4 font-medium text-white"
                >
                  {"> "}
                  {isInView && (
                    <TypeWritter text="I've been coding for a year now and have gained knowledge in HTML, CSS, JavaScript, React.js, Bootstrap, and R3F." />
                  )}
                  <br className="hidden lg:inline-block" />
                </h1>
              </div>

              <div className="flex items-center">
                
                <h1
                  ref={type}
                  className="title-font mb-4 font-medium text-white"
                >
                  {"> "}
                  {isInView && (
                    <TypeWritter text="I want to learn more about R3F websites & Software Development(C++, Js)." />
                  )}
                  <br className="hidden lg:inline-block" />
                </h1>
              </div>

              <div>
                <h1
                  ref={type}
                  className="title-font mb-4 font-medium text-white"
                >
                  {"> "}
                  {isInView && (
                    <TypeWritter text="I enjoy playing chess and video games in my free time." />
                  )}
                  <br className="hidden lg:inline-block" />
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div id="section-02" className="bg-blue-500 h-screen">
          <h1>blue</h1>
        </div>
        <div id="section-03" className="bg-green-500 h-screen">
          <h1>blue</h1>
        </div>
      </div>
    </>
  );
}

export default App;
