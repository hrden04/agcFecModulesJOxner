/* eslint-disable max-len */
import React from 'react';
// import ReactDom from 'react-dom';

// eslint-disable-next-line func-style
const Review = () => (
  <div className="review_card">
    <div className="row_a_user_username">
      <img alt="user_image" />
      <span className="span_a_user_name"> username span </span>
    </div>
    <div className="row_b_stars_topdescrip">
      <img alt="review stars" />
      <span className="a_letter_space" />
      <a className="review-title" href="https://www.amazon.com/gp/customer-reviews/R20FQAWDMUM87L/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B00NNMB3KS">
        <span>
          "Great cooling pad that is quiet, well built, sturdy, doesn’t slide around,
          and cools air effectively!"
        </span>
      </a>
    </div>
    <span className="review_date"> Reviewed in the United States on October 7, 2018 </span>
    <div>
      <span className="item_specs"> item color: black+blue </span>
      <span className="verified"> verified purchase </span>
    </div>
    <div>
      <span className="mid_description_p1">
        My old Targus mat which has served me well has over time become extremely noisy. In researching pads as a replacement, I automatically discarded the higher priced ones with adjustable speeds, glowing LEDs, trendy designs, and whatnots considering my laptop would be covering all that expensive eye candy. My priorities were rather basic: (1) thin & lightweight, (2) cooling performance, and (3) quiet. The HV-F2056 fits the bill and works as advertised:
        <br />
        <br />
        Thin & lightweight: The design fits 15.6” – 17” which works for me. I have a MSI GS70 2QE Stealth Pro with a screen size of 17.3” and overall length of 16” and width of 11.25”. With both units side by side (with the exception of length), the Havit is almost the same width and thickness as my laptop. The aluminum wire mesh design makes it definitely lighter and seems sturdy enough for traveling, so no problem there.
      </span>
    </div>
    <div className="product_images">
      <img alt="review_image" />
      <img alt="review_image" />
      <img alt="review_image" />
    </div>
    <div>
      <span className="helpful_vote">141 people foun this helpful</span>
    </div>
    <div className="action_bar">
      <div>
        <span>
          <input className="a-button-input" type="submit" value="Helpful" />
        </span>
      </div>
      <span>
        |
      </span>
      <div>
        <span>
          <input className="a-button-input" type="submit" value="Comment" />
        </span>
      </div>
      <span>
        |
      </span>
      <div>
        <span>
          <input className="a-button-input" type="submit" value="Report Abuse" />
        </span>
      </div>
    </div>
  </div>
);

export default Review;
