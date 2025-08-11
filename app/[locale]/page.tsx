import type { Locale } from "../../i18n";

export default async function Home({ params: { locale } }: { params: { locale: Locale }}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sand-50 to-bone-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-6xl md:text-7xl text-terracotta-900 mb-8 leading-tight">
            Moroccan Design Studio
          </h1>
          <p className="text-xl md:text-2xl text-olive-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover the beauty of Moroccan architecture and design through our curated collection of projects and insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`/${locale}/portfolio`} 
              className="inline-block bg-terracotta-600 hover:bg-terracotta-700 text-bone-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              View Portfolio
            </a>
            <a 
              href={`/${locale}/contact`} 
              className="inline-block border-2 border-terracotta-600 text-terracotta-600 hover:bg-terracotta-600 hover:text-bone-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-terracotta-300 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🏛️</span>
            </div>
            <h3 className="font-heading text-xl text-terracotta-900 mb-2">Traditional Architecture</h3>
            <p className="text-olive-600">Discover timeless Moroccan design principles</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-olive-300 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="font-heading text-xl text-terracotta-900 mb-2">Modern Interpretation</h3>
            <p className="text-olive-600">Contemporary takes on classic patterns</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-sand-300 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🌿</span>
            </div>
            <h3 className="font-heading text-xl text-terracotta-900 mb-2">Sustainable Design</h3>
            <p className="text-olive-600">Eco-friendly Moroccan-inspired solutions</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="bg-terracotta-900 rounded-2xl p-12 text-bone-100">
          <h2 className="font-heading text-4xl mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 opacity-90">Let's create something beautiful together</p>
          <a 
            href={`/${locale}/contact`} 
            className="inline-block bg-bone-100 text-terracotta-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-sand-50 transition-colors duration-200"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
}
