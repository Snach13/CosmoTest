import favicon from "../assets/favicon.png";
import facebook from "../assets/facebook_icon.svg";
import instagram from "../assets/instagram_icon.svg";
import twitter from "../assets/twitter_icon.svg";
import music from "../assets/music_icon.svg";
import mail from "../assets/dark_mail_icon.svg";

const Navbar = () => {
  return (
    <div className="flex w-full space-between m-2">
      <div className="mr-1">
        <img src={favicon} alt="favicon" />
      </div>
      <div className="flex w-full justify-center items-center bg-black opacity-60 rounded-tr-3xl rounded-bl-3xl shadow border border border border border-neutral-700">
        <p className="text-white mr-3 font-semibold">MINT</p>
        <p className="text-white font-semibold">ABOUT</p>
        <div className="flex justify-end">
          <img src={facebook} alt="Facebook" />
          <img src={instagram} alt="Instagram" />
          <img src={twitter} alt="Twitter" />
          <img src={music} alt="Music" />
        </div>
      </div>
      <div>
        <img src={mail} alt="mail" />
      </div>
    </div>
  );
};

export default Navbar;
