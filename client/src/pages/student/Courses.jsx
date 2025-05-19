import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import Course from "./Course";
import { useGetPublishedCourseQuery } from "@/features/api/courseApi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Courses = () => {
  const { data, isLoading, isError } = useGetPublishedCourseQuery();

  if (isError) return <h1>Some error occurred while fetching courses.</h1>;

  return (
    <>
      <div className="bg-gray-50 dark:bg-[#141414]">
        <div className="max-w-7xl mx-auto p-6">
          <h2 className="font-bold text-3xl text-center mb-10">Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {isLoading
              ? Array.from({ length: 8 }).map((_, index) => (
                  <CourseSkeleton key={index} />
                ))
              : data?.courses &&
                data.courses.map((course, index) => (
                  <Course key={index} course={course} />
                ))}
          </div>
        </div>
      </div>

      {/* FOOTER SECTION */}
      <footer className="text-gray-600 body-font">
        <div className="container bg-slate-200 px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <span className="ml-3 text-xl">
                abh<span className="text-cyan-400 text-3xl">yas</span>{" "}
              </span>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Empowering learners with quality education online.
            </p>
          </div>

          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            {[
              {
                title: "Courses",
                links: [
                  "Web Development",
                  "Data Science",
                  "UI/UX Design",
                  "Cybersecurity",
                ],
              },
              {
                title: "Resources",
                links: ["Blog", "Tutorials", "FAQs", "Documentation"],
              },
              {
                title: "About",
                links: ["Our Mission", "Team", "Careers", "Contact Us"],
              },
              {
                title: "Support",
                links: [
                  "Help Center",
                  "Privacy Policy",
                  "Terms of Use",
                  "Community",
                ],
              },
            ].map((section, idx) => (
              <div key={idx} className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  {section.title}
                </h2>
                <nav className="list-none mb-10">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-600 hover:text-gray-800">
                        {link}
                      </a>
                    </li>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} LMS Academy —
              <a
                href="https://yourlmslink.com"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @yourhandle
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start gap-3">
              <a href="#" className="text-gray-500">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-500">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-500">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-500">
                <FaLinkedinIn />
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Courses;

const CourseSkeleton = () => {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
      <Skeleton className="w-full h-36" />
      <div className="px-5 py-4 space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-4 w-20" />
          </div>
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-4 w-1/4" />
      </div>
    </div>
  );
};
