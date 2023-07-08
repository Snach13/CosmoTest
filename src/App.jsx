import keyImage from "./assets/secondary_key.png";
import {
  Carousel,
  ExclusiveText,
  Footer,
  HeroMain,
  Navbar,
  Timer,
} from "./components";
import backgroundImage from "./assets/BG1.png";
import mainKey from "./assets/main_key.png";
import stars from "./assets/stars.png";
function App() {
  const products = [
    {
      id: 1,
      name: "WOODEN KEY",
      href: "#",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry’s.",
      imageSrc: keyImage,
    },
    {
      id: 1,
      name: "SILVER KEY",
      href: "#",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry’s.",
      imageSrc: keyImage,
    },
    {
      id: 1,
      name: "POUNAMU KEY",
      href: "#",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry’s.",
      imageSrc: keyImage,
    },
  ];
  
  return (
    <div className="bg-neutral-900 py-9 px-5  relative overflow-hidden">
      <img src={backgroundImage} className="absolute top-0 -z-0 scale-150" />
      <div className="z-10 relative">
        <Navbar />
        <div className="flex flex-col items-center justify-self-end">
          <Timer />
          <div className="flex items-center justify-between">
            <div className="w-2/5">
              <HeroMain />
            </div>
            <div className="w-2/5">
              <img src={mainKey} />
            </div>
            <div className="w-2/5 flex flex-col items-center">
              <img src={stars} className="mb-20"/>
              <div className="flex items-center mt-20">
                <div className="flex flex-col items-center mr-5">
                  <p className="text-white text-[30px] leading 10">333</p>
                  <p className="text-white text-sm leading-10">
                    Only 333 total
                  </p>
                </div>
                <div className="flex flex-col items-center mr-5">
                  <p className="text-white text-[30px] leading 10">35%</p>
                  <p className="text-white text-sm leading-10">Rare Keys</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-white text-[30px] leading 10">15%</p>
                  <p className="text-white text-sm leading-10">Legendary Keys</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ExclusiveText />
        <Carousel products={products} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
