'use client'

export default function Articles() {
  const articles = [
    {
      title: 'Your Web3 Products UX Is Driving Users Away.',
      description: 'Why Poor UX Is Holding Back Web3 Adoption And How to Fix It',
      url: 'https://medium.com/@tobore/your-web3-products-ux-is-driving-users-away-dfae8185e53a',
      image: '/uxcover.png',
      platform: 'Medium',
      date: 'Oct 9, 2025',
    },
    {
      title: 'It’s almost 2026: Why Are We Still Arguing About CSS vs Tailwind',
      description: 'Tailwind vs CSS',
      url: 'https://dev.to/toboreeee/its-almost-2026-why-are-we-still-arguing-about-css-vs-tailwind-291f',
      image: '/cssvs.png',
      platform: 'Dev.to',
      date: 'Nov 1, 2025',
    },
    {
      title: 'The Crypto Bloodbath of October 2025: Inside the $20 Billion Meltdown and What It Means for the Next Cycle',
      description: 'Bitcoin fell from $126K to around $105K, Ethereum dropped over 11%, and altcoins like Solana and Avalanche plummeted by 70%. This sharp decline highlights the markets fragility, but it may not be the end.',
      url: 'https://medium.com/@tobore/3d20e3e5539f',
      image: '/cyptobloodbath.png',
      platform: 'Medium',
      date: 'Nov 2024',
    },
    
  ]

  return (
    <section id="articles" className="py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Writing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Articles and tutorials I've written to share knowledge and help others learn
          </p>
        </div>

        <div className="space-y-6">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300"
            >
              <div className={`flex ${article.image ? 'flex-col md:flex-row' : 'flex-col md:flex-row md:items-center md:justify-between'} gap-4 p-6`}>
                {article.image && (
                  <div className="md:w-48 md:flex-shrink-0">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-40 md:h-32 object-cover rounded-lg"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded">
                      {article.platform}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{article.description}</p>
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>
                <div className="flex items-center text-blue-600 group-hover:gap-2 transition-all md:ml-auto">
                  <span className="text-sm font-medium">Read Article</span>
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

