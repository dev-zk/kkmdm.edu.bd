"use client";
import React from "react";



function HeaderInner() {
  return (
    <div className=" font-mono font-bold">
      <img
        alt="kkmdm-log.png"
        src="https://github.com/dev-zk/kkmdm.edu.bd/blob/main/kkmdm-log.png?raw=true"
        data-hpc="true"
        class="Box-sc-g0xbh4-0 kzRgrI"
      />
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="md:flex items-center">
          <div className=" md:mr-2 mb-2 md:mb-0 text-3xl md:text-4xl lg:text-6xl ">
            KK<span className="text-blue-500">MDM</span>
          </div>
        </div>
        <div className="items-end">
          <div className="text-center md:text-center  px-2">
            <h3 className="font-bold text-sm md:text-base lg:text-lg">
              Ulipur, Kurigram
            </h3>
            <h3 className="text-sm md:text-base lg:text-lg">
              EIIN Number: 122690
            </h3>
          </div>
        </div>
      </div>

      <hr className="text-black text-3xl" />
    </div>
  );
}

export default HeaderInner;
