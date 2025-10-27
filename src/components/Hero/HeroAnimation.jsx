import Spline from '@splinetool/react-spline';

const HeroAnimation = () => {
    return (
        <div
            id="hero"
            className="w-full xl:w-1/2 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] xl:h-[700px] flex items-center justify-center relative overflow-hidden mb-12 xl:mb-0"
        >
            <div className="w-full h-full [&_#logo]:!hidden [&_[class*='watermark']]:!hidden">
                <Spline
                    scene="https://prod.spline.design/N087oLnpQSYsYD6I/scene.splinecode"
                    className="absolute right-[-10%] sm:right-[-15%] md:right-[-20%] lg:right-[-25%] xl:right-[-28%] top-[-10%] sm:top-[-12%] md:top-[-15%] lg:top-[-10%] xl:top-0"
                />
            </div>

            {/* Decorative lines */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-3/4 bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_10px_rgba(255,122,0,0.5)]"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-3/4 bg-gradient-to-b from-transparent via-primary to-transparent shadow-[0_0_10px_rgba(255,122,0,0.5)]"></div>
        </div>
    );
};

export default HeroAnimation;
