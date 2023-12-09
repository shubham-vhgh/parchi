import React from "react";
import PageTitle from "../../components/Common/PageTitle";

function AboutScreen() {
  return (
    <div>
      <div className="p-4">
        <div className="bg-white rounded-xl p-3 font-title">
          <PageTitle title="About Me" />
          <div className="mt-4 mb-5 flex flex-row items-center">
            {/* <img
              src=""
              className="h-12 mr-3"
              alt="akash"
            /> */}
            <div>
              <a
                href="https://www.linkedin.com/in/akash-a-dubey"
                target={"_blank"}
                className="underline cursor-pointer"
                rel="noreferrer"
              >
                Hi, I'm Akash Dubey
              </a>
              <h1>Founder Parची</h1>
            </div>
          </div>

          <PageTitle title="Parchi" />
          <div className="mt-2 pl-4 text-sm">
            <ul class="list-disc">
              <li> Can Easily Pre-Manage Your Products</li>
              <li> Can Easily Pre-Manage Your Clients</li>
              <li> Can Export PDF </li>
              <li> Can Export Image </li>
            </ul>
          </div>
          <div className="font-title mt-3 mb-5">
            <div>
              🤝 Join the Initiative
            </div>
            <div>
              📫 How to reach me{" "}
              <a
                href="mailto:akash.anil.dubey@gmail.com"
                className="underline cursor-pointer"
              >
                akash.anil.dubey@gmail.com
              </a>{" "}
              (or){" "}
            
            </div>
            
          </div>

          <PageTitle title="Contact" />
          <div className="mt-2 pl-1 text-sm">
            <a
              href="tel:+917741830638"
              className="underline cursor-pointer"
              target={"_blank"}
              rel="noreferrer"
            >
              {" "}
              +917741830638
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutScreen;
