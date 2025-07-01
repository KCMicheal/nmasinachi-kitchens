// import { TextReveal } from "reactbits/text-animations";
import Aurora from "../blocks/Backgrounds/Aurora/Aurora";
// import { ButtonShimmer } from "reactbits/components";
import TextTrail from '../assets/TextTrail'
export default function Hero() {
  return (
    <>
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        speed={1.5}
        amplitude={0.5}
        blend={0.2}
        time={0.5}
      />
      <div className="text-center p-10 text-white space-y-4">
        {/* <TextReveal
          text="Welcome to Nmasinachi’s Kitchen"
          className="text-4xl font-bold"
        /> */}
        <TextTrail
          text="Welcome to Nmasinachi’s Kitchen"
          animateColor={true}
          colorCycleInterval={1500}
          noiseFactor={1.5}
          noiseScale={0.002}
        />
        <p className="text-xl">Exotic meals, cooked with love and tradition</p>
        {/* <ButtonShimmer>Order Now</ButtonShimmer> */}
      </div>
    </>
  );
}
