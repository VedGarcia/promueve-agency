import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Service } from '../components/services/ServiceCard';

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();

  // En una app real, esto vendría de una API o base de datos
  const servicesData: Record<string, Service & { fullDescription: string; benefits: string[]; process: string[] }> = {
    seo: {
      id: 'seo',
      title: 'SEO & Posicionamiento',
      description: 'Mejora tu visibilidad en buscadores y alcanza los primeros resultados.',
      icon: '🔍',
      features: ['Análisis de keywords', 'Optimización on-page', 'Link building', 'SEO técnico', 'Análisis de competencia'],
      fullDescription: 'Nuestro servicio de SEO está diseñado para posicionar tu sitio web en los primeros resultados de búsqueda, aumentando tu visibilidad orgánica y generando tráfico de calidad. Utilizamos técnicas avanzadas y mejores prácticas del sector.',
      benefits: [
        'Aumento del tráfico orgánico hasta un 300%',
        'Mejora en la visibilidad de marca',
        'ROI positivo a largo plazo',
        'Mayor credibilidad y confianza',
        'Competitividad en el mercado digital',
      ],
      process: [
        'Auditoría completa del sitio web',
        'Investigación y análisis de keywords',
        'Optimización técnica y de contenido',
        'Estrategia de link building',
        'Monitoreo y reportes mensuales',
      ],
    },
    'social-media': {
      id: 'social-media',
      title: 'Gestión de Redes Sociales',
      description: 'Gestiona y potencia tu presencia en las principales plataformas sociales.',
      icon: '📱',
      features: ['Estrategia de contenido', 'Community management', 'Análisis de métricas', 'Publicaciones programadas', 'Engagement'],
      fullDescription: 'Gestionamos tu presencia en redes sociales con estrategias personalizadas que generan engagement, construyen comunidad y aumentan la visibilidad de tu marca. Creamos contenido relevante y gestionamos todas las interacciones.',
      benefits: [
        'Aumento del engagement hasta un 250%',
        'Construcción de comunidad leal',
        'Mejora en la imagen de marca',
        'Generación de leads cualificados',
        'Gestión profesional 24/7',
      ],
      process: [
        'Análisis de audiencia y competencia',
        'Desarrollo de estrategia de contenido',
        'Creación de calendario editorial',
        'Publicación y community management',
        'Análisis de resultados y optimización',
      ],
    },
    advertising: {
      id: 'advertising',
      title: 'Publicidad Digital',
      description: 'Campañas efectivas que generan resultados medibles.',
      icon: '📢',
      features: ['Google Ads', 'Facebook Ads', 'Retargeting', 'Análisis de conversión', 'Optimización continua'],
      fullDescription: 'Creamos y gestionamos campañas publicitarias en las principales plataformas digitales. Nuestro enfoque data-driven garantiza que cada dólar invertido genere el máximo retorno posible.',
      benefits: [
        'ROI medible y optimizado',
        'Aumento de conversiones',
        'Alcance de audiencias específicas',
        'Resultados rápidos y escalables',
        'Optimización continua basada en datos',
      ],
      process: [
        'Definición de objetivos y KPIs',
        'Investigación de audiencia',
        'Creación y configuración de campañas',
        'Monitoreo y optimización diaria',
        'Reportes detallados de rendimiento',
      ],
    },
    content: {
      id: 'content',
      title: 'Content Marketing',
      description: 'Crea contenido de valor que atraiga, convierta y fidelice a tu audiencia.',
      icon: '✍️',
      features: ['Blog posts', 'Infografías', 'Videos', 'E-books', 'Newsletters'],
      fullDescription: 'Desarrollamos estrategias de contenido que posicionan a tu marca como líder de opinión en tu sector. Creamos contenido de valor que educa, entretiene y convierte a tu audiencia.',
      benefits: [
        'Posicionamiento como experto',
        'Aumento del tráfico orgánico',
        'Mejora en la autoridad de dominio',
        'Generación de leads cualificados',
        'Fidelización de clientes',
      ],
      process: [
        'Auditoría de contenido existente',
        'Desarrollo de estrategia editorial',
        'Creación de contenido optimizado',
        'Distribución multi-canal',
        'Medición de impacto y ajustes',
      ],
    },
    email: {
      id: 'email',
      title: 'Email Marketing',
      description: 'Campañas de email personalizadas que generan engagement y conversiones.',
      icon: '📧',
      features: ['Diseño responsive', 'Automatización', 'Segmentación', 'A/B testing', 'Análisis de resultados'],
      fullDescription: 'Diseñamos y ejecutamos campañas de email marketing altamente personalizadas que generan engagement y conversiones. Utilizamos automatización inteligente y segmentación avanzada.',
      benefits: [
        'Alto ROI (hasta $42 por cada $1 invertido)',
        'Personalización a escala',
        'Automatización de procesos',
        'Segmentación precisa de audiencia',
        'Métricas detalladas de rendimiento',
      ],
      process: [
        'Análisis de base de datos',
        'Segmentación de audiencia',
        'Diseño de templates responsive',
        'Configuración de automatizaciones',
        'Envío, monitoreo y optimización',
      ],
    },
    'web-design': {
      id: 'web-design',
      title: 'Diseño Web',
      description: 'Diseños modernos, responsive y optimizados para conversión.',
      icon: '🎨',
      features: ['Diseño UX/UI', 'Desarrollo responsive', 'Optimización de velocidad', 'SEO on-page', 'Mantenimiento'],
      fullDescription: 'Creamos sitios web modernos, atractivos y optimizados para conversión. Nuestros diseños combinan estética profesional con funcionalidad, garantizando una experiencia de usuario excepcional.',
      benefits: [
        'Aumento de conversiones',
        'Mejor experiencia de usuario',
        'Optimización para móviles',
        'Velocidad de carga mejorada',
        'Diseño único y profesional',
      ],
      process: [
        'Investigación y wireframing',
        'Diseño de prototipos',
        'Desarrollo responsive',
        'Optimización y testing',
        'Lanzamiento y mantenimiento',
      ],
    },
  };

  const service = id ? servicesData[id] : null;

  if (!service) {
    return (
      <div className="min-h-screen pt-20 sm:pt-24 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Servicio no encontrado</h1>
          <Link to="/services" className="text-violet-600 hover:underline">
            Volver a servicios
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
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="text-7xl mb-6"
            >
              {service.icon}
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 px-4">
              {service.fullDescription}
            </p>
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-violet-600 font-semibold hover:underline"
              >
                ← Volver a servicios
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center"
            >
              Características Principales
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {service.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center p-4 bg-gray-50 rounded-lg"
                >
                  <span className="text-violet-600 text-2xl mr-4">✓</span>
                  <span className="text-gray-800 font-semibold">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center"
            >
              Beneficios Clave
            </motion.h2>
            <div className="space-y-4 sm:space-y-6">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="flex items-start">
                    <span className="text-violet-600 text-3xl mr-4">🎯</span>
                    <p className="text-gray-800 text-lg">{benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center"
            >
              Nuestro Proceso
            </motion.h2>
            <div className="space-y-4 sm:space-y-6">
              {service.process.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                    {index + 1}
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-gray-800 text-lg">{step}</p>
                  </div>
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
              Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos.
            </p>
            <Link to="/rrss">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-violet-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:bg-gray-100 transition-colors"
              >
                Solicitar Consulta
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;

