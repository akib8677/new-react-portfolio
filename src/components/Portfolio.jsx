import reactWeather from '../assets/reactWeather.jpg';
import arrayDestruct from '../assets/arrayDestruct.jpg';
import reactParallaxs from '../assets/reactParallaxs.jpg';
import navbar from '../assets/navbar.jpg';
import reactsmooths from '../assets/reactsmooths.jpg';
import installNodes from '../assets/installNodes.jpg';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      imageUrl: arrayDestruct
    },
    {
      id: 2,
      imageUrl: reactParallaxs
    },
    {
      id: 3,
      imageUrl: navbar
    },
    {
      id: 4,
      imageUrl: reactsmooths
    },
    {
      id: 5,
      imageUrl: installNodes
    },
    {
      id: 6,
      imageUrl: reactWeather
    },
  ]
  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 px-12 sm:px-0 h-full">
          {
            portfolios.map(({ id, imageUrl }) => {
              return (
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                  <img src={imageUrl} alt="" className='rounded-md duration-200 hover:scale-105' />
                  <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-4 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                    <button className='w-1/2 px-4 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Portfolio
