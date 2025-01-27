import React from "react";

function Banner() {
  return (
    <>
      <div></div>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10  order-2">
        <div className="w-full md:w-1/2 mt-14 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcomes here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              At Your Next Read, we believe in the power of books to inspire,
              educate, and transform. Whether you're an avid reader or just
              starting your literary journey, we offer a wide range of books to
              suit every interest and passion.
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn btn-secondary mt-2">Secondary</button>
        </div>
        <div className="w-full md:w-1/2 order-1 ">
          <img
            src="https://img.freepik.com/free-photo/portrait-beautiful-woman-reading-book_23-2148464509.jpg?t=st=1718461543~exp=1718465143~hmac=fef3b8f923fceb7ac5caaa2c55aaf2c8af209082745b9a2fd30265f37a287e3e&w=996"
            alt=""
            className="md:w-[550px] md:h-[460px] md:ml-12 mt-12"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
