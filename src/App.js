import Header from "./Components/Header";
import hero from "./image/image-web-3-desktop.jpg";
import pc from "./image/image-retro-pcs.jpg";
import laptops from "./image/image-top-laptops.jpg";
import gaming from "./image/image-gaming-growth.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    AOS.init();
    setOpen(false);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <main
      className={`min-h-screen container mx-auto px-5 relative ${
        open && "backdrop-brightness-75"
      }`}
    >
      <Header setOpen={setOpen} open={open} />
      {open ? (
        <div className="flex flex-col h-full max-w-full left-56 sm:hidden inset-0 absolute bg-Offwhite z-40">
          <div className="flex flex-col items-end p-6  w-full">
            <button className="text-4xl" onClick={handleClose}>
              &#88;
            </button>
          </div>
          <ul className="flex flex-col px-4 gap-6 text-lg">
            <li>Home</li>
            <li> New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
        </div>
      ) : null}
      <section className="flex flex-col sm:flex-row gap-5 ">
        <section className="flex flex-col max-w-4xl mt-4 gap-6">
          <img src={hero} className=" bg-cover" />

          <section className="flex flex-col sm:flex-row justify-center items-center w-full font-sans">
            <div className="sm:w-1/2 ">
              <h1 className="font-sans font-bold text-6xl">
                The Bright Future of <br></br>Web 3.0?
              </h1>
            </div>
            <div className="flex flex-col sm:w-1/2 ">
              <p className="text-[15px] text-Darkgrayishblue">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="text-white font-sans bg-Softred px-5 py-2 w-40 mt-10 font-medium text-sm">
                READ MORE
              </button>
            </div>
          </section>
        </section>
        <section
          className="flex flex-col sm:w-96 max-h-full mt-4 bg-Verydarkblue p-6 gap-10"
          data-aos="zoom-in"
          data-aos-duration="500"
        >
          <h1 className="text-Softorange text-4xl font-bold">New</h1>
          <div className="border-b-[1px] border-white pb-10">
            <h2 className="text-white font-bold">Hydrogen VS Eletric Cars</h2>
            <p className="font-sans text-[15px]  text-Grayishblue">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>
          <div className="border-b-[1px] border-white pb-10">
            <h2 className="text-white font-bold">
              The Downsides of AI Artistry
            </h2>
            <p className="font-sans text-[15px]  text-Grayishblue">
              What are the possible adverse effects of on-demand AI image
              generation?{" "}
            </p>
          </div>
          <div>
            <h2 className="text-white font-bold">Is VC Funding Drying UP? </h2>
            <p className="font-sans text-[15px]  text-Grayishblue">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </section>
      </section>
      <section className="flex flex-col sm:flex-row sm:justify-evenly sm:items-center w-full gap-10 h-max mt-16 mb-10">
        <div
          className="flex gap-4  border-2 border-black"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          <img src={pc} className="" />
          <div className="flex flex-col gap-4 ">
            <h1 className=" text-4xl text-Grayishblue">01</h1>
            <h2 className="font-bold text-black">Reviving Retro PCs</h2>
            <p className="text-normal font-normal text-[12px]">
              What happens when old PCs are given modern upgrades?{" "}
            </p>
          </div>
        </div>
        <div
          className="flex gap-4  border-2 border-black"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
        >
          <img src={laptops} className="max-w-sm" />
          <div className="flex flex-col gap-4 ">
            <h1 className=" text-4xl text-Grayishblue">02</h1>
            <h2 className="font-bold text-black">Top 10 Laptops of 2022</h2>
            <p className="text-normal font-normal text-[12px]">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div
          className="flex gap-4  border-2 border-black"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine"
        >
          <img src={gaming} className="max-w-sm" />
          <div className="flex flex-col  gap-4 ">
            <h1 className=" text-4xl text-Grayishblue">03</h1>
            <h2 className="font-bold text-black">The Growth of Gaming</h2>
            <p className="text-normal font-normal text-[12px]">
              How the pandemic has sparked fresh opportunities
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
