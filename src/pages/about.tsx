import Footer from '@/component/home/layout/footer';
import Header from '@/component/home/layout/header';
import Image from 'next/image';

const AboutUs = () => {
  const subtopics = [
    {
      title: 'Introduction',
      content: 'Welcome to Valankanni Packers and Movers! We provide seamless relocation solutions with a focus on safety, reliability, and customer satisfaction.',
    },
    {
      title: 'Our Mission',
      content: 'To make moving stress-free and efficient for individuals and businesses by delivering top-notch packing and moving services.',
    },
    {
      title: 'Our Services',
      content: 'We offer household moving, office relocation, vehicle transportation, and secure storage solutions.',
    },
    {
      title: 'Why Choose Us?',
      content: 'We bring years of experience, a professional team, and affordable rates to ensure a hassle-free moving experience.',
    },
    {
      title: 'Our Experience',
      content: 'With over a decade of expertise, we have successfully managed thousands of relocations across the country.',
    },
  ];

  return (
    <div className='bg-gradient-to-r from-blue-200 via-blue-400 to-blue-500'>
      <Header />

      <div className="bg-[url('/about/about.jpg')] bg-cover bg-center text-gray-800 flex items-center justify-center px-6 py-32 mt-36">
        <div className="bg-white bg-opacity-15 rounded-lg shadow-lg p-5 text-center flex flex-col items-center justify-center">
          <Image
            src="/about/about.jpg"
            alt="Valankanni Packers and Movers"
            height={300}
            width={300}
            className="w-48 h-48 rounded-full mb-6 shadow-md"
          />
          <p className="font-bold text-3xl">
            Welcome to Valankanni Packers and Movers!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {subtopics.map((subtopic, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800">{subtopic.title}</h3>
            <p className="text-gray-600 mt-2">{subtopic.content}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
