import React from "react";
import { projects } from "../../../constants";
import Image from "next/image";
import Link from "next/link";
import { arrow } from "../../../public/assets/icons";
import CTA from "../../../components/CTA";

const page = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I've embarked on numerous projects over the year's and below are few
          of my projects.
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <Image
                  src={project.iconUrl}
                  alt="Project Icon"
                  width={50}
                  height={50}
                  className=" w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferre"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <Image
                  src={arrow}
                  alt="arrow"
                  width={16}
                  height={16}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default page;
