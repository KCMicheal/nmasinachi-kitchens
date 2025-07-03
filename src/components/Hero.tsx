import Aurora from "../blocks/Backgrounds/Aurora/Aurora";
import TextTrail from '../assets/TextTrail';
import React from 'react';

const MemoizedAurora = React.memo(Aurora);

const HeroContent = () => {
  return (
    <div className="text-center p-10 text-white space-y-6 md:p-12">
      <TextTrail
        text="Welcome to Nmasinachi’s Kitchen"
        animateColor={true}
        colorCycleInterval={1500}
        noiseFactor={1.5}
        noiseScale={0.002}
      />
      <p className="text-xl md:text-2xl">Exotic meals, cooked with love and tradition</p>
    </div>
  );
};

export default function Hero() {
  return (
    <>
      <MemoizedAurora
        speed={1.5}
        amplitude={0.5}
        blend={0.2}
        time={0.5}
      />
      <HeroContent />
    </>
  );
}
