import { FC, useEffect, useState } from "react";
import Lottie from "lottie-react";
// Remove direct import of JSON from public folder

const AvatarAnimation: FC = () => {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    fetch("/lotie-ani.json")
      .then((res) => res.json())
      .then(setAnimationData);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      {animationData && (
        <Lottie 
          animationData={animationData} 
          loop={true} 
          style={{ height: 300, width: 300 }}
        />
      )}
    </div>
  );
};

export default AvatarAnimation;
