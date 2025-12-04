import React from "react";

export default function Journey() {
  const steps = [
    {
      id: 1,
      label: "Step 1",
      title: "Sign Up & Choose a Domain",
      description:
        "Explore a wide range of internships across various industries, tailored to match your skills.",
      active: true,
    },
    {
      id: 2,
      label: "Step 2",
      title: "Fill out the Desired Form",
      description:
        "Fill out a quick application form to and secure your internship opportunity.",
      active: false,
    },
    {
      id: 3,
      label: "Step 3",
      title: "Earn Your Certificate",
      description:
        "Complete your internship, gain valuable hands-on experience, and receive a certificate",
      active: false,
    },
  ];
  return (
    <section className="w-full  mx-auto py-12 md:py-20 text-white bg-[var(--bg)] px-10 flex flex-col items-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 max-w-[1300px] ">
        <div className="lg:col-span-5 flex flex-col justify-center items-start space-y-8">
          <div className="inline-block bg-[var(--dream)] text-[var(--text2)] px-4 py-1.5 rounded-full text-sm font-medium tracking-wide">
            How It Works
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[var(--text2)]">
            A Simple and Seamless <br />
            Process to Start Your <br />
            Internship Journey
          </h1>
        </div>

        <div className="lg:col-span-7 relative pl-0 md:pl-8">
          <div
            className="absolute left-[3.25rem] md:left-[5.25rem] top-8 bottom-20 border-l-2 border-dashed border-gray-600 hidden md:block"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {steps.map((step) => (
              <div
                key={step.id}
                className="relative flex flex-col md:flex-row items-start md:items-center gap-6"
              >
                <div className="flex-shrink-0 z-10">
                  <span
                    className={`
                      inline-flex items-center justify-center 
                      px-6 py-2 rounded-3xl text-sm font-bold tracking-wide
                      min-w-[80px]
                      ${
                        step.active
                          ? "bg-[var(--brand)] text-white shadow-[0_0_15px_rgba(78,159,54,0.4)]"
                          : "bg-[#1e1e1e] white"
                      }
                    `}
                  >
                    {step.label}
                  </span>
                </div>

                <div className="flex-grow w-full bg-[var(--bgCard3)] rounded-2xl p-6 md:p-8 border border-white/5 shadow-xl">
                  <h3 className="text-xl font-bold text-[var(--text2)] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[var(--text2)] text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-16 md:mt-24">
        <a
          href="https://accounts.internee.pk/sign-in?redirect_url=https%3A%2F%2Fwww.internee.pk%2Fdashboard"
          className="bg-[var(--brand)] transition-colors text-white font-semibold text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-green-900/50 cursor-pointer"
        >
          Get Started Now
        </a>
      </div>
    </section>
  );
}
