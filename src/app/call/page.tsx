import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CallPage() {
  return (
    <main>
      <Header />
      <section className="bg-unroot-purple pt-32 pb-64">
        <div className="unroot-container max-w-4xl mx-auto">
          <h1 className="text-center text-white font-serif text-5xl md:text-6xl max-w-3xl mx-auto leading-tight mb-14">
            Let's talk about your project
          </h1>

          <div className="bg-white rounded-lg p-10 shadow-lg">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-unroot-purple/20 flex items-center justify-center">
                <span className="text-unroot-purple font-medium">AK</span>
              </div>
              <div>
                <h2 className="font-medium text-lg">Adam K</h2>
                <p className="text-gray-600">Meeting with Adam from Unroot Design</p>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4 pb-2">
              <h3 className="font-medium mb-3">Discovery call. We will do:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">✓</span>
                  <span>I will understand your needs and expectations.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">✓</span>
                  <span>You will get website audit & free tips on improvements.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">✓</span>
                  <span>If I can help, I will offer you something. The rest is up to you!</span>
                </li>
              </ul>

              <div className="flex items-center text-gray-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>30m</span>
              </div>

              <div className="bg-gray-50 p-5 rounded-md text-center">
                <p className="text-gray-500 mb-3">This is a demo booking page. In a real implementation, this would connect to a calendar service like Cal.com.</p>
                <p className="text-sm text-gray-400">Powered by Cal.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
