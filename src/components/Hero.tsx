import { TextReveal } from "reactbits/text-animations";
import * as Aurora from "../blocks/Backgrounds/Aurora";
import { ButtonShimmer } from "reactbits/components";
import TextTrail from '../../node_modules/three';
export default function Hero() {
  return (
    <Aurora.Aurora>
      <div className="text-center p-10 text-white space-y-4">
        <TextReveal text="Welcome to Nmasinachi’s Kitchen" className="text-4xl font-bold" />
        <TextTrail 
          text="Welcome to Nmasinachi’s Kitchen"
          animateColor={true}
          colorCycleInterval={1500}
          noiseFactor={1.5}
          noiseScale={0.002}
        />
        <p className="text-xl">Exotic meals, cooked with love and tradition</p>
        <ButtonShimmer>Order Now</ButtonShimmer>
      </div>
    </Aurora.Aurora>
  );
}
