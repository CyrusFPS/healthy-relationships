function App() {
  return (
    <body className="App font-Poppins">

      {/* Header */}
      <header>
        <nav className="container flex items-center py-4 mt-4 sm:mt-12">
          <div className="py-1"><img className="w-1/6 h-1/6" src="./images/sadd.png" alt="logo" /></div>
          <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs">
            <li className="cursor-pointer ">Northbridge</li>
            <li className="cursor-pointer">SADD</li>
            <li className="cursor-pointer">Contact</li>
            <button type="button" className="bg-sadd-pink text-white rounded-md px-7 py-3 uppercase">Login</button>
          </ul>
          <div className="flex sm:hidden flex-1 justify-end">
            <i className="fas fa-bars text-xl"></i>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
          
          {/* Content */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
              Dating Violence Prevention
            </h2>
            <p className="text-sadd-grey text-lg text-center lg:text-left mb-6">
              Our goal is to help students foster safe, healthy relationships. We will discuss what consent and rape/sexual assault is,
              as well as dating safety and sexual assault and rape prevention.
            </p>
            <div className="flex justify-center flex-wrap gap-6">
              <button type="button" className="btn btn-purple hover:bg-sadd-white hover:text-black">Our Presentation</button>
              <button type="button" className="btn btn-white hover:bg-sadd-pink hover:text-white">Learn More</button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
            <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="./images/hero-bg.png" alt="" />
          </div>

          {/* Rounded Rectangle */}
          <div className="hidden md:block overflow-hidden bg-sadd-pink rounded-l-full absolute h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-36"></div>
        </div>
      </section>
    </body>
  )
}

export default App
