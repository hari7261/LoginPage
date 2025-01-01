import React, { useState, useEffect } from 'react';
import { Shield, Lock, Terminal, Mail, ChevronRight, Database, Wifi, AlertTriangle } from 'lucide-react';

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [terminalText, setTerminalText] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // Simulate terminal typing effect
    const text = "> Initializing security protocols...\n> Running diagnostics...\n> System secure.";
    let index = 0;
    const typeTimer = setInterval(() => {
      if (index < text.length) {
        setTerminalText(prev => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(typeTimer);
      }
    }, 50);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
      clearInterval(typeTimer);
    };
  }, []);

  const particleCount = 50;
  const particles = Array.from({ length: particleCount }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10
  }));

  // Matrix rain effect characters
  const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*";
  const getRandomChar = () => matrixChars[Math.floor(Math.random() * matrixChars.length)];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Matrix Rain Background */}
      <div className="fixed inset-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-green-500 text-xs animate-matrix-fall"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <div key={j}>{getRandomChar()}</div>
            ))}
          </div>
        ))}
      </div>

      {/* Original Particle Background */}
      <div className="fixed inset-0 opacity-20">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-blue-500"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animation: `float ${particle.duration}s infinite linear`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollPosition > 50 ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
        }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              H.
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Terminal Effect */}
      <header className="relative min-h-screen flex items-center justify-center px-6">
        <div className={`text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
          <div className="mb-8 inline-block">
            <Terminal className="w-16 h-16 text-green-500 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Cyber Security Redefined
          </h1>
          <div className="max-w-xl mx-auto bg-gray-900 rounded-lg p-4 mb-8 font-mono text-green-500">
            <pre className="whitespace-pre-wrap">{terminalText}</pre>
            <div className="animate-pulse">_</div>
          </div>
          <button className="group px-8 py-3 bg-blue-500 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
            Initialize System
            <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </header>

      {/* Threat Matrix Dashboard */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Threat Matrix Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: AlertTriangle, title: "Active Threats", value: "24", color: "red" },
              { icon: Shield, title: "Protected Systems", value: "142", color: "green" },
              { icon: Lock, title: "Systems Secured", value: "89", color: "blue" }
            ].map((stat, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className={`w-8 h-8 text-${stat.color}-500`} />
                  <span className={`text-3xl font-bold text-${stat.color}-500`}>{stat.value}</span>
                </div>
                <h3 className="text-xl font-semibold">{stat.title}</h3>
                <div className="mt-4 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-${stat.color}-500 rounded-full`}
                    style={{ width: `${Math.random() * 60 + 40}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid with Hover Effects */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Security Services Arsenal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Neural Network Defense", desc: "AI-powered threat detection" },
              { icon: Lock, title: "Quantum Encryption", desc: "Next-gen data protection" },
              { icon: Terminal, title: "Advanced Penetration Testing", desc: "Vulnerability assessment" },
              { icon: Database, title: "Zero-Day Protection", desc: "Real-time threat mitigation" },
              { icon: Wifi, title: "Network Security", desc: "Distributed system protection" },
              { icon: AlertTriangle, title: "Threat Analysis", desc: "Advanced threat detection" },
              { icon: Mail, title: "Secure Communications", desc: "Encrypted messaging systems" },
              { icon: Shield, title: "Hardware Security", desc: "Physical system hardening" },
              { icon: Database, title: "Cloud Security", desc: "Distributed defense systems" }
            ].map((service, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 hover:from-blue-900 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 border border-gray-800 hover:border-blue-500"
              >
                <service.icon className="w-12 h-12 text-blue-500 mb-4 group-hover:animate-pulse" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills Matrix</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { skill: "Network Security", level: 95 },
              { skill: "Penetration Testing", level: 90 },
              { skill: "Incident Response", level: 85 },
              { skill: "Malware Analysis", level: 88 },
              { skill: "Cloud Security", level: 92 },
              { skill: "Cryptography", level: 87 },
              { skill: "Forensics", level: 89 },
              { skill: "Risk Assessment", level: 93 }
            ].map((skill, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                <div className="flex justify-between mb-2">
                  <span>{skill.skill}</span>
                  <span className="text-blue-500">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full">
                  <div
                    className="h-full bg-blue-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Glowing Effect */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Secure Communication Channel</h2>
          <div className="max-w-md mx-auto">
            <button
              className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 relative group"
            >
              <span className="absolute inset-0 rounded-full bg-blue-500 animate-pulse opacity-0 group-hover:opacity-20 transition-opacity" />
              Initialize Contact
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, 20px) rotate(180deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        @keyframes matrix-fall {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </div>
  );
};

export default App;