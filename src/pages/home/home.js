import React from 'react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { IContextualMenuProps } from '@fluentui/react/lib/ContextualMenu'; 
import './home.css'; 
import ColorPicker from '../../components/common/ColorPicker';
import FontWeightPicker from '../../components/common/FontWeightPicker';



const menuProps: IContextualMenuProps = {
  items: [
    {
      key: 'emailMessage',
      text: 'Email message',
      iconProps: { iconName: 'Mail' },
    },
    {
      key: 'calendarEvent',
      text: 'Calendar event',
      iconProps: { iconName: 'Calendar' },
    },
  ],
};

const Home = () => {
  return (
    <dev class = "center-content">
      <h2>Hello BHai</h2>
      <div>

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

<DefaultButton
        text="Clear Canvas"
     
      />

<DefaultButton
                    text="Click for options"
                    menuProps={menuProps}
                />

<DefaultButton
        text="Primary"
        primary
        split
        splitButtonAriaLabel="See 2 options"
        aria-roledescription="split button"
        menuProps={menuProps}
 
      />
</div>

      
    </dev>
  );
};

export default Home;
