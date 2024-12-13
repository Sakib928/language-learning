const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <a href="#">~日本~ Learn</a>

          <div className="flex flex-wrap justify-center mt-6 -mx-4">
            <a
              href="#"
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500"
              aria-label="Home"
            >
              Home
            </a>
            <a
              href="#"
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500"
              aria-label="About"
            >
              About
            </a>
            <a
              href="#"
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500"
              aria-label="Teams"
            >
              Teams
            </a>
            <a
              href="#"
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500"
              aria-label="Privacy"
            >
              Privacy
            </a>
            <a
              href="#"
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500"
              aria-label="Cookies"
            >
              Cookies
            </a>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500">
            © Copyright 2021. All Rights Reserved.
          </p>

          <div className="flex -mx-2">
            <a
              href="#"
              className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500"
              aria-label="Reddit"
            >
              Reddit
            </a>
            <a
              href="#"
              className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href="#"
              className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500"
              aria-label="Github"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
