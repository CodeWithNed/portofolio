import { useState } from "react";
import image1 from "/src/assets/cryptx/1.1.jpg";
import image2 from "/src/assets/cryptx/1.2.jpg";
import image3 from "/src/assets/datathon/2.1.jpg";
import image4 from "/src/assets/apan/3.1.jpg";
import image5 from "/src/assets/photo.png";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface Achievement {
  title: string;
  images: string[];
  description: string;
  link: string;
  pressRelease: string;
  team: TeamMember[];
}

interface ImageCarouselProps {
  images: string[];
}

interface AchievementProps {
  achievement: Achievement;
}

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const achievements = [
    {
      title: "SLIIT Datathon 2025 - 1st Place",
      images: [
        image3
        
      ],
      description: "Developed time series forecasting model for Wiley Publishing Company to predict book sales from historical data dating back to 1800s, achieving highest accuracy among all teams.",
      link: "https://example.com/datathon",
      pressRelease: "https://example.com/press",
      team: [
        { name: "Nadun Kumarasinghe", role: "Lead Data Scientist", image: image5 }
      ]
    },
    {
      title: "Japura CryptX Hackathon 2025 - 2nd Place",
      images: [
        image1,
        image2
      ],
      description: "Created Cultivate.AI, an agricultural recommendation system using ML to optimize crop selection based on soil parameters, featuring interactive map interface and step-by-step cultivation roadmap.",
      link: "https://example.com/cryptx",
      pressRelease: "https://example.com/press",
      team: [
        { name: "Nadun Kumarasinghe", role: "Full Stack Developer", image: image5 }
      ]
    },
    // {
    //   title: "United Nations Recognition 2017",
    //   images: [
    //     image4
    //   ],
    //   description: "Named Best School Quizzer in Sri Lanka by the United Nations, recognizing exceptional academic achievement and knowledge breadth.",
    //   link: "https://example.com/un-recognition",
    //   pressRelease: "https://example.com/press",
    //   team: [
    //     { name: "Nadun Kumarasinghe", role: "Award Recipient", image: image5 }
    //   ]
    // },
    {
      title: "APAN56 Datathon 2023 - Finalist",
      images: [
        image4
      ],
      description: "Developed ML model for renewable energy site selection in Sri Lanka using geospatial analysis and advanced machine learning techniques.",
      link: "https://example.com/apan56",
      pressRelease: "https://example.com/press",
      team: [
        { name: "Nadun Kumarasinghe", role: "ML Engineer", image: image5 }
      ]
    }
  ];
  

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-t-xl">
      <div className="relative w-full h-full">
        {images.map((src: string, idx: number) => (
          <img
            key={idx}
            src={src}
            alt={`Achievement ${idx + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${
              idx === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      
      <button 
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
      >
        <ChevronLeftIcon />
      </button>
      <button 
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
      >
        <ChevronRightIcon />
      </button>
      
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_: string, idx: number) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? 'bg-white w-4' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Achievement = ({ achievement }: AchievementProps) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
    <ImageCarousel images={achievement.images} />
    
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
        {achievement.title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {achievement.description}
      </p>
      
      <div className="flex gap-4 mb-6">
        <a
          href={achievement.link}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Learn More
        </a>
        <a
          href={achievement.pressRelease}
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          Github
        </a>
      </div>
      
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
        <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">
          Team Members
        </h4>
        <div className="flex items-center gap-3">
          {achievement.team.map((member: TeamMember, idx: number) => (
            <div
              key={idx}
              className="group relative"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-700"
              />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {member.name}
                <br />
                {member.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Achievements = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h3 className="text-xl text-center text-gray-500 font-semibold">
          Explore my recent
        </h3>
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Achievements Unveiled
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, idx) => (
            <Achievement key={idx} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;