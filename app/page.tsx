export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500 via-teal-600 to-teal-800 flex items-center justify-center px-4">
      <div className="text-center text-white">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-3 mb-12">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl">
            <span className="text-teal-600 font-bold text-4xl">R</span>
          </div>
          <span className="text-5xl md:text-6xl font-bold">RentKub</span>
        </div>

        {/* Coming Soon */}
        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-lg font-medium">
          <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></span>
          Coming Soon
        </div>

        {/* Footer */}
        <div className="mt-24">
          <p className="text-teal-200 text-sm">
            &copy; {new Date().getFullYear()} RentKub
          </p>
        </div>
      </div>
    </div>
  );
}
