import { motion } from 'framer-motion';

const RRSS = () => {
  const socialNetworks = [
    {
      name: 'Facebook',
      icon: '📘',
      url: '#',
      followers: '15K',
      description: 'Síguenos para tips diarios de marketing y actualizaciones.',
    },
    {
      name: 'Instagram',
      icon: '📷',
      url: '#',
      followers: '25K',
      description: 'Contenido visual y stories exclusivos sobre nuestros proyectos.',
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: '#',
      followers: '8K',
      description: 'Conecta con nosotros para networking y contenido profesional.',
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: '#',
      followers: '12K',
      description: 'Últimas noticias y tendencias del mundo del marketing digital.',
    },
    {
      name: 'YouTube',
      icon: '▶️',
      url: '#',
      followers: '30K',
      description: 'Tutoriales, casos de estudio y contenido educativo.',
    },
    {
      name: 'TikTok',
      icon: '🎵',
      url: '#',
      followers: '50K',
      description: 'Contenido creativo y entretenido sobre marketing digital.',
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
              Síguenos en <span className="text-violet-600">Redes Sociales</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
              Conéctate con nosotros en nuestras redes sociales y mantente al día con las últimas
              tendencias, tips y contenido exclusivo de marketing digital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Social Networks Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {socialNetworks.map((network, index) => (
              <motion.div
                key={network.name}
                initial={{ opacity: 0, scale: 0.9 }}
                {...(index < 3
                  ? {
                      animate: { opacity: 1, scale: 1 },
                      transition: { delay: index * 0.1 },
                    }
                  : {
                      whileInView: { opacity: 1, scale: 1 },
                      viewport: { once: true },
                      transition: { delay: index * 0.1 },
                    })}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-2xl transition-shadow border-2 border-gray-100"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl sm:text-6xl mb-3 sm:mb-4 text-center"
                >
                  {network.icon}
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 text-center">
                  {network.name}
                </h3>
                <p className="text-violet-600 font-semibold text-center mb-3 sm:mb-4 text-sm sm:text-base">
                  {network.followers} seguidores
                </p>
                <p className="text-sm sm:text-base text-gray-600 text-center mb-4 sm:mb-6">
                  {network.description}
                </p>
                <motion.a
                  href={network.url}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block w-full bg-violet-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold text-center text-sm sm:text-base hover:bg-violet-700 transition-colors"
                >
                  Seguir
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              ¿Tienes alguna pregunta?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 px-4">
              Estamos aquí para ayudarte. Contáctanos a través de nuestras redes sociales
              o envíanos un mensaje directo.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center px-4">
              <motion.a
                href="mailto:contacto@promueve-agencia.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-violet-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-violet-700 transition-colors w-full sm:w-auto"
              >
                Enviar Email
              </motion.a>
              <motion.a
                href="tel:+1234567890"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-violet-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base border-2 border-violet-600 hover:bg-violet-50 transition-colors w-full sm:w-auto"
              >
                Llamar Ahora
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RRSS;

