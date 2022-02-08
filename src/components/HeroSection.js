import Navbar from "./Navbar";

function HeroSection() {
    return (
        <div className="bg-cyan-600 h-[550px]">
            <div className="container mx-auto">
                <Navbar/>
                <div>
                    <h1 className="text-white text-center text-3xl w-6/12 mx-auto mt-20 leading-relaxed font-semibold">Saya seorang front-end engineer, back-end engineer, dan juga UI designer</h1>
                </div>
            </div>
            
        </div>
    );
}

export default HeroSection;