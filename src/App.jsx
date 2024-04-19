import DrawersImg from "./assets/images/drawers.jpg";
import MichelleImg from "./assets/images/avatar-michelle.jpg";
import ShareIcon from "./assets/images/icon-share.svg";
import ShareClickedIcon from "./assets/images/icon-share-clicked.svg";
import FacebookIcon from "./assets/images/icon-facebook.svg";
import TwitterIcon from "./assets/images/icon-twitter.svg";
import PinterestIcon from "./assets/images/icon-pinterest.svg";
import { useState } from "react";

export default function App() {
  const [shareIsClicked, setShareIsClicked] = useState(false);

  return (
    <div className="wrapper min-h-screen flex justify-center items-center p-3 bg-slate-100">
      <div className="card max-w-[740px] md:flex shadow-xl rounded-xl bg-white">
        <img
          src={DrawersImg}
          className="w-full md:max-w-[300px] object-cover rounded-t-xl md:rounded-tl-xl md:rounded-tr-none md:rounded-bl-xl"
          alt=""
        />

        <div className="card-body bg-white pb-5 p-9 md:pb-9 rounded-b-xl md:rounded-tr-xl md:rounded-br-xl relative">
          <p className="subject text-very-dark-grayish-blue text-xl font-bold mb-3">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </p>
          <p className="text-md text-desaturated-dark-blue font-medium leading-relaxed mb-8 md:mb-5">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>

          <div className="share flex justify-between items-center">
            <div className="author flex items-center gap-4">
              <img
                src={MichelleImg}
                alt=""
                className="w-11 h-11 rounded-full"
              />
              <div className="post">
                <div className="name text-md font-bold text-very-dark-grayish-blue">
                  Michelle Appleton
                </div>
                <div className="date text-md text-grayish-blue">
                  28 Jun 2020
                </div>
              </div>
            </div>
            <button
              onClick={() => setShareIsClicked(!shareIsClicked)}
              className={!shareIsClicked ? "inline-block" : "hidden"}
            >
              <img
                src={ShareIcon}
                className="p-3 rounded-full bg-light-grayish-blue"
                alt=""
              />
            </button>
            <button
              onClick={() => setShareIsClicked(!shareIsClicked)}
              className={shareIsClicked ? "inline-block" : "hidden"}
            >
              <img
                src={ShareClickedIcon}
                className="p-3 rounded-full bg-very-dark-grayish-blue"
                alt=""
              />
            </button>
          </div>

          {/* TOOLTIP */}
          <div
            className={`tooltip md:rounded-md flex md:justify-center items-center gap-4 bg-very-dark-grayish-blue absolute md:py-4 md:px-8 md:right-[-65px] md:bottom-[95px] right-0 bottom-0 w-full md:w-fit py-8 px-10
             ${shareIsClicked ? "block" : "hidden"}`}
          >
            <span className="md:text-xs text-sm tracking-[.5em] text-grayish-blue flex">
              SHARE
            </span>
            <img src={FacebookIcon} alt="" />
            <img src={TwitterIcon} alt="" />
            <img src={PinterestIcon} alt="" />
          </div>

          {/* Mobile Button Tooltop */}
          <button
            onClick={() => setShareIsClicked(!shareIsClicked)}
            className={`absolute z-10 bottom-[25px] right-[36px] md:hidden ${
              shareIsClicked ? "inline-block" : "hidden"
            }`}
          >
            <img
              src={ShareIcon}
              className="p-3 rounded-full bg-light-grayish-blue"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
}
