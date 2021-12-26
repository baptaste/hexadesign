import React from 'react';
import ContentLoader, { Instagram } from "react-content-loader";

const Loader = ({ width, height }) => {
  // console.log('width :', width);
  // console.log('height :', height);

  return (
    <ContentLoader style={{ width: width, height: height }}>
      <rect x="0" y="0" rx="0" ry="0" width={width} height={height} />
      {/* <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
      <rect x="80" y="40" rx="3" ry="3" width="250" height="10" /> */}
    </ContentLoader>
  )
}



export default Loader;