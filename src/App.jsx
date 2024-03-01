import { useEffect, useState } from "react";
import "./App.css";
import TypeWritter from "./TypeWritter";
import { useInView } from "react-intersection-observer";
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
            href="index.html"
          >
            <img src="public/avtar-bg-yellow.png" alt="logo" className="size-14 rounded-full" />
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

      <div id="body " className="!snap-y scroll snap-mandatory !scroll-smooth">
      
        <div id="section-00" className=" lg:h-screen lg:flex h-full md:snap-center">
        {/* <MatrixRain numColumns="30" speed={100} /> */}
          <CanvasAnimation />
        </div>

        <div id="section-01" className="lg:h-screen lg:flex h-full flex items-center snap-center scroll-area">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center lg:flex-grow">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
              <div className="lg:flex lg:flex-col lg:items-center">
                <img
                  className="object-cover object-center rounded-full lg:w-80 lg:h-80 w-full h-auto mb-4"
                  alt="hero"
                  src="public/gif-0.gif"
                />
                <div id="icons" className="flex flex-wrap justify-center">
                  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" className="img-link cursor-pointer">
                    <img
                      alt="testimonial"
                      className="m-2 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10 w-14 h-14 hover:scale-75 transition-transform duration-300 ease-out"
                      src="public/html-icon.png"
                      href="www.google.com"
                      target="_blank"
                    />
                  </a>

                  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" className="img-link cursor-pointer">
                    <img
                      alt="testimonial"
                      className="m-2 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10 w-14 h-14 hover:scale-75 transition-transform duration-300 ease-out"
                      src="public/css-icon.png"
                    />
                  </a>

                  <a href="https://developer.mozilla.org/en-US/docs/Web/JAVASCRIPT" target="_blank" className="img-link cursor-pointer">
                    <img
                      alt="testimonial"
                      className="m-2 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10 w-14 h-14 hover:scale-75 transition-transform duration-300 ease-out"
                      src="public/js-icon.png"
                    />
                  </a>

                  <a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started" target="_blank" className="img-link cursor-pointer">
                    <img
                      alt="testimonial"
                      className="m-2 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10 w-14 h-14 hover:scale-75 transition-transform duration-300 ease-out"
                      src="public/react-icon.png"
                    />
                  </a>

                  <a href="https://tailwindcss.com/docs/installation/play-cdn" target="_blank" className="img-link cursor-pointer">
                    <img
                      alt="testimonial"
                      className="m-2 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10 w-14 h-14 hover:scale-75 transition-transform duration-300 ease-out"
                      src="public/tailwind-icon.png"
                    />
                  </a>

                  <a href="https://getbootstrap.com/docs/5.2/getting-started/introduction/#cdn-links" target="_blank" className="img-link cursor-pointer">
                    <img
                      alt="testimonial"
                      className="m-2 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10 w-14 h-14 hover:scale-75 transition-transform duration-300 ease-out"
                      src="public/bootstrap-icon.png"
                    />
                  </a>

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

        <div id="section-02" className="lg:h-screen lg:flex h-full snap-center flex-wrap scroll-area text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
              <div className="lg:w-2/3 mx-auto">
                <div className="flex flex-wrap w-full bg-gray-800 py-32 px-10 relative mb-4 overflow-hidden">
                  <img alt="gallery" className="hover:scale-105 transition-transform duration-300 w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="public/cover-img1.png" />
                  <div className="text-center relative z-10 w-full">
                    <h2 className="text-2xl text-white font-medium title-font mb-2">{"Wallpapers(ReactAPP)"}</h2>
                    <p className="leading-relaxed">This application allows users to search for photos using the Pixabay API.</p>
                    <a target="_blank" href="https://github.com/rushi-001/Photo-Finder_ReactApp"  className="mt-3 text-indigo-300 inline-flex items-center">Learn More
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a><br />
                    <a target="_blank" href="https://photo-finder-by-rushi.onrender.com/" className="mt-3 text-indigo-300 inline-flex items-center">Visit Site
                          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </a>
                  </div>
                </div>

                <div className="flex flex-wrap -mx-2">
                  <div className="px-2 w-1/2">
                    <div className="flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative overflow-hidden">
                      <img alt="gallery" className="hover:scale-105 transition-transform duration-300 w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="public/cover-img2.png" />
                      <div className="text-center relative z-10 w-full">
                        <h2 className="text-xl text-white font-medium title-font mb-2">Quote Finder</h2>
                        <p className="leading-relaxed">Displays a random quotes using API & more.</p>
                        <a target="_blank" href="https://github.com/rushi-001/Quote-finder_JavaScript" className="mt-3 text-indigo-300 inline-flex items-center">Learn More
                          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </a><br />
                        <a target="_blank" href="https://quote-finder-by-rushi.netlify.app/" className="mt-3 text-indigo-300 inline-flex items-center">Visit Site
                          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="px-2 w-1/2">
                    <div className="flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative overflow-hidden">
                      <img alt="gallery" className="hover:scale-105 transition-transform duration-300 w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="public/cover-img3.png" />
                      <div className="text-center relative z-10 w-full">
                        <h2 className="text-xl text-white font-medium title-font mb-2">Todo List</h2>
                        <p className="leading-relaxed">Users can add, delete, and mark tasks as completed.</p>
                        <a target="_blank" href="https://github.com/rushi-001/Todo-List-Applicaiton_JavaScript" className="mt-3 text-indigo-300 inline-flex items-center">Learn More
                          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </a>
                        <br/>
                        <a target="_blank" href="https://todo-list-by-rushi.netlify.app/" className="mt-3 text-indigo-300 inline-flex items-center">Visit Site
                          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

        </div>

        <div id="section-03" className="lg:h-screen lg:flex h-full snap-center scroll-area justify-center">
          <div className="container flex items-center text-center justify-center flex-col p-5">
            <h1 className="text-white text-2xl">
              <TypeWritter text="These platforms allows you to stay updated on me." />
            </h1>
            <span className="mt-5 flex flex-row">
              <a href="https://www.linkedin.com/in/rushi-panchal-b58730239/">
                <img src="public/linkedin-icon.png" alt="linkedIn-icon" className="transition-transform duration-300 transform hover:scale-110 h-20 w-20 m-3" />
              </a>
              <a href="https://www.linkedin.com/in/rushi-panchal-b58730239/">
                <img src="public/x-icon.png" alt="linkedIn-icon" className="transition-transform duration-300 transform hover:scale-110 h-20 w-20 m-3"/>
              </a>
              <a href="https://www.linkedin.com/in/rushi-panchal-b58730239/">
                <img src="public/instagram-icon.png" alt="linkedIn-icon" className="transition-transform duration-300 transform hover:scale-110 h-20 w-20 m-3"/>
              </a>
              <a href="https://www.linkedin.com/in/rushi-panchal-b58730239/">
                <img src="public/github-icon.png" alt="linkedIn-icon" className="transition-transform duration-300 transform hover:scale-110 h-20 w-20 m-3"/>
              </a>
            </span>

          </div>
        </div>


        <footer className="text-gray-400 bg-black body-font body-font">
          <div className="bg-black">
            <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <img src="public/avtar-bg-yellow.png" alt="logo" viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-white rounded-full" />
                <span className="text-gray-400 ml-3 text-xl">Rushi Panchal</span>
              </a>
              <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2024 Rushi Panchal —
                <a href="https://twitter.com/RUSHI76270899" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@RUSHI76270899</a>
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a href="mailto:panchalrushi2182004@gmail.com" className="text-gray-500">
                  <img src="public/email-icon.png" alt="logo" viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-white" />
                </a>
              </span>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}

export default App;