import React from "react";

function Footer() {
  return (
    <footer className="fixed w-full left-0 bottom-0">
      <section className="w-full h-[100px] flex items-center px-[300px] text-md font-normal text-secondary">
        <div className="w-full flex justify-end">
          <p className="pr-[30px]">
            <span>Privacy Policy</span>
          </p>
          <p className="px-[30px] border-l border-[#5A5968]">
            <span>Security</span>
          </p>
          <p className="px-[30px] border-x border-[#5A5968]">
            <span>Cookie Policy</span>
          </p>
          <p className="pl-[30px]">
            <span>Terms and Conditions</span>
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
