import React from 'react';
import './home.css'; 
import ColorPicker from '../../components/common/ColorPicker';
import Appearance from '../../components/common/Appearance';
import FontWeightPicker from '../../components/common/FontWeightPicker';





const Home = () => {
  return (
    <dev class = "center-content">
      <h2>Hello BHai</h2>
      <div>

        <view style={{flex:1}}>
          
        </view>


<canvas
        id="ArtBoard"
       
        style={{ border: '1px solid #000000', width: '70%' }}
      />

<div className="ms-Grid" dir="ltr">
          <div className="ms-Grid-row">
           
              <ColorPicker className="ms-Grid-col ms-sm8 ms-xl8" /> 
              <FontWeightPicker className="ms-Grid-col ms-sm8 ms-xl8" /> 
          </div>
      </div>
      </div>

  
      

<div class="btn">

 <Appearance/></div>

      
    </dev>
  );
};

export default Home;
