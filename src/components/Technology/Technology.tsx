import React from "react";

const techCategories = [
  "Frontend", "Backend", "Frameworks", "Mobile App", "Database",
  "Google", "Data Science", "Machine Learning", "DevOps", "CMS", "ECommerce", "Security",
];

const techimg = [
  { name: "JavaScript", src: "/img/js.png" },
  { name: "React", src: "/img/react.png" },
  { name: "Vue.js", src: "/img/vue.png" },
  { name: "Express", src: "/img/express.png" },
  { name: "HTML5", src: "/img/html.png" },
  { name: "CSS3", src: "/img/css.png" },
  { name: "Node.js", src: "/img/node.png" },
  { name: "Java", src: "/img/java.png" },
  { name: "Python", src: "/img/python.png" },
  { name: "PHP", src: "/img/php.png" },
  { name: "C#", src: "/img/csharp.png" },
  { name: "C++", src: "/img/cpp.png" },
  { name: "Laravel", src: "/img/laravel.png" },
  { name: "Symfony", src: "/img/symfony.png" },
  { name: "Django", src: "/img/django.png" },
  { name: "Express JS", src: "/img/expressjs.png" },
  { name: "Spring", src: "/img/spring.png" },
  { name: "iOS", src: "/img/ios.png" },
  { name: "React Native", src: "/img/react-native.png" },
  { name: "Flutter", src: "/img/flutter.png" },
  { name: "Kotlin", src: "/img/kotlin.png" },
  { name: "Ionic", src: "/img/ionic.png" },
  { name: "MySQL", src: "/img/mysql.png" },
  { name: "SQL Server", src: "/img/sqlserver.png" },
  { name: "PostgreSQL", src: "/img/postgresql.png" },
  { name: "MariaDB", src: "/img/mariadb.png" },
  { name: "MongoDB", src: "/img/mongodb.png" },
  { name: "Redis", src: "/img/redis.png" },
  { name: "Oracle", src: "/img/oracle.png" },
  { name: "Go", src: "/img/go.png" },
  { name: "Angular", src: "/img/angular.png" },
  { name: "Android", src: "/img/android.png" },
  { name: "R Studio", src: "/img/rstudio.png" },
  { name: "Hadoop", src: "/img/hadoop.png" },
  { name: "Power BI", src: "/img/powerbi.png" },
  { name: "OpenCV", src: "/img/opencv.png" },
];

const Technologies: React.FC = () => {
  return (
    <div className="bg-white px-4 md:px-16 py-10">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Technologies</h1>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Using the right technology for the right problem is our mantra. We are agile about learning new processes and tools to save time and reduce complexity.
        </p>
      </div>

      {/* Filter Tags */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button className="bg-yellow-400 text-white px-4 py-1 rounded-full text-sm">All</button>
        {techCategories.map((cat) => (
          <button key={cat} className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Technologies */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
        {techimg.map((tech) => (
          <div key={tech.name} className="bg-white shadow p-4 rounded-lg flex items-center justify-center hover:scale-105 transition-transform">
            <img src={tech.src} alt={tech.name} className="h-10 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
