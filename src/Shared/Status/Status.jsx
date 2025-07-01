// components/StatsSection.jsx
import { FaUsers, FaBookOpen, FaGlobe, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

const stats = [
  {
    icon: <FaUsers className="text-3xl text-indigo-600" />,
    label: "Students Enrolled",
    value: "7+",
  },
  {
    icon: <FaBookOpen className="text-3xl text-green-600" />,
    label: "Courses Available",
    value: "10",
  },
  {
    icon: <FaGlobe className="text-3xl text-blue-600" />,
    label: "Countries Reached",
    value: "15+",
  },
  {
    icon: <FaChartLine className="text-3xl text-yellow-500" />,
    label: "Success Rate",
    value: "96%",
  },
];

const Status = () => {
  return (
    <section className="max-w-11/12 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 dark:text-white text-gray-800">📈 Our Impact</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="dark:bg-gray-900 dark:border border-gray-400 bg-gray-50 rounded-2xl p-6 shadow hover:shadow-md transition"
          >
            <div className="flex justify-center mb-3">{stat.icon}</div>
            <h3 className="text-2xl font-semibold dark:text-white text-gray-800">{stat.value}</h3>
            <p className="text-sm dark:text-white text-gray-500">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Status;
