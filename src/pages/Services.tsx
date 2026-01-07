import { motion } from 'framer-motion';
import ServiceCard, { type Service } from '../components/services/ServiceCard';

const Services = () => {
  const services: Service[] = [
    {
      id: 'seo',
      title: 'SEO & Posicionamiento',
      description: 'Mejora tu visibilidad en buscadores y alcanza los primeros resultados con estrategias SEO avanzadas.',
      icon: '🔍',
      features: ['Análisis de keywords', 'Optimización on-page', 'Link building', 'SEO técnico', 'Análisis de competencia'],
    },
    {
      id: 'social-media',
      title: 'Gestión de Redes Sociales',
      description: 'Gestiona y potencia tu presencia en las principales plataformas sociales con contenido estratégico.',
      icon: '📱',
      features: ['Estrategia de contenido', 'Community management', 'Análisis de métricas', 'Publicaciones programadas', 'Engagement'],
    },
    {
      id: 'advertising',
      title: 'Publicidad Digital',
      description: 'Campañas efectivas que generan resultados medibles y ROI positivo.',
      icon: '📢',
      features: ['Google Ads', 'Facebook Ads', 'Retargeting', 'Análisis de conversión', 'Optimización continua'],
    },
    {
      id: 'content',
      title: 'Content Marketing',
      description: 'Crea contenido de valor que atraiga, convierta y fidelice a tu audiencia.',
      icon: '✍️',
      features: ['Blog posts', 'Infografías', 'Videos', 'E-books', 'Newsletters'],
    },
    {
      id: 'email',
      title: 'Email Marketing',
      description: 'Campañas de email personalizadas que generan engagement y conversiones.',
      icon: '📧',
      features: ['Diseño responsive', 'Automatización', 'Segmentación', 'A/B testing', 'Análisis de resultados'],
    },
    {
      id: 'web-design',
      title: 'Diseño Web',
      description: 'Diseños modernos, responsive y optimizados para conversión.',
      icon: '🎨',
      features: ['Diseño UX/UI', 'Desarrollo responsive', 'Optimización de velocidad', 'SEO on-page', 'Mantenimiento'],
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
              Nuestros <span className="text-violet-600">Servicios</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
              Soluciones integrales de marketing digital diseñadas para hacer crecer tu negocio
              y alcanzar tus objetivos comerciales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                index={index} 
                animateImmediately={index < 3}
              />
            ))}
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
              ¿Necesitas una solución personalizada?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-violet-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Contáctanos y descubre cómo podemos adaptar nuestros servicios a las necesidades específicas de tu negocio.
            </p>
            <motion.a
              href="/rrss"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-violet-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:bg-gray-100 transition-colors"
            >
              Contáctanos
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;

