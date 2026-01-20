"use client";

export default function Projects() {
  const projects = [
    {
      title: "Delta State Health Information & Appointment Booking System",
      description: "A full-stack health platform for rural clinics, enabling appointment booking, patient records, and clinic discovery.",
      url: "https://deltahealth.usestudybuddy.org/",
      image: "/delta.png",
      tags: ["Next.js", "PHP", "MySQL", "Tailwind CSS", "Laravel"],
    },
    {
      title: "NFT Gallery",
      description: "A hands-on NFT gallery built with Next.js and RainbowKit, showcasing minting, listing, and user interaction features",
      url: "https://nft-gallery-zeta-two.vercel.app/",
      image: "/nft.png",
      tags: ["Next", "RainbowKit", "Moralis", "Tailwind CSS"],
    },
    {
      title: "Chef Marv",
      description: "A React-based platform offering interactive features for a personalized user experience.",
      url: "https://chefmarvv.vercel.app/",
      image: "/chef.png",
      tags: ["React", "Tailwind CSS"],
    },

    {
      title: "Writers portfolio",
      description: "Design + copywriting services to grow your brand.",
      url: "https://lara-s-port.vercel.app/",
      image: "/image.png",
      tags: ["React", "Tailwind CSS"],
    },
    
  ];

  return (
    <section id="projects" className="py-20 px-6 sm:px-8 lg:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Here's What I've Been Up To
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Some of the websites and projects I've built
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300"
            >
              {project.image && (
                <div className="mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
              )}

              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-700 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center text-blue-600 text-sm font-medium group-hover:gap-2 transition-all">
                View Project
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
