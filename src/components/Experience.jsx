import css from '../assets/csss.png';
import html from '../assets/html.png';
import javascript from '../assets/JavaScript-logo.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import nextjs from '../assets/nextjs.png';
import github from '../assets/github.png';
import bootstrap from '../assets/bootstrap.png';

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: react,
      title: 'React',
      style: 'shadow-blue-700'
    },
    {
      id: 5,
      src: tailwind,
      title: 'Tailwind CSS',
      style: 'shadow-[#44a8b3]'
    },
    {
      id: 6,
      src: nextjs,
      title: 'NEXT.JS',
      style: 'shadow-white'
    },
    {
      id: 7,
      src: bootstrap,
      title: 'Bootstrap',
      style: 'shadow-[#7511f7]'
    },
    {
      id: 8,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-300'
    },
  ]
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div >
          <p className="text-4xl font-bold inline p-2 border-b-4 border-gray-500 ">
            Experience
          </p>
          <p className="py-6">These are the technologyies i've work with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 text-center gap-8 px-12 sm:px-0 py-8">
          {
            techs.map(({ id, src, title, style }) => {
              return (
                <div key={id} className={`shadow-md  py-2 rounded-lg duration-200 hover:scale-105 ${style}`}>
                  <img src={src} alt="" className='w-20 mx-auto' />
                  <p className='m-4'>{title}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Experience
