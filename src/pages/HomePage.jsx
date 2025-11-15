import React, { useState, useEffect } from "react";
import {
  Star,
  Code,
  Zap,
  Users,
  Award,
  BookOpen,
  Rocket,
  Target,
} from "lucide-react";
import OfferPopup from "../components/OfferPopup";

const HomePage = () => {
  const [showOffer, setShowOffer] = useState(false);
  const [completedCourses, setCompletedCourses] = useState([]);

  // Show offer popup after 2.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOffer(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleOfferClose = () => {
    setShowOffer(false);
  };

  const toggleCourseCompletion = (courseId) => {
    setCompletedCourses((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };

  const featuredCourses = [
    {
      id: 1,
      title: "JavaScript Basics",
      description: "Master the fundamentals of JavaScript programming",
      level: "Beginner",
      lessons: 12,
      duration: "4 hours",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 245,
      badge: "Popular",
      badgeColor: "bg-blue-500",
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      description: "Deep dive into closures, async/await, and ES6+ features",
      level: "Advanced",
      lessons: 20,
      duration: "8 hours",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 512,
      badge: "Best Seller",
      badgeColor: "bg-green-500",
    },
    {
      id: 3,
      title: "React Mastery",
      description: "Learn to build modern web applications with React",
      level: "Intermediate",
      lessons: 18,
      duration: "7 hours",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 189,
      badge: "New",
      badgeColor: "bg-purple-500",
    },
    {
      id: 4,
      title: "DOM & Events",
      description: "Master DOM manipulation and event handling",
      level: "Beginner",
      lessons: 15,
      duration: "5 hours",
      image:
        "https://images.unsplash.com/photo-1559163853-cd4628902d4a?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 324,
      badge: "Trending",
      badgeColor: "bg-red-500",
    },
  ];

  const categories = [
    {
      title: "Basics",
      icon: "📚",
      count: "5 Courses",
      color: "from-blue-50 to-blue-100",
    },
    {
      title: "Advanced",
      icon: "🚀",
      count: "4 Courses",
      color: "from-purple-50 to-purple-100",
    },
    {
      title: "Projects",
      icon: "💼",
      count: "6 Projects",
      color: "from-green-50 to-green-100",
    },
    {
      title: "Practice",
      icon: "⚡",
      count: "50+ Exercises",
      color: "from-yellow-50 to-yellow-100",
    },
  ];

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Live Code Editor",
      desc: "Practice with our built-in code editor",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certificates",
      desc: "Get certified upon completion",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      desc: "Learn with thousands of students",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Learning",
      desc: "Self-paced, learn at your speed",
    },
  ];

  const testimonials = [
    {
      name: "Alex Kumar",
      avatar: "👨‍💻",
      rating: 5,
      comment:
        "This course transformed my JavaScript skills. Highly recommended!",
      role: "Web Developer",
    },
    {
      name: "Sarah Chen",
      avatar: "👩‍💻",
      rating: 5,
      comment:
        "Best JavaScript learning platform. Practical and easy to understand!",
      role: "Full Stack Developer",
    },
    {
      name: "Mike Johnson",
      avatar: "👨‍🎓",
      rating: 4,
      comment: "Great content with real-world examples. Worth every moment!",
      role: "Student",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <OfferPopup open={showOffer} onClose={handleOfferClose} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-4">Master JavaScript</h1>
              <p className="text-xl mb-6 text-blue-50">
                Learn JavaScript from basics to advanced concepts. Build
                real-world projects and become a JavaScript expert with our
                comprehensive courses.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                Start Learning Now
              </button>
            </div>
            <div className="text-center">
              <div className="text-8xl">💻</div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Choose Your Learning Path
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className={`bg-gradient-to-br ${category.color} p-8 rounded-lg cursor-pointer hover:shadow-lg transition text-center`}
            >
              <div className="text-5xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-gray-600">{category.count}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Featured Courses
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {featuredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition"
              >
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <span
                    className={`absolute top-3 right-3 ${course.badgeColor} text-white px-3 py-1 rounded-full text-sm font-bold`}
                  >
                    {course.badge}
                  </span>
                  <span className="absolute top-3 left-3 bg-gray-900 bg-opacity-75 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {course.level}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2 text-sm">{course.title}</h3>
                  <p className="text-xs text-gray-600 mb-3">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between mb-3 text-xs text-gray-600">
                    <span>📚 {course.lessons} lessons</span>
                    <span>⏱️ {course.duration}</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm font-semibold">
                      {course.rating}
                    </span>
                    <span className="ml-1 text-xs text-gray-500">
                      ({course.reviews})
                    </span>
                  </div>
                  <button
                    onClick={() => toggleCourseCompletion(course.id)}
                    className={`w-full py-2 rounded-lg transition font-semibold text-sm ${
                      completedCourses.includes(course.id)
                        ? "bg-green-500 text-white hover:bg-green-600"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    {completedCourses.includes(course.id)
                      ? "✓ Added to Learning Path"
                      : "Enroll Now"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Why Learn With Us?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="flex justify-center mb-4 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Student Success Stories
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white border border-gray-200 p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{testimonial.avatar}</span>
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">50k+</div>
              <p className="text-blue-50">Active Students</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">150+</div>
              <p className="text-blue-50">Courses & Tutorials</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">99%</div>
              <p className="text-blue-50">Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <p className="text-blue-50">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Master JavaScript?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of developers learning JavaScript today. Start your
            journey to becoming a JavaScript expert.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition text-lg">
            Get Started Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">About</h4>
              <p className="text-gray-400 text-sm">
                JavaScript Mastery - Learn to code with the best online
                JavaScript courses.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Courses</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Basics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Advanced
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 JavaScript Mastery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
