import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, DollarSign, CheckSquare, Star, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
const Portfolio = () => {
    const [currentDate] = useState(new Date())

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()
  
    const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200">
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Calendar className="w-8 h-8 text-indigo-600" />
            <span className="text-2xl font-bold text-indigo-600">CalTrack</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="text-gray-600 hover:text-indigo-600 transition-colors">Testimonials</a></li>
            </ul>
          </nav>
        </header>
  
        <main>
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-20 text-center">
            <motion.h1 
              className="text-5xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Your Life, Organized and Tracked
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Manage your expenses and tasks with our intuitive calendar application.
            </motion.p>
            <Link to="/register">
            <motion.button 
              className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              >
              Get Started
            </motion.button>
                </Link>
          </section>
  
          {/* Features Section */}
          <section id="features" className="bg-white py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div 
                  className="bg-gradient-to-br from-purple-100 to-indigo-100 p-6 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <DollarSign className="w-12 h-12 text-indigo-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Expense Tracking</h3>
                  <p className="text-gray-600">Keep track of your daily expenses with ease. Categorize and analyze your spending habits.</p>
                </motion.div>
                <motion.div 
                  className="bg-gradient-to-br from-purple-100 to-indigo-100 p-6 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <CheckSquare className="w-12 h-12 text-indigo-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Todo List</h3>
                  <p className="text-gray-600">Manage your tasks efficiently. Set priorities and deadlines for better productivity.</p>
                </motion.div>
              </div>
            </div>
          </section>
  
          {/* Calendar Preview Section */}
          <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Your Month at a Glance</h2>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="grid grid-cols-7 gap-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="text-center font-semibold text-gray-600">{day}</div>
                  ))}
                  {Array(firstDayOfMonth).fill(null).map((_, index) => (
                    <div key={`empty-${index}`} className="h-24"></div>
                  ))}
                  {calendarDays.map((day) => (
                    <motion.div 
                      key={day} 
                      className="bg-purple-50 rounded-lg p-2 h-24 flex flex-col"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-gray-800 font-semibold">{day}</span>
                      {day % 3 === 0 && <span className="text-xs text-indigo-600">$20 - Groceries</span>}
                      {day % 4 === 0 && <span className="text-xs text-green-600">✓ Complete project</span>}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
  
          {/* Testimonials Section */}
          <section id="testimonials" className="py-20 bg-indigo-100">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Users Say</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                  </div>
                  <p className="text-gray-600 mb-4">"CalTrack has revolutionized how I manage my time and finances. It's an all-in-one solution that I can't live without!"</p>
                  <p className="font-semibold text-gray-800">- Sarah J.</p>
                </motion.div>
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                  </div>
                  <p className="text-gray-600 mb-4">"The expense tracking feature has helped me save money and stick to my budget. Highly recommended!"</p>
                  <p className="font-semibold text-gray-800">- Mike T.</p>
                </motion.div>
              </div>
            </div>
          </section>
  
          {/* Pricing Section */}
          <section id="pricing" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Choose Your Plan</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {['Basic', 'Pro', 'Enterprise'].map((plan, index) => (
                  <motion.div 
                    key={plan} 
                    className="bg-white p-8 rounded-lg shadow-lg text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan}</h3>
            
                        <p className="text-4xl font-bold text-indigo-600 mb-6">${(index==0)?0:(index + 1) * 9.99}
                        <span className="text-base font-normal text-gray-600">/month</span></p>
                
                    <ul className="text-gray-600 mb-8">
                      <li className="mb-2">Unlimited Calendar Events</li>
                      <li className="mb-2">Expense Tracking</li>
                      <li className="mb-2">Todo Lists</li>
                      {index > 0 && <li className="mb-2">Advanced Analytics</li>}
                      {index > 1 && <li className="mb-2">Team Collaboration</li>}
                    </ul>
                    <button className="bg-indigo-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors">
                      Choose Plan
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
  
          {/* CTA Section */}
          <section className="bg-indigo-600 py-20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Organized?</h2>
              <p className="text-xl text-indigo-100 mb-8">Start your journey to better time and finance management today.</p>
              <Link to="/register">
              <motion.button 
                className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-100 transition-colors inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              </Link>
            </div>
          </section>
        </main>
  
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-xl font-semibold mb-4">CalTrack</h3>
                <p className="text-gray-400">Your all-in-one solution for time and finance management.</p>
              </div>
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                  <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                </ul>
              </div>
              <div className="w-full md:w-1/3">
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <p className="text-gray-400">Email: support@caltrack.com</p>
                <p className="text-gray-400">Phone: (123) 456-7890</p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 CalTrack. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
)}

export default Portfolio