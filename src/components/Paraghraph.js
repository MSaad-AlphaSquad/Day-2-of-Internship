import React from "react";

class Paragraph extends React.Component {
  render() {
    return (
      <div className="group m-8 ">
        <h1 className="p-5 font-bold group-hover:text-gray-300 group-hover:bg-blue-500 bg-yellow-500 sm:bg-green-500 md:bg-red-500 ">
          It will change color w.r.t screen Size!
        </h1>
        <p
          className=" p-5 group-hover:text-gray-300 group-hover:bg-blue-500 text-center sm:text-left md:text-right
             bg-yellow-500 sm:bg-green-500 md:bg-red-500 "
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
    );
  }
}

export default Paragraph;
