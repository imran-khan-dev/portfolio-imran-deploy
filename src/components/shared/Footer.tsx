import ContactMe from "../modules/Home/ContactMe";

function Footer() {

  return (
    <footer id="contact" className="px-4 sm:px-6 lg:px-8 font-inter relative overflow-hidden ">
      {/* <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        <p className="text-center text-xs text-gray-500 dark:text-gray-500 mt-4">
          &copy; {new Date().getFullYear()} Imran Khan.{" "}
        </p>
      </div> */}
      <ContactMe/>
    </footer>
  );
}

export default Footer;
