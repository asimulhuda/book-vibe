import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="lg:flex space-y-10 justify-center gap-20 items-center lg:px-[120px] lg:py-20 px-6 py-10 bg-[#1313130D] rounded-3xl">
      <div className="">
        <h1 className="lg:text-[56px] lg:leading-[70px] text-4xl font-bold mb-10">
          Books to freshen <br /> up your bookshelf
        </h1>
        <Link
          to="/listedbooks"
          className="py-4 px-6 border-[1px] hover:text-[#23BE0A] hover:border-[#23BE0A] text-lg font-semibold rounded-lg transition hover:bg-[#fff] bg-[#23BE0A] text-white"
        >
          View The List
        </Link>
      </div>
      <img src="hero-book.png" alt="Hero Book" />
    </div>
  );
};

export default Hero;
