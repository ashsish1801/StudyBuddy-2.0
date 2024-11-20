import React from 'react'
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineimage from "../../../assets/Images/TimelineImage.png"
 
const timeline = [
    {
        Logo:Logo1,
        heading : "Leadership",
        description : "Fully committed to the success of the company"
    },
    {
        Logo:Logo2,
        heading : "Responsibility",
        description : "Students will always be our top priority"
    },
    {
        Logo:Logo3,
        heading : "Flexibility",
        description : "The ability to switch is an important skills"
    },
    {
        Logo:Logo4,
        heading : "Solve the problem",
        description : "Code your way to a solution"
    },
]

const Timeline = () => {
  return (
    <div>
      <div className='flex flex-row gap-15 items-center'>
         <div className='w-[45%] flex flex-col gap-5'>
            {
                timeline.map ((element, index) => {
                    return (
                         <div className='flex flex-row gap-6' key={index}>
                            <div className='w-[50px] h-[50px] bg-white flex items-center'>
                                {/* <img src={element.Logo} /> */}
                                <img src={element.Logo} alt="img" />
                            </div>

                            <div>
                                <h2 className='font-semibold text-[18px]'>{element.heading}</h2>
                                <p className='text-base'>{element.description}</p>
                            </div>
                         </div>
                    )
                })
            }
         </div>

         <div className='relative shadow-blue-200'>

            <img src={timelineimage} alt='timelineImage' className='shadow-white object-cover h-fit'/>

            <div className='absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-10 '>
                <div>
                    <p className=' text-3xl font-bold'>10</p>
                    <p className='text-caribbeangreen-300 text-sm'>Years of Experience</p>
                </div>
            </div>

         </div>
      </div>
    </div>
  )
}

export default Timeline