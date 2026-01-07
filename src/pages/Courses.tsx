import { motion } from 'framer-motion';
import CourseCard, { type Course } from '../components/courses/CourseCard';

const Courses = () => {
  const courses: Course[] = [
    {
      id: 'seo-fundamentals',
      title: 'Fundamentos de SEO',
      description: 'Aprende las bases del SEO y cómo posicionar tu sitio web en los primeros resultados de búsqueda.',
      duration: '8 semanas',
      level: 'Principiante',
      price: '$299',
      image: '🔍',
    },
    {
      id: 'social-media-mastery',
      title: 'Dominio de Redes Sociales',
      description: 'Domina las estrategias de marketing en redes sociales y construye una comunidad leal.',
      duration: '6 semanas',
      level: 'Intermedio',
      price: '$349',
      image: '📱',
    },
    {
      id: 'google-ads',
      title: 'Google Ads Avanzado',
      description: 'Crea y optimiza campañas publicitarias en Google que generen resultados medibles.',
      duration: '10 semanas',
      level: 'Avanzado',
      price: '$449',
      image: '📢',
    },
    {
      id: 'content-strategy',
      title: 'Estrategia de Contenido',
      description: 'Desarrolla una estrategia de contenido que atraiga, convierta y fidelice a tu audiencia.',
      duration: '7 semanas',
      level: 'Intermedio',
      price: '$329',
      image: '✍️',
    },
    {
      id: 'analytics',
      title: 'Analytics y Métricas',
      description: 'Aprende a medir, analizar y optimizar el rendimiento de tus campañas de marketing.',
      duration: '5 semanas',
      level: 'Intermedio',
      price: '$279',
      image: '📊',
    },
    {
      id: 'email-marketing',
      title: 'Email Marketing Profesional',
      description: 'Crea campañas de email efectivas que generen engagement y conversiones.',
      duration: '6 semanas',
      level: 'Principiante',
      price: '$249',
      image: '📧',
    },
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-24">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-violet-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Nuestros <span className="text-violet-600">Cursos</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
              Capacítate con nuestros cursos especializados en marketing digital y lleva tus habilidades al siguiente nivel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {courses.map((course, index) => (
              <CourseCard 
                key={course.id} 
                course={course} 
                index={index} 
                animateImmediately={index < 3}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
              ¿Por qué elegir nuestros cursos?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'Contenido Actualizado',
                description: 'Materiales siempre al día con las últimas tendencias del mercado.',
                icon: '📚',
              },
              {
                title: 'Instructores Expertos',
                description: 'Aprende de profesionales con años de experiencia en la industria.',
                icon: '👨‍🏫',
              },
              {
                title: 'Certificación',
                description: 'Obtén un certificado reconocido al completar cada curso.',
                icon: '🏆',
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;

