import React from "react";

const Home = () => {
  const logos = [
    "https://th.bing.com/th/id/OIP.0qThwGUlnULLAz8MTnN9QwHaHa?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/R.99a29ede35ec2ddf1f968bcdb17dbfdd?rik=XCSlxNe4MX5SOg&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.1b29a538acb3efa07b2289d932b2daa9?rik=ewVrMYHVimf86g&pid=ImgRaw&r=0",
    "https://logowik.com/content/uploads/images/laravel8530.jpg",
    "https://th.bing.com/th/id/R.e607f62504265a56be194f965d3ac672?rik=COWQduMJeH2pBQ&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.9cd182c5ccfb93025e85ef98bc18c9cf?rik=kV7toJhArk1ocQ&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.2bee11a830bacc5ae9006df56b20c33a?rik=nXUBy4boCTrW8w&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.698519595d5bbc042a250fc356b4d12c?rik=gbCWwaLCVyHz9w&pid=ImgRaw&r=0",
    "https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png",
  ];

  const contactLinks = [
    {
      name: "linkedin-profile",
      src: "https://www.linkedin.com/in/kevin-zucca-a8837b27a/",
      img: "https://th.bing.com/th/id/R.d374b1a974d1afcf8633c39108cbb827?rik=Gvy92ry6CUcUHA&pid=ImgRaw&r=0",
    },
    {
      name: "github-profile",
      src: "https://github.com/KevinZucca",
      img: "https://www.pngall.com/wp-content/uploads/13/Github-Logo.png",
    },
  ];

  return (
    <>
      <div className="slide home" id="home">
        <div className="h-full grid grid-cols-2 overflow-hidden">
          {/* left part */}
          <div className="flex justify-end text-black">
            <div className="w-3/4 h-full flex flex-col justify-center items-start">
              <h1 className="text-9xl">Kevin Zucca</h1>
              <p className="text-4xl pl-2 mt-4">Junior Full Stack Developer</p>
            </div>
          </div>

          {/* right part */}
          <div className="flex justify-center items-center">
            <div className="w-3/4 h-3/4">
              <ul className="flex gap-5 justify-center p-3">
                {logos.map((logo, index) => (
                  <li key={index} className="w-20 h-20">
                    <img
                      className="w-full h-full object-contain"
                      src={logo}
                      alt="tech-logo"
                    ></img>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* contacts links */}
          <div>
            <ul className="text-left p-6 flex gap-3">
              {contactLinks.map((link, index) => (
                <li
                  key={index}
                  className="w-14 border border-black/50 rounded-full p-4 flex justify-center items-center"
                  id="contact-link"
                >
                  <a href={link.src}>
                    <img src={link.img} alt="logo-img"></img>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
