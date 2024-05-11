import React from 'react'
import './muscleComponents.css'
import data from '../../detailsHolder';
import { useLocation, useNavigate } from 'react-router-dom';

function MuscleComponents() {
  const location = useLocation();
  const navigate  = useNavigate()
  const name = location.state;
  const field = data[name];

  return (
    <center>
    <div className='divHolder'>
      {field.map((data, index) => {
        if(data.next !== undefined){
          return(
          <div className="itemHolder" key={index}>
              <div className="item">
                  <img src={data.img} alt="" />
                  <center><button onClick={() => {navigate('/exercise', {state : data.next})}} >{data.name}</button></center>
              </div>
          </div>)
        }else{
          return(
            <div className="itemHolder" key={index}>
                <div className="item">
                    <img src={data.img} alt="" />
                    <center><button>{data.name}</button></center>
                </div>
            </div>)
        }
      })
      }
    </div>
    </center>
  )
}

export default MuscleComponents