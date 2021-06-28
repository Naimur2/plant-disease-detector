/* eslint-disable prettier/prettier */
import React from 'react';
import FlowerImage from './components/common/FlowerImage';
import PlantTreatment from './components/disease/PlantTreatment';


export default function OutputPage({recognitions,fileData}) {
  const renderName = ()=>{
    if (recognitions !== null) {return <PlantTreatment recognitions={recognitions} />;}
    return null;
  };
  return (
  <>
  <FlowerImage recognitions={recognitions} fileData={fileData} />
  {renderName()}
  </>
  );
}
