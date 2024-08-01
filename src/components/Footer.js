const Footer = () => {
  return (
    <div className="relative w-full h-[400px] pt-40 px-36 bg-black flex flex-col gap-y-8 -bottom-[1120px]">
      <div className="flex gap-x-10">
        <i className="fa-brands fa-facebook-f text-white fa-2xl cursor-pointer"></i>
        <i className="fa-brands fa-instagram text-white fa-2xl cursor-pointer"></i>
        <i className="fa-brands fa-twitter text-white fa-2xl cursor-pointer"></i>
        <i className="fa-brands fa-youtube text-white fa-2xl cursor-pointer"></i>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-y-8">
          <p className="text-white hover:underline cursor-pointer">
            Audio Description
          </p>
          <p className="text-white hover:underline cursor-pointer">
            Investor Relations
          </p>
          <p className="text-white hover:underline cursor-pointer">
            Legal Notices
          </p>
        </div>
        <div className="flex flex-col gap-y-8">
          <p className="text-white hover:underline cursor-pointer">
            Help Centre
          </p>
          <p className="text-white hover:underline cursor-pointer">Jobs</p>
          <p className="text-white hover:underline cursor-pointer">
            Cookie Preferences
          </p>
        </div>
        <div className="flex flex-col gap-y-8">
          <p className="text-white hover:underline cursor-pointer">
            Gift Cards
          </p>
          <p className="text-white hover:underline cursor-pointer">
            Terms of Use
          </p>
          <p className="text-white hover:underline cursor-pointer">
            Corporate Information
          </p>
        </div>
        <div className="flex flex-col gap-y-8">
          <p className="text-white hover:underline cursor-pointer">
            Media Centre
          </p>
          <p className="text-white hover:underline cursor-pointer">Privacy</p>
          <p className="text-white hover:underline cursor-pointer">
            Contact Us
          </p>
        </div>
      </div>
      <div className="flex items-baseline gap-x-2">
        <i className="fa-regular fa-copyright text-white fa-xs"></i>
        <p className="text-white text-xs">2004-2024 Netflix-GPT</p>
      </div>
    </div>
  );
};

export default Footer;
