import ButtonWithOutline from "./ButtonWithOutline";

export default function HeroMain() {
  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
      <div className="px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
        <div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            It's time to unlock the{" "}
            <span className="text-[#26E2FF]">FAMVERSE</span>
          </h1>
          <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua ad ad non deserunt sunt.
          </p>
          <ButtonWithOutline text={"MINT FAM PASS"} />
        </div>
      </div>
    </div>
  );
}
