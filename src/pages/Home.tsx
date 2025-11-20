import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/services/ServiceCard';
import type { Service } from '../components/services/ServiceCard';

const Home = () => {
  const featuredServices: Service[] = [
    {
      id: 'seo',
      title: 'SEO & Posicionamiento',
      description: 'Mejora tu visibilidad en buscadores y alcanza los primeros resultados.',
      icon: '🔍',
      features: ['Análisis de keywords', 'Optimización on-page', 'Link building'],
    },
    {
      id: 'social-media',
      title: 'Redes Sociales',
      description: 'Gestiona y potencia tu presencia en las principales plataformas sociales.',
      icon: '📱',
      features: ['Estrategia de contenido', 'Community management', 'Análisis de métricas'],
    },
    {
      id: 'advertising',
      title: 'Publicidad Digital',
      description: 'Campañas efectivas que generan resultados medibles.',
      icon: '📢',
      features: ['Google Ads', 'Facebook Ads', 'Retargeting'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 bg-linear-to-br from-violet-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6"
            >
              Transformamos tu{' '}
              <span className="text-violet-600">presencia digital</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 px-4"
            >
              Agencia de marketing digital especializada en hacer crecer tu negocio
              con estrategias innovadoras y resultados medibles.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
            >
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-violet-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:bg-violet-700 transition-colors w-full sm:w-auto"
                >
                  Nuestros Servicios
                </motion.button>
              </Link>
              <Link to="/courses">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-violet-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg border-2 border-violet-600 hover:bg-violet-50 transition-colors w-full sm:w-auto"
                >
                  Ver Cursos
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-gray-600 text-base sm:text-lg px-4">
              Soluciones integrales para potenciar tu negocio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                index={index} 
                animateImmediately={index < 3}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-violet-600 font-semibold text-lg hover:underline"
              >
                Ver todos los servicios →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-linear-to-r from-violet-600 to-violet-700">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-4">
              ¿Listo para hacer crecer tu negocio?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-violet-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Contacta con nosotros y descubre cómo podemos ayudarte a alcanzar tus objetivos.
            </p>
            <Link to="/rrss">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-violet-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:bg-gray-100 transition-colors"
              >
                Contáctanos
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

