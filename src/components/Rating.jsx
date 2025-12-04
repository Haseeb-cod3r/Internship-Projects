import React from "react";
import { RatingComponent } from "./RatingComponent";
import kashan from "../assets/images/kashan.webp";
import aysha from "../assets/images/aysha.webp";
import aliraza from "../assets/images/aliraza.webp";
import rafiq from "../assets/images/rafiq.webp";

export default function Rating() {
  const data = [
    {
      name: "Kashan Soomro",
      location: "Karachi, Pakistan",
      testimonial:
        "Thanks to internee.pk, I grew up my skills here and now I am working as a Flutter Developer in a US company.",
      image: kashan,
      id: 3,
    },
    {
      name: "Ayesha Khan",
      location: "Lahore, Pakistan",
      testimonial:
        "Internee.pk gave me the best learning experience. Now I'm a software engineer at a top firm.",
      image: aysha,
      id: 4,
    },
    {
      name: "Ali Raza",
      location: "Islamabad, Pakistan",
      testimonial:
        "I built my confidence and technical skills through this platform. Highly recommended!",
      image: aliraza,
      id: 1,
    },
    {
      name: "Mohammad Rafiq",
      location: "Larkana, Pakistan",
      testimonial:
        "I find internee.pk to be an outstanding to get hands on experience. Sometimes you have to spend.",
      image: rafiq,
      id: 2,
    },
  ];

  return (
    <div className="bg-[var(--bg)] p-1 px-10 flex flex-col items-center ">
      <div className="max-w-[1300px] flex gap-10 items-center max-md:flex-col ">
        <div className="flex flex-col gap-5 items-start mt-15 mb-15 w-full max-md:items-center">
          <div className="inline-block bg-[var(--dream)] text-[var(--text2)] px-4 py-1.5 rounded-full text-sm font-medium tracking-wide">
            How It Works
          </div>

          <h1 className="text-[clamp(2rem,4vw,4rem)] leading-tight tracking-tight text-[var(--text2)] max-md:text-center">
            A Simple and Seamless <br />
            Process to Start Your <br />
            Internship Journey
          </h1>
          <a
            href="https://linktr.ee/internee.pk"
            className="px-5 py-2 bg-[var(--brand)] rounded-2xl hover:bg-transparent border-2 border-transparent hover:border-2 hover:border-[var(--brand)] cursor-pointer transition duration-[.22s] ease-in-out text-white"
          >
            Join Our Community
          </a>
        </div>
        <div className="flex flex-col items-center gap-3 w-full ">
          <div className="flex w-[450px] max-sm:w-[320px] h-[300px] overflow-hidden">
            <div className="flex items-end animate-slider mb-3 ">
              {data.map(({ name, location, image, testimonial, id }) => {
                return (
                  <RatingComponent
                    key={id}
                    name={name}
                    location={location}
                    imageUrl={image}
                    testimonial={testimonial}
                  />
                );
              })}
            </div>
            <div className="flex items-end animate-slider mb-3">
              {data.map(({ name, location, image, testimonial, id }) => {
                return (
                  <RatingComponent
                    key={id}
                    name={name}
                    location={location}
                    imageUrl={image}
                    testimonial={testimonial}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
