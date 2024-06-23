import React from "react";
import PropTypes from "prop-types";

export const OtpVerified = ({ className = "" }) => {
  return (
    <div
      className={`flex-[0.8] rounded-3xl bg-white box-border flex flex-col items-start justify-between py-[4rem] px-[3.937rem] min-h-[56rem] max-w-full text-left text-[2rem] text-black font-roboto border-[1px] border-solid border-foundation-white-light-active lg:flex-1 lg:min-h-[auto] mq750:pl-[1.938rem] mq750:pr-[1.938rem] mq750:box-border mq450:pt-[1.688rem] mq450:pb-[1.688rem] mq450:box-border mq1050:pt-[2.625rem] mq1050:pb-[2.625rem] mq1050:box-border ${className}`}
    >
      <div className="flex flex-col items-start justify-start max-w-full gap-4">
        <div className="flex flex-row items-center justify-center gap-4 max-w-full">
          <img
            className="h-16 w-16 rounded-full"
            loading="lazy"
            alt=""
            src="/sn.png"
          />
          <h2 className="m-0 text-lg font-semibold">
            Registration Successfully
          </h2>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-center gap-4 text-center text-sm text-gray-800">
        <img
          className="w-24 h-24 rounded-full"
          loading="lazy"
          alt=""
          src="/check.png"
        />
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="m-0">For further benefits</p>
          <p className="m-0">Open Subandhan Nidhi Saving Account</p>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-center gap-4">
        <button className="w-full py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 focus:outline-none">
          Open Saving Account
        </button>
        <button className="w-full py-2 bg-transparent border border-blue-500 text-blue-500 font-medium rounded-lg hover:bg-blue-100 focus:outline-none">
          Skip for Now
        </button>
      </div>
    </div>
  );
};

OtpVerified.propTypes = {
  className: PropTypes.string,
};
