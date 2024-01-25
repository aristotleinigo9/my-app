import React from "react"
import "./courses.css"
import { coursesCard } from "../../dummydata5"

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

                        <div className="title">Description</div>
                        <div className='box'>
                          <div className='para'>
                            <h4>{details.description}</h4>
                            <br></br>
                          </div>

                        </div>

                        <div className="title">Learning Outcomes</div>

                          <div className='box'>
                            <div className='para'>
                              <h4>{details.outcomes}</h4>
                              <br></br>
                            </div>
                          </div>

                          <div className="title">Highligthed Competencies</div>
                          <div className='box'>
                            <div className='para'>
                              <h4>{details.competencies}</h4>
                              <br></br>
                            </div>
                          </div>

                        <div><span>{details.learners}</span></div>
                        <br></br>

                        <div><span>{details.requirements}</span></div>
                        <br></br>

                        <div><span>{details.delivery}</span></div>
                        <br></br>

                        <div><span>{details.duration}</span></div>
                        <br></br>
                        
                        <span>{details.contact}</span>
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
