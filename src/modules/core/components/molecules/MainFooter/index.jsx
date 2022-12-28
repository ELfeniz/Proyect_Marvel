import './styles.scss';

import { AiFillFacebook } from "react-icons/ai";
import { BsChatLeftText } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsSnapchat } from "react-icons/bs";
import { BsRssFill } from "react-icons/bs";
import { BsCloud } from "react-icons/bs";

export default function MainFooter() {
  return (
    <div className="mvl-main-footer">
      <div>
        <div className="container-3">
          <div className="row">
            <div className="col">
              <div className="contenerdor_img_pie">
                <img className="imagen_3f" src="/images/pie_pagina.jpg"></img>
              </div>
            </div>
            <div className="col">
              <div className="contenerdor_dat_pie1">
                <button className="btn-text1">ABOUT MARVEL</button>
                <button className="btn-text1">HELP/FAQS</button>
                <button className="btn-text1">CAREERS</button>
                <button className="btn-text1">INTERNSHIPS</button>
              </div>
            </div>
            <div className="col">
              <div className="contenerdor_dat_pie2">
                <button className="btn-text1">ADVERTISING</button>
                <button className="btn-text1">DISNEY+</button>
                <button className="btn-text1">MARVELHQ.COM</button>
                <button className="btn-text1">REDEEM DIGITAL COMICS</button>
              </div>
            </div>
            <div className="col">
              <div className="contenerdor_dat_pie3">
                <button className="pie_f">
                  <img className="imagen_1p" src="/images/pie1.png" to="/NEWS"></img> MARVEL INSIDER
                </button>
                <button className="pie_f2">
                  <img className="imagen_2p" src="/images/pie2.jpg"></img> MARVEL UNLIMITED
                </button>
              </div>
            </div>
            <div className="col">
              <div className="contenerdor_dat_pie4">
                <h5> FOLLOW MARVEL</h5>
                <button className="pie_icon1f">
                  <BsCloud />
                </button>
                <button className="pie_icon1">
                  <AiFillFacebook />
                </button>
                <button className="pie_icon1">
                  <BsRssFill />
                </button>
                <button className="pie_icon1">
                  <BsChatLeftText />
                </button>
                <button className="pie_icon1">
                  <BsYoutube />
                </button>
                <button className="pie_icon1">
                  <BsSnapchat />
                </button>
              </div>
            </div>
          </div>
          <div className="row" >
              <div className="col">
                <div className="contenerdor_dat_pie5">
                  <button className="btn-text1">Terms of Use</button>
                </div>
              </div>
              <div className="col">
                <div className="contenerdor_dat_pie6">
                  <button className="btn-text1">Privacy Policy</button>
                </div>
              </div>
              <div className="col">
                <div className="contenerdor_dat_pie7">
                  <button className="pie_datf1">Your California Privacy Rights</button>
                </div>
              </div>
              <div className="col">
                <div className="contenerdor_dat_pie8">
                  <button className="pie_datf2">Do Not Sell My Personal Information</button>
                </div>
              </div>
              <div className="col">
                <div className="contenerdor_dat_pie9">
                  <button className="pie_datf3">Children`s Online Privacy Policy</button>
                </div>
              </div>
              <div className="col">
                <div className="contenerdor_dat_pie10">
                  <button className="pie_datf4">License Agreement</button>
                </div>
              </div>
              <div className="col">
                <div className="contenerdor_dat_pie11">
                  <button className="pie_datf5">Interest-Based Ads</button>
                </div>
              </div>
            </div>
          <div className="row">
            <div className="col">
              <div className="contenerdor_dat_pie12">
                <button className="btn-text1">Marvel Insider Terms</button>
              </div>
            </div>
            <div className="col">
              <div className="contenerdor_dat_pie13">
                <button className="btn-text1">©2022 MARVEL</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
