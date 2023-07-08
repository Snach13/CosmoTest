import favicon from "../assets/favicon.png";
import facebook from "../assets/facebook_icon.svg";
import instagram from "../assets/instagram_icon.svg";
import twitter from "../assets/twitter_icon.svg";
import music from "../assets/music_icon.svg";
import mail from "../assets/mail_icon.svg";




const Navbar = () => {
  return (
    <div className="flex w-full space-between m-2 space-x-2">
      <div className="mr-1">
        <img src={favicon} alt="favicon" />
      </div>
      <div className="flex w-full cursor-pointer bg-black opacity-60 rounded-tr-3xl rounded-bl-3xl shadow border border border border border-neutral-700">
        <div className="flex-grow ml-10  flex flex-row items-center justify-center">
          <p className="text-white ml-10 font-semibold underline underline-offset-8">MINT</p>
          <p className="text-white font-semibold ml-10">ABOUT</p>
        </div>
        <div className="flex justify-items-end space-x-3 mr-5">
          <img src={facebook} alt="Facebook" />
          <img src={instagram} alt="Instagram" />
          <img src={twitter} alt="Twitter" />
          <img src={music} alt="Music" />
        </div>
      </div>
      <img src={mail} alt="mailicon" />
    </div>
  );
};

export default Navbar;
