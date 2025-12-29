import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Deletion - RentKub",
  description:
    "Request deletion of your personal data from RentKub. Learn about our data deletion process and your privacy rights.",
};

export default function DataDeletion() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">RentKub</span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Data Deletion Request
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Your Privacy Rights
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At RentKub, we respect your privacy and your right to control your
              personal data. You have the right to request the deletion of your
              personal information from our systems at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              What Data We Collect
            </h2>
            <p className="text-gray-600 mb-4">
              When you use RentKub, we may collect the following information:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Name and profile information</li>
              <li>Email address</li>
              <li>Phone number (if provided)</li>
              <li>Location data (neighborhood/area)</li>
              <li>Profile photos</li>
              <li>Item listings and transaction history</li>
              <li>Messages and communications</li>
              <li>Reviews and ratings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              How to Request Data Deletion
            </h2>
            <p className="text-gray-600 mb-4">
              To request deletion of your data, please contact us using one of
              the following methods:
            </p>

            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">Email</h3>
                <a
                  href="mailto:privacy@rentkub.com"
                  className="text-primary-600 hover:text-primary-700"
                >
                  privacy@rentkub.com
                </a>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Required Information
                </h3>
                <p className="text-gray-600 text-sm">
                  Please include the following in your request:
                </p>
                <ul className="list-disc list-inside text-gray-600 text-sm mt-2 space-y-1">
                  <li>Your full name</li>
                  <li>Email address associated with your account</li>
                  <li>
                    Phone number associated with your account (if applicable)
                  </li>
                  <li>
                    A clear statement requesting data deletion
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              What Happens After Your Request
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>Once we receive your data deletion request:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  We will verify your identity to ensure the request is
                  legitimate.
                </li>
                <li>
                  We will process your request within 30 days.
                </li>
                <li>
                  We will delete or anonymize your personal data from our
                  systems.
                </li>
                <li>
                  We will send you a confirmation once the deletion is complete.
                </li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Data Retention Exceptions
            </h2>
            <p className="text-gray-600 mb-4">
              Please note that we may retain certain data as required by law or
              for legitimate business purposes, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Transaction records for accounting and tax purposes</li>
              <li>Data necessary to resolve disputes or enforce agreements</li>
              <li>Information required by applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Facebook Login Users
            </h2>
            <p className="text-gray-600">
              If you signed up using Facebook Login, you can also manage your
              RentKub data connection through your{" "}
              <a
                href="https://www.facebook.com/settings?tab=applications"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700"
              >
                Facebook App Settings
              </a>
              . Removing RentKub from your Facebook apps will revoke our access
              to your Facebook data. For complete deletion of data already
              stored in our systems, please submit a deletion request as
              described above.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </p>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
