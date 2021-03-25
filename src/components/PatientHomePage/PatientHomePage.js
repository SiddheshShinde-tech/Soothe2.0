import React, { Component } from 'react'
import xyz from '../../assets/xyz.jpg'
import halflogo from '../../assets/halflogo.jpeg'
import './patienthomepage.css'
import {Link} from 'react-router-dom'

class PatientHomePage extends Component {
 state = {}
 render() {
  return(
   <div>


<div className="homepage-img-div" style={{  
  backgroundImage: "url(" + "https://teenmentalhealth.org/wp-content/uploads/2017/08/students-1.png" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}}>







<div className="homepage-asses-div">
    <div className="assess-head">
        <p className="assess-head-p">Know about yourself!</p>

    </div>

    <div className="assess-desc">
        <p className="assess-desc-p">When you’re going through a tough time it’s normal to feel down for a while, emotions like sadness and grief help make us human. But if you’re feeling sad or miserable most of the time over a long period of time, you might have depression.

Think about the last two weeks, rather than just today or yesterday. Take this self-test to help figure out whether you’re showing any of the warning signs of depression. It will help you decide the next step.</p>

    </div>

    <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
        <div class="rounded-md shadow">
            <Link to="/assessment" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 hover:bg-green-500 md:py-2.5 md:text-lg md:px-5" id="patienthomepage-btn" >
                Take Assessment
            </Link>
        </div> 
    </div>



    
</div>





</div>


   </div>
    )
   }
 }



export default PatientHomePage