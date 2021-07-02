/* eslint-disable prettier/prettier */
import React from 'react';
import PlantTreatment from './PlantTreatment';


export default function OutputPage({recognitions,fileData}) {
  const renderName = ()=>{
    if (recognitions !== null) {return <PlantTreatment fileData={fileData} recognitions={recognitions} />;}
    return null;
  };
  return (
  <>
  {renderName()}
  </>
  );
}
