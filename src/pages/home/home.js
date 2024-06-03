import React, { useEffect } from 'react';
import { IContextualMenuProps, Stack, IStackTokens } from '@fluentui/react';
import { DefaultButton } from '@fluentui/react/lib/Button';

export interface IButtonExampleProps {
  disabled?: boolean;
  checked?: boolean;
}

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

// Example formatting
const stackTokens: IStackTokens = { childrenGap: 40 };

const Home: React.FC = () => {
    useEffect(() => {
        // This useEffect hook ensures the canvas is set to the correct width
        const canvas = document.getElementById('ArtBoard');
        canvas.width = window.innerWidth * 0.7;
    }, []);

    return (
        <>
            <h2>Hello BHai</h2>
            <Stack tokens={stackTokens}>
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
                <canvas
                    id="ArtBoard"
                    height="100"
                    style={{ border: '1px solid #000000', width: '70%' }}
                />
            </Stack>
        </>
    );
}

export default Home;
