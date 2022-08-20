import Footer from "../../assets/Footer/pondo_footer.svg";
import Meta from "../../assets/Footer/meta-ico.svg";
import Twitter from "../../assets/Footer/twitter-ico.svg";
import Youtube from "../../assets/Footer/youtube-ico.svg";
import Github from "../../assets/Footer/github-ico.svg";

export default function Foot() {
  return (
    <div className="bg-pondo-blue">
      <footer className="text-white px-4 py-5 max-w-screen-xl mx-auto">
        <div className="max-w-lg sm:mx-auto sm:text-center">
          <img src={Footer} className="w-28 sm:mx-auto" />
          <p className="leading-relaxed mt-5 text-[15px] xs:text-start sm:text-center">
            Sagittis eu volutpat odio facilisis mauris sit amet. Amet luctus
            venenatis lectus magn a fringilla urna porttitor rhoncus. Semper
            viverra nam libero justo laoreet sit. Pelle ntesque id nibh tortor
            id aliquet.
          </p>
        </div>
        <div className="mt-8 items-center justify-between sm:flex xs:text-start">
          <div className="mt-4 sm:mt-0 ">
            &copy; 2022 Pondo, All rights reserved.
          </div>
          <div className="mt-6 sm:mt-0 xs:mt-10">
            <ul className="flex items-center space-x-4">
              <li className="w-10 h-10 flex items-center justify-center">
                <a href="javascript:void()">
                  <img src={Meta} className="sm:mx-auto" />
                </a>
              </li>

              <li className="w-10 h-10 flex items-center justify-center">
                <a href="javascript:void()">
                  <img src={Twitter} className="w-28 sm:mx-auto" />
                </a>
              </li>

              <li className="w-10 h-10 flex items-center justify-center">
                <a href="javascript:void()">
                  <img src={Youtube} className="w-28 sm:mx-auto" />
                </a>
              </li>

              <li className="w-10 h-10 flex items-center justify-center">
                <a href="javascript:void()">
                  <img src={Github} className="w-28 sm:mx-auto" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
