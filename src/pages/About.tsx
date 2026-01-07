import { motion } from 'framer-motion';

const About = () => {
  const values = [
    {
      title: 'Innovación',
      description: 'Siempre al día con las últimas tendencias y tecnologías.',
      icon: '💡',
    },
    {
      title: 'Transparencia',
      description: 'Comunicación clara y resultados medibles en cada proyecto.',
      icon: '🔍',
    },
    {
      title: 'Resultados',
      description: 'Enfocados en generar valor real para nuestros clientes.',
      icon: '🎯',
    },
    {
      title: 'Compromiso',
      description: 'Dedicación total al éxito de cada proyecto.',
      icon: '🤝',
    },
  ];

  const stats = [
    { number: '500+', label: 'Proyectos Completados' },
    { number: '200+', label: 'Clientes Satisfechos' },
    { number: '10+', label: 'Años de Experiencia' },
    { number: '98%', label: 'Tasa de Satisfacción' },
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
              Sobre <span className="text-violet-600">Nosotros</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
              Somos una agencia de marketing digital dedicada a potenciar la presencia online de marcas, emprendedores y negocios locales. Ofrecemos estrategias personalizadas, gestión profesional de redes sociales, creación de contenido visual y soluciones para pautas publicitarias.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Nuestra Historia</h2>
              <p className="text-gray-600 mb-3 sm:mb-4 text-base sm:text-lg">
                Fundada con la visión de democratizar el marketing digital, Promueve Agencia
                nació de la necesidad de ofrecer soluciones accesibles y efectivas para empresas
                de todos los tamaños.
              </p>
              <p className="text-gray-600 mb-4 text-base sm:text-lg">
                A lo largo de los años, hemos crecido junto a nuestros clientes, adaptándonos
                a las constantes evoluciones del mercado digital y manteniéndonos a la vanguardia
                de las mejores prácticas.
              </p>
              <p className="text-gray-600 text-base sm:text-lg">
                Hoy, somos reconocidos por nuestra capacidad de transformar ideas en resultados
                tangibles, siempre con un enfoque en la innovación y la excelencia.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-violet-400 to-violet-600 rounded-2xl p-6 sm:p-8 md:p-12 text-white"
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Nuestra Misión</h3>
              <p className="text-base sm:text-lg mb-4 sm:mb-6">
                Empoderar a las empresas para que alcancen su máximo potencial digital
                a través de estrategias innovadoras, creativas y basadas en datos.
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Nuestra Visión</h3>
              <p className="text-base sm:text-lg">
                Ser la agencia de referencia en marketing digital, reconocida por nuestra
                capacidad de generar resultados excepcionales y relaciones duraderas con nuestros clientes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-violet-600 mb-2"
                >
                  {stat.number}
                </motion.div>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Nuestros Valores</h2>
            <p className="text-base sm:text-lg text-gray-600 px-4">
              Los principios que guían todo lo que hacemos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                {...(index < 4
                  ? {
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: index * 0.1 },
                    }
                  : {
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true },
                      transition: { delay: index * 0.1 },
                    })}
                whileHover={{ y: -10 }}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl sm:text-5xl mb-3 sm:mb-4"
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

