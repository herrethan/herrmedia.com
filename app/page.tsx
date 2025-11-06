"use client";

import { useEffect, useState } from "react";
import { workItems, type WorkItem } from "./work-data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Home() {
  const [navRevealed, setNavRevealed] = useState(false);
  const [navOrange, setNavOrange] = useState(false);
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setNavRevealed(window.scrollY > 50);
      
      // Check if we've scrolled past the bottom of the work section
      const workSection = document.getElementById("work");
      if (workSection) {
        const workSectionBottom = workSection.offsetTop + workSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        setNavOrange(scrollPosition >= workSectionBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Call once on mount to set initial state
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          navOrange
            ? "bg-orange/80 backdrop-blur-sm shadow-md"
            : navRevealed
            ? "bg-white/5 backdrop-blur-sm shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <div className="opacity-0 animate-[fadeIn_0.5s_ease-in-out_0.3s_forwards]">
            <img
              src="/img/herrmedia.svg"
              alt="herrmedia"
              className="h-6 max-w-[5.5em]"
            />
          </div>
          <ul className="flex font-din gap-4 text-white tracking-wider text-lg">
            <li>
              <button
                onClick={() => scrollTo("work")}
                className="uppercase relative transition-opacity after:content-[''] after:absolute after:w-full after:h-px after:bg-white after:bottom-[-15px] after:left-0 after:opacity-0 hover:after:opacity-100 after:transition-opacity"
              >
                work
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo("about")}
                className="uppercase relative transition-opacity after:content-[''] after:absolute after:w-full after:h-px after:bg-white after:bottom-[-15px] after:left-0 after:opacity-0 hover:after:opacity-100 after:transition-opacity"
              >
                about
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo("contact")}
                className="uppercase relative transition-opacity after:content-[''] after:absolute after:w-full after:h-px after:bg-white after:bottom-[-15px] after:left-0 after:opacity-0 hover:after:opacity-100 after:transition-opacity"
              >
                contact
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/img/mate.jpg)" }}
        />
        <video
          className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-0 animate-fadeInVideo"
          autoPlay
          muted
          loop
          playsInline
          poster="/img/mate.jpg"
        >
          <source src="/img/mate.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-orange/50" />
      </section>

      {/* Work Section */}
      <section id="work" className="bg-gray-900 min-h-screen">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {workItems.map((item, index) => (
            <article
              key={index}
              className="relative aspect-square overflow-hidden border-r border-b border-gray-900 hover:shadow-xl hover:shadow-black/40 transition-all cursor-pointer group"
              style={{
                backgroundColor: `#${["323f4a", "45324a", "3e324a", "323c4a", "32364a", "32434a", "42324a", "32324a", "48324a", "32394a", "38324a", "4a3249", "32464a", "3b324a", "35324a"][index % 15]}`,
              }}
              onClick={() => setSelectedWork(item)}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors">
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity p-4">
                  <h2 className="font-din text-white text-2xl md:text-3xl text-center mb-4 uppercase">
                    {item.thumbtitle}
                  </h2>
                  <ul className="flex flex-wrap gap-2 justify-center">
                    {item.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="font-bold opacity-70 text-sm uppercase border rounded-full border-white text-white px-2 py-1"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Work Dialog */}
      <Dialog open={!!selectedWork} onOpenChange={(open) => !open && setSelectedWork(null)}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-sans text-2xl md:text-4xl text-center mb-8">
              {selectedWork?.title}
              {selectedWork?.subtitle && (
                <span className="block text-xl italic font-light mt-2">
                  {selectedWork.subtitle}
                </span>
              )}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-8">
            {selectedWork?.content.map((content, contentIndex) => (
              <div key={contentIndex}>
                {content.text && (
                  <p
                    className="font-sans mx-auto max-w-2xl font-light text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: content.text }}
                  />
                )}
                {content.img && (
                  <img
                    src={content.img}
                    alt={selectedWork.title}
                    className="w-full mt-4 mb-4"
                  />
                )}
                {content.media && (
                  <div
                    className="work-modal mt-4 mb-4"
                    dangerouslySetInnerHTML={{ __html: content.media }}
                  />
                )}
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* About Section */}
      <section
        id="about"
        className="max-w-3xl mx-auto px-8 py-16 text-center"
      >
        <h1 className="font-din text-4xl md:text-5xl text-gray-600 mb-8">
          about me
        </h1>
        <p className="font-sans font-light text-base leading-relaxed mb-6">
          My name is Ethan Herr. I'm a front end engineer and general digital
          stuff mover-arounder. I code, I animate, I make videos, I make
          websites, I make apps, I make music. I don't drink coffee, but enjoy a
          good cup of maté.
        </p>
        <p className="font-sans font-light text-base leading-relaxed mb-6">
          I try to keep my{" "}
          <a
            href="/img/resume.pdf"
            target="_blank"
            className="text-blue-600 hover:text-blue-800"
          >
            resume
          </a>{" "}
          up-to-date for the most part.
        </p>
        <img
          src="/img/e.jpg"
          alt="ethan herr"
          className="w-full max-w-[70%] mx-auto mb-6 block"
        />
        <p className="font-sans font-light text-base leading-relaxed">
          Truth be told, I'm a recovering Jazz musican and closet composer, and
          have a{" "}
          <a
            href="https://soundcloud.com/ethan-herr"
            target="_blank"
            className="text-blue-600 hover:text-blue-800"
          >
            collection of recordings
          </a>{" "}
          that fully indulges this alter-ego. I am passionate about all things
          artistic, and am certain I will remain conflicted about how best to
          express this throughout my years. But from day to day, I am obsessed
          with the minutiae of temporal experience. The way a melody is phrased,
          the way an element responds to interaction, the way a story draws you
          in, and the way you can communicate through seemingly familiar means
          while gradually and quietly dissolving layers of convention, so that
          at the right moment, that slightly odd or unexpected thing just hits
          home, awakening some new level of understanding. And if all goes well,
          you inspire the viewer attempt to achieve something just beyond their
          own understanding too.
        </p>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="max-w-3xl mx-auto px-8 py-16 text-center"
      >
        <h1 className="font-din text-4xl md:text-5xl text-gray-600 mb-8">
          contact me
        </h1>
        <p className="font-sans font-light text-base leading-relaxed mb-8">
          So here's the rub. Due to overflowing spam I'm not
          allowing contacts through this site. Please find me through a more "human-centric" means.
        </p>
        <form className="text-left max-w-md mx-auto">
          <label className="block mb-6">
            <span className="block mb-2">Name</span>
            <input
              type="text"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 text-xl font-light focus:outline-none focus:border-orange"
            />
          </label>
          <label className="block mb-6">
            <span className="block mb-2">Email</span>
            <input
              type="text"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 text-xl font-light focus:outline-none focus:border-orange"
            />
          </label>
          <label className="block mb-6">
            <span className="block mb-2">Comments</span>
            <textarea
              name="comments"
              rows={7}
              className="w-full px-3 py-2 border border-gray-300 text-xl font-light resize-none focus:outline-none focus:border-orange"
            />
          </label>
          <button
            type="submit"
            disabled
            className="font-din uppercase text-lg tracking-wider bg-orange text-white px-8 py-3 w-28 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 px-4 py-4 flex items-center justify-between flex-wrap">
        <p className="font-din text-white opacity-50 text-lg">
          ©{new Date().getFullYear()}{" "}
          <span className="block sm:inline">herrmedia</span>
        </p>
        <div className="flex gap-2 mt-4 sm:mt-0">
          <a
            href="https://github.com/herrethan/"
            target="_blank"
            className="w-12 h-12 rounded-full opacity-50 hover:opacity-90 transition-opacity bg-[url('/img/socials.png')] bg-[length:auto_25px] bg-[position:-141px_12px] bg-no-repeat"
            title="github"
          />
          <a
            href="https://www.linkedin.com/in/ethan-herr-4565893"
            target="_blank"
            className="w-12 h-12 rounded-full opacity-50 hover:opacity-90 transition-opacity bg-[url('/img/socials.png')] bg-[length:auto_25px] bg-[position:-41px_13px] bg-no-repeat"
            title="linkedin"
          />
          <a
            href="https://vimeo.com/herrethan/"
            target="_blank"
            className="w-12 h-12 rounded-full opacity-50 hover:opacity-90 transition-opacity bg-[url('/img/socials.png')] bg-[length:auto_25px] bg-[position:-95px_14px] bg-no-repeat"
            title="vimeo"
          />
        </div>
      </footer>

    </div>
  );
}

