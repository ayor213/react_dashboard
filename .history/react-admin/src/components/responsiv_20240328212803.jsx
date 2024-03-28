import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

function ResponsiveComponent() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div>
      {isMobile ? <p>Mobile view</p> : <p>Non-mobile view</p>}
    </div>
  );
}

export default ResponsiveComponent;
