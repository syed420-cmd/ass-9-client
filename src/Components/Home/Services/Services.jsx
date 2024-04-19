import { async } from '@firebase/util';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionHead from '../../ReusableUI/SectionHead';

const Services = () => {

  const [allData, setAllData] = useState([])
  const [jsonData, setJsonData] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get("../../../../public/services.json")
        setAllData(data.data)
      }
      catch { }
    }
    fetchData()

  }, [])

  const handelsetCourseData = (course) => {
    setJsonData(course)
    navigate("/estate-details",
      {
        state: { jsonData: course }
      })
  }

  console.log(allData)
  return (
    <div className='w-full mt-8'>
      <div className='mx-auto max-w-screen-2xl px-4 my-20'>
        <SectionHead
          title='Our Residence'
          subTitle='Seamless Solutions Tailored to Your Event NeedsElevate your events with our expertise. From planning to execution, we offer comprehensive solutions that bring your vision to life.'
        />
        {/* all services wrap  */}
        <div className='grid gap-10 content-center justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

          {

            allData?.map((data, index)=> (
              <div key={index} class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src={data?.image}alt="Sunset in the mountains" />


                <div class="px-6 py-4">
                  <div className='flex items-center justify-between mb-1'>
                    <p className='text-xl mb-1 text-blue-400'>{data.price}</p>
                    {
                      data.status === "rent" ?
                        <p className='px-4 rounded-full mb-1 text-white bg-red-400'>{data.status}</p>
                        :
                        <p className='px-4 rounded-full mb-1 text-white bg-green-400'>{data.status}</p>
                    }
                  </div>
                  <div class="font-bold text-xl mb-2">{data.estate_title}</div>
                  <p class="text-gray-600 text-base">
                    {data.description}
                  </p>
                  <p className='mt-3 text-gray-600'><span className='font-semibold'>Location:</span> {data.location}</p>
                </div>
                <div class="px-6 py-0">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Area: {data.area}</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{data.segment_name}</span>
                </div>

                <div class="px-6 py-4">
                  <div>Facilities</div>
                  {
    data?.facilities?.map((facility, index) => {
      return <p key={index}>{facility}</p>; // Add a return statement here
    })
  }
                </div>

                <div className='flex justify-center mb-10'>
                  <button onClick={() => handelsetCourseData(data)} className='text-white bg-blue-300 hover:bg-blue-400 transition-all font-semibold rounded-full px-10 py-2 '>View Property</button>
                </div>

              </div>
            ))
          }


        </div>
      </div>
    </div>
  );
};
export default Services;
