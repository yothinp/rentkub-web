export default function Impact() {
  const impactStats = [
    {
      value: "37%",
      label: "CO2 Reduction",
      description: "Average carbon emissions saved per shared item",
    },
    {
      value: "25%",
      label: "Lower Climate Impact",
      description: "Reduction in consumer climate footprint through sharing",
    },
    {
      value: "$500+",
      label: "Annual Savings",
      description: "Average money saved per household through borrowing",
    },
  ];

  return (
    <section
      id="impact"
      className="py-16 md:py-24 bg-gradient-to-br from-primary-600 to-primary-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Make a Real Impact
          </h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Every item shared is one less item manufactured, shipped, and
            eventually thrown away
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
            >
              <div className="text-5xl md:text-6xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-xl font-semibold text-primary-100 mb-2">
                {stat.label}
              </div>
              <p className="text-primary-200">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Join the Circular Economy
              </h3>
              <p className="text-primary-100 mb-6 leading-relaxed">
                By sharing instead of buying, you&apos;re part of a movement
                that&apos;s reducing waste, building community, and proving that
                we don&apos;t need to own everything to have access to it.
              </p>
              <ul className="space-y-3">
                {[
                  "Reduce unnecessary purchases",
                  "Extend product lifecycles",
                  "Build genuine neighbor connections",
                  "Save money while saving the planet",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-primary-300 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-primary-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-white/20 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl mb-2">🌍</div>
                  <p className="text-primary-100 font-medium">
                    Better Together
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
