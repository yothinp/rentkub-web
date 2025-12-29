export default function Categories() {
  const categories = [
    {
      name: "Tools & Equipment",
      examples: "Drills, ladders, generators",
      icon: "🔧",
    },
    {
      name: "Party & Events",
      examples: "Tables, chairs, speakers",
      icon: "🎉",
    },
    {
      name: "Outdoor & Recreation",
      examples: "Camping gear, bikes, kayaks",
      icon: "🏕️",
    },
    {
      name: "Home & Garden",
      examples: "Lawnmowers, pressure washers",
      icon: "🏡",
    },
    {
      name: "Electronics & Tech",
      examples: "Cameras, projectors, drones",
      icon: "📷",
    },
    {
      name: "Baby & Kids",
      examples: "Strollers, car seats, toys",
      icon: "👶",
    },
    {
      name: "Kitchen & Cooking",
      examples: "Stand mixers, specialty cookware",
      icon: "🍳",
    },
    {
      name: "Moving & Transport",
      examples: "Dollies, roof racks, trailers",
      icon: "📦",
    },
  ];

  return (
    <section id="categories" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">What Can You Share?</h2>
          <p className="section-subheading">
            From power tools to party supplies - if you own it, you can share it
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-lg hover:border-primary-200 transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                {category.name}
              </h3>
              <p className="text-sm text-gray-500">{category.examples}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            And many more categories coming soon...
          </p>
        </div>
      </div>
    </section>
  );
}
