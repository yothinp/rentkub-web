export default function ProblemStatement() {
  const stats = [
    {
      value: "80%",
      label: "of household items",
      description: "are used less than once a month",
    },
    {
      value: "13 min",
      label: "average drill usage",
      description: "in its entire lifespan",
    },
    {
      value: "12.5%",
      label: "of CO2 emissions",
      description: "come from goods production",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Problem We&apos;re Solving
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Most things we own sit unused. Meanwhile, our neighbors buy the same
            items we already have.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-gray-800/50 border border-gray-700"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-600/20 to-secondary-600/20 rounded-2xl p-8 md:p-12 border border-primary-500/30">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              There&apos;s a better way
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              What if you could simply borrow that drill from a neighbor instead
              of buying one? RentKub makes sharing easy, safe, and rewarding for
              everyone in your community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
