import profileImage from '../assets/SabinProfile.jpg';

const Hero = ({ onViewProjectsClick }) => {
    return (
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
                {/* Text Content */}
                <div className="flex flex-col justify-center space-y-8 animate-fade-in">
                    <div className="space-y-4">
                        <h1 className="text-5xl font-extralight tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-6xl lg:text-7xl animate-slide-in">
                            Sabin Ranabhat
                        </h1>

                        <div className="relative">
                            <h2 className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-3xl font-medium tracking-tight text-transparent sm:text-4xl">
                                Software Engineer
                            </h2>
                        </div>
                    </div>


                    <div className="flex items-center space-x-4">
                        <button onClick={onViewProjectsClick} className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
                            View Projects
                            <svg
                                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 16l4-4-4-4" />
                                <path d="M8 12h8" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Image */}
                <div className="relative flex items-center justify-center lg:justify-end">
                    <div className="relative">
                        <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-75 blur-2xl" />
                        <img
                            src={profileImage}
                            alt="Sabin Ranabhat"
                            className="relative h-80 w-80 rounded-full object-cover shadow-2xl sm:h-96 sm:w-96"
                        />
                    </div>
                </div>
                <div className='py-4'></div>
            </div>
        </div>
    );
};

export default Hero;
