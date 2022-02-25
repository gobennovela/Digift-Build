import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../abstract/digift_animation.json';

function LottieAnimation() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className='w-[35%] h-[35%]'>
            <Lottie options={defaultOptions} className="w-auto h-auto"/>
        </div>
    );
}

export default LottieAnimation;
