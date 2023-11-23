import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Sidenavbar from '../Sidenavbar';


const Explore = () => {
  const [img,setImg] = useState([])
  
  useEffect(()=> {
     axios.get('https://api.unsplash.com/photos/?client_id=IYazAXZr2SGyf9DjDUEcw9Br51qlGSMLV4LbHiPHlhk')
     .then(res=> {setImg(res.data)})
     .catch(err=> console.log(err))
      
   
  },[])
  
  return (
    
      <div>
        <div className="row">
     <div className="col-lg-2 ">
          <div className='home-navigation'>
            <Sidenavbar/>
          </div>
        </div>
        <div className="col" >
       <div className='fetch-image m-4 p-4 '  style={{ paddingLeft:0 }}>
       {img.map((image, i) => (
  <img
    key={i} // Add a key prop for each image
    src={image.urls.thumb}
    alt='photo gallery'
    className='img-thumbnail'
    style={{ width: '400px', height: '400px', marginRight: '10px', marginBottom: '10px' }}
  />
))}

        </div>
        </div>
      </div>
      </div>
  )
}

export default Explore