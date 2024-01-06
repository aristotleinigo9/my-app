import React from "react"
import "./courses.css"
import { coursesCard } from "../../dummydata2"

const CoursesCard = () => {
  return (
    <>
      <section className='coursesCard'>
        <div className='container grid1'>
          {coursesCard.map((val) => (
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                  <br></br>
              
                  <div className='details'>
                    {val.courseInfo.map((details) => (
                      <>
                        <div className='box'>
                      
                          <div className='para'>
                            <h4>{details.description}</h4>
                            <br></br>
                          </div>
                        </div>
                        <span>{details.learners}</span>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CoursesCard
