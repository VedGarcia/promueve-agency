import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Course } from '../components/courses/CourseCard';

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();

  // En una app real, esto vendría de una API o base de datos
  const coursesData: Record<string, Course & { fullDescription: string; modules: string[]; requirements: string[]; instructor: string }> = {
    'seo-fundamentals': {
      id: 'seo-fundamentals',
      title: 'Fundamentos de SEO',
      description: 'Aprende las bases del SEO y cómo posicionar tu sitio web.',
      duration: '8 semanas',
      level: 'Principiante',
      price: '$299',
      image: '🔍',
      fullDescription: 'Este curso te enseñará todo lo que necesitas saber sobre SEO desde cero. Aprenderás las técnicas fundamentales para posicionar tu sitio web en los primeros resultados de búsqueda, aumentar el tráfico orgánico y mejorar la visibilidad de tu marca.',
      modules: [
        'Introducción al SEO y cómo funcionan los motores de búsqueda',
        'Investigación de keywords y análisis de competencia',
        'Optimización on-page: títulos, meta descripciones y contenido',
        'SEO técnico: velocidad, mobile-first y estructura del sitio',
        'Link building y construcción de autoridad',
        'SEO local y optimización para Google My Business',
        'Medición y análisis con Google Analytics y Search Console',
        'Estrategias avanzadas y tendencias futuras',
      ],
      requirements: [
        'Conocimientos básicos de internet',
        'Acceso a un sitio web (propio o de prueba)',
        'Disposición para aprender y practicar',
      ],
      instructor: 'María González - Especialista en SEO con 10+ años de experiencia',
    },
    'social-media-mastery': {
      id: 'social-media-mastery',
      title: 'Dominio de Redes Sociales',
      description: 'Domina las estrategias de marketing en redes sociales.',
      duration: '6 semanas',
      level: 'Intermedio',
      price: '$349',
      image: '📱',
      fullDescription: 'Aprende a crear y ejecutar estrategias efectivas de marketing en redes sociales. Desde la planificación de contenido hasta el análisis de métricas, este curso te dará las herramientas necesarias para construir una presencia sólida en las principales plataformas.',
      modules: [
        'Estrategia de contenido y calendario editorial',
        'Facebook e Instagram: mejores prácticas',
        'LinkedIn para profesionales y B2B',
        'Twitter y TikTok: engagement y viralidad',
        'Community management y atención al cliente',
        'Publicidad en redes sociales y presupuestos',
        'Análisis de métricas y KPIs',
        'Caso práctico: creación de estrategia completa',
      ],
      requirements: [
        'Experiencia básica usando redes sociales',
        'Conocimientos de marketing básico',
        'Cuentas en al menos 2 plataformas sociales',
      ],
      instructor: 'Carlos Ramírez - Social Media Manager certificado',
    },
    'google-ads': {
      id: 'google-ads',
      title: 'Google Ads Avanzado',
      description: 'Crea y optimiza campañas publicitarias en Google.',
      duration: '10 semanas',
      level: 'Avanzado',
      price: '$449',
      image: '📢',
      fullDescription: 'Domina Google Ads con este curso avanzado que cubre desde la configuración básica hasta técnicas avanzadas de optimización. Aprende a crear campañas que generen resultados medibles y ROI positivo.',
      modules: [
        'Fundamentos de Google Ads y estructura de cuenta',
        'Investigación de keywords y herramientas',
        'Creación de campañas Search efectivas',
        'Google Display Network y remarketing',
        'YouTube Ads y video marketing',
        'Shopping Ads y Google Merchant Center',
        'Optimización avanzada y automatización',
        'Medición de conversiones y atribución',
        'Estrategias de puja y presupuestos',
        'Certificación Google Ads: preparación y examen',
      ],
      requirements: [
        'Conocimientos sólidos de marketing digital',
        'Experiencia previa con publicidad online (recomendado)',
        'Presupuesto para prácticas (opcional)',
      ],
      instructor: 'Ana Martínez - Google Ads Certified, 8+ años gestionando campañas',
    },
    'content-strategy': {
      id: 'content-strategy',
      title: 'Estrategia de Contenido',
      description: 'Desarrolla una estrategia de contenido efectiva.',
      duration: '7 semanas',
      level: 'Intermedio',
      price: '$329',
      image: '✍️',
      fullDescription: 'Aprende a crear y ejecutar una estrategia de contenido que atraiga, convierta y fidelice a tu audiencia. Desde la planificación hasta la distribución, este curso cubre todos los aspectos del content marketing.',
      modules: [
        'Fundamentos de content marketing',
        'Definición de buyer personas y audiencia',
        'Pillar content y topic clusters',
        'Creación de contenido: blog, videos, infografías',
        'SEO para contenido y optimización',
        'Distribución multi-canal y promoción',
        'Medición de resultados y optimización',
      ],
      requirements: [
        'Conocimientos básicos de marketing',
        'Habilidades básicas de escritura',
        'Acceso a herramientas de diseño (opcional)',
      ],
      instructor: 'Laura Sánchez - Content Strategist con portfolio de 200+ artículos',
    },
    analytics: {
      id: 'analytics',
      title: 'Analytics y Métricas',
      description: 'Aprende a medir y optimizar el rendimiento de tus campañas.',
      duration: '5 semanas',
      level: 'Intermedio',
      price: '$279',
      image: '📊',
      fullDescription: 'Domina el arte de medir, analizar y optimizar el rendimiento de tus campañas de marketing. Aprende a usar Google Analytics, Facebook Insights y otras herramientas para tomar decisiones basadas en datos.',
      modules: [
        'Introducción a analytics y métricas clave',
        'Google Analytics 4: configuración y navegación',
        'Análisis de tráfico y comportamiento de usuarios',
        'Configuración de objetivos y conversiones',
        'Análisis de campañas y atribución',
        'Facebook Insights y métricas de redes sociales',
        'Creación de dashboards y reportes',
        'Optimización basada en datos',
      ],
      requirements: [
        'Conocimientos básicos de marketing digital',
        'Acceso a Google Analytics (puede ser demo)',
        'Excel básico (recomendado)',
      ],
      instructor: 'Roberto Fernández - Data Analyst especializado en marketing',
    },
    'email-marketing': {
      id: 'email-marketing',
      title: 'Email Marketing Profesional',
      description: 'Crea campañas de email efectivas que generen conversiones.',
      duration: '6 semanas',
      level: 'Principiante',
      price: '$249',
      image: '📧',
      fullDescription: 'Aprende a crear y ejecutar campañas de email marketing profesionales que generen engagement y conversiones. Desde el diseño hasta la automatización, este curso cubre todo lo necesario para dominar el email marketing.',
      modules: [
        'Fundamentos del email marketing',
        'Construcción de lista y segmentación',
        'Diseño de emails responsive y efectivos',
        'Copywriting para emails que convierten',
        'Automatización y workflows',
        'A/B testing y optimización',
        'Cumplimiento legal: GDPR y CAN-SPAM',
        'Análisis de métricas y mejora continua',
      ],
      requirements: [
        'Conocimientos básicos de marketing',
        'Acceso a una plataforma de email marketing (demo disponible)',
        'Habilidades básicas de diseño (opcional)',
      ],
      instructor: 'Patricia López - Email Marketing Specialist, 5+ años de experiencia',
    },
  };

  const course = id ? coursesData[id] : null;

  if (!course) {
    return (
      <div className="min-h-screen pt-20 sm:pt-24 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Curso no encontrado</h1>
          <Link to="/courses" className="text-violet-600 hover:underline">
            Volver a cursos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 sm:pt-24">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-violet-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Link to="/courses">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-violet-600 font-semibold mb-6 hover:underline"
              >
                ← Volver a cursos
              </motion.button>
            </Link>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="text-8xl"
              >
                {course.image}
              </motion.div>

              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                  {course.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6">
                  {course.fullDescription}
                </p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="px-4 py-2 bg-violet-100 text-violet-600 rounded-full font-semibold">
                    {course.level}
                  </span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-semibold">
                    {course.duration}
                  </span>
                  <span className="px-4 py-2 bg-green-100 text-green-600 rounded-full font-semibold text-2xl">
                    {course.price}
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-violet-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:bg-violet-700 transition-colors"
                >
                  Inscribirse Ahora
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-8 sm:py-12 bg-white border-y">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Instructor</h3>
            <p className="text-sm sm:text-base text-gray-600">{course.instructor}</p>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12"
            >
              Contenido del Curso
            </motion.h2>
            <div className="space-y-3 sm:space-y-4">
              {course.modules.map((module, index) => (
                <motion.div
                  key={module}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <p className="text-gray-800 text-base sm:text-lg pt-2">{module}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12"
            >
              Requisitos
            </motion.h2>
            <div className="space-y-3 sm:space-y-4">
              {course.requirements.map((requirement, index) => (
                <motion.div
                  key={requirement}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center p-4 bg-white rounded-lg shadow"
                >
                  <span className="text-violet-600 text-2xl mr-4">✓</span>
                  <p className="text-gray-800 text-base sm:text-lg">{requirement}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-violet-600 to-violet-700">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-4">
              ¿Listo para comenzar?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-violet-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Inscríbete ahora y comienza tu viaje hacia el dominio del marketing digital.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-violet-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:bg-gray-100 transition-colors"
            >
              Inscribirse por {course.price}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;

