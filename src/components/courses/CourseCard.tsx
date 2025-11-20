import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  price: string;
  image?: string;
}

interface CourseCardProps {
  course: Course;
  index: number;
  animateImmediately?: boolean;
}

const CourseCard = ({ course, index, animateImmediately = false }: CourseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      {...(animateImmediately
        ? {
            animate: { opacity: 1, scale: 1 },
            transition: { delay: index * 0.1, duration: 0.4 },
          }
        : {
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true, margin: '-50px' },
            transition: { delay: index * 0.1, duration: 0.4 },
          })}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
    >
      {course.image && (
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="h-40 sm:h-48 bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center"
        >
          <span className="text-5xl sm:text-6xl text-white opacity-80">{course.image}</span>
        </motion.div>
      )}

      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <span className="px-2 sm:px-3 py-1 bg-violet-100 text-violet-600 rounded-full text-xs sm:text-sm font-semibold">
            {course.level}
          </span>
          <span className="text-gray-500 text-xs sm:text-sm">{course.duration}</span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2">{course.description}</p>

        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <span className="text-xl sm:text-2xl font-bold text-violet-600">{course.price}</span>
        </div>

        <Link to={`/courses/${course.id}`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-violet-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-violet-700 transition-colors"
          >
            Ver detalles
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default CourseCard;

