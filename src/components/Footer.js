import { PLAY_STORE, APPLE_STORE, FOOTER_LOGO, INSTA_LOGO, LINKEDIN_LOGO, TWITTER_LOGO, FACEBOOK_LOGO } from "../utils/constants";
import Body from "./Body";

const Footer = () => {

  
  return (
    <footer>
      <div className="bg-gray-300 py-7 mx-auto ">
        <div className="relative">
          {/* Header Text */}
          <h1 className="text-3xl font-bold absolute top-1 left-0">
            For better experience, download the Hangry app now
          </h1>
          <div className="flex justify-end items-center mr-20 mt-9 gap-4">
            <img className="w-40 h-auto" src={PLAY_STORE} alt="Google Play Store" />
            <img className="w-40 h-auto" src={APPLE_STORE} alt="App Store" />
          </div>
        </div>
      </div>

      <div className="bg-white py-32 p-4 relative">
        <div className="grid grid-cols-4 text-black text-center absolute top-5 gap-x-64 gap-y-8 mx-28">
          <div>
            <img className="w-24" src={FOOTER_LOGO} alt="Footer Logo" />
            <p className="text-lg">© 2024 Hangry Limited</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Company</h3>
            <ul className="mt-4">
              <li>About Us</li>
              <li>Life at Hangry</li>
              <li>Hangry DineOut</li>
              <li>Hangry Instamart</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-2 ">Contact Us</h3>
            <ul className="mt-4">
              <li>Help & Support</li>
              <li>Partner with us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl">Legal</h3>
            <ul className="mt-4">
              <li>Terms & Conditions</li>
              <li>Cookie Policy</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl">Social Links</h3>
            <ul className="flex items-center list-none gap-7 mt-2">
              <li>
                <img className="w-12 h-9 object-contain" src={INSTA_LOGO} alt="Insta Icon" />
              </li>
              <li>
                <img className="w-12 h-9 object-contain" src={LINKEDIN_LOGO} alt="LinkedIn Icon" />
              </li>
              <li>
                <img className="w-12 h-9 object-contain" src={TWITTER_LOGO} alt="Twitter Icon" />
              </li>
              <li>
                <img className="w-12 h-9 object-contain" src={FACEBOOK_LOGO} alt="Facebook Icon" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </footer>
    
  );
};

export default Footer;
