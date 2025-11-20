import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

interface ServiceCardProps {
  service: Service;
  index: number;
  animateImmediately?: boolean;
}

const ServiceCard = ({ service, index, animateImmediately = false }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      {...(animateImmediately
        ? {
            animate: { opacity: 1, y: 0 },
            transition: { delay: index * 0.1, duration: 0.5 },
          }
        : {
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: '-100px' },
            transition: { delay: index * 0.1, duration: 0.5 },
          })}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-2xl transition-shadow"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl mb-3 sm:mb-4"
      >
        {service.icon}
      </motion.div>

      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">{service.title}</h3>
      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{service.description}</p>

      <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
        {service.features.slice(0, 3).map((feature, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            {...(animateImmediately
              ? {
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: index * 0.1 + idx * 0.05 },
                }
              : {
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: true },
                  transition: { delay: index * 0.1 + idx * 0.05 },
                })}
            className="flex items-center text-xs sm:text-sm text-gray-600"
          >
            <span className="text-violet-600 mr-2">✓</span>
            {feature}
          </motion.li>
        ))}
      </ul>

      <Link to={`/services/${service.id}`}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-violet-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-violet-700 transition-colors"
        >
          Ver más detalles
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;

