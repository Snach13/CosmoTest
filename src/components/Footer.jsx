import facebook from "../assets/dark_facebook_icon.svg";
import instagram from "../assets/dark_instagram_icon.svg";
import twitter from "../assets/dark_twitter_icon.svg";
import music from "../assets/dark_music_icon.svg";
import mail from "../assets/dark_mail_icon.svg";

export default function Footer() {
  return (
    <footer className="bg-[#FC2682] w-full flex items-center justify-between h-10 p-10">
      <div>
        <p className="text-base text-gray-100 md:order-1 md:mt-0">
          COPYRIGHT FAM COLLECTIVE 2023. ALL RIGHTS RESERVED
        </p>
      </div>

      <div className="flex space-x-3">
        <img src={facebook} alt="Facebook" />
        <img src={instagram} alt="Instagram" />
        <img src={twitter} alt="Twitter" />
        <img src={music} alt="Music" />
        <img src={mail} alt="Mail" />
      </div>

      <div>
        <p className="text-base text-gray-100 md:order-3 md:mt-0">
          TERMS AND CONDITIONS / PRIVACY POLICY
        </p>
      </div>
    </footer>
  );
}
