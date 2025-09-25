import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10  p-10 bg-neutral text-neutral-content">
      <div className="flex max-w-[1200px] mx-auto footer sm:footer-horizontal ">
        <nav className="flex-2">
          <h6 className="footer-title">BH-Ticketing System</h6>
          <p className="mr-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            minima deleniti praesentium deserunt magni excepturi iusto id
            repellat rerum ad soluta consequatur cupiditate, laudantium,
            similique fugit itaque ex, expedita consectetur pariatur unde iure
            possimus beatae. Accusamus modi temporibus fugit voluptate?
          </p>
        </nav>
        <nav className="flex-1">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex-1">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>

        <nav className="flex-1">
          <h6 className="footer-title">Information</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
          <a className="link link-hover">Join Us</a>
        </nav>

        <nav className="flex-1">
          <h6 className="footer-title">Social Links</h6>
          <a className="link link-hover">🌍 Twitter</a>
          <a className="link link-hover">🌍 Facebook</a>
          <a className="link link-hover">🌍 LinkedIn</a>
          <a className="link link-hover">🌍 Email</a>
        </nav>
      </div>
      <hr className="mt-12 max-w-[1200px] mx-auto text-gray-600" />
      <aside className="flex max-w-[1200px] mx-auto justify-center mt-8">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          BH-Ticketing System.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
