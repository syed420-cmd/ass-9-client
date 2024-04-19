import React from 'react';

const About = () => {
    return (
        <div>
            <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div class="max-w-lg">
                        <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">About Nestify</h2>
                        <p class="mt-4 text-gray-600 text-lg">Welcome to Nestify Real Estate, your trusted partner in finding the perfect property. With our team of experts and user-friendly platform, we're here to make your real estate journey seamless. Whether you're buying, selling, or renting, Nestify has you covered. Find your dream home with Nestify today.</p>

                    </div>
                    <div class="mt-12 md:mt-0">
                        <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D" alt="About Us Image" class="object-cover rounded-lg shadow-md" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;