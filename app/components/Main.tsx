"use client";

import Image from "next/image";
import React, {useState} from "react";

interface Images {
    id: number,
    src: string,
    alt: string
}

const houseImages: Images[] = [
    {id: 1, src: "/images/witch-house-1.jpg", alt: "House 1"},
    {id: 2, src: "/images/witch-house-2.jpg", alt: "House 2"},
    {id: 3, src: "/images/witch-house-3.jpg", alt: "House 3"},
    {id: 4, src: "/images/witch-house-4.jpg", alt: "House 4"},
    {id: 5, src: "/images/witch-house-5.jpg", alt: "House 5"},
]

const Main: React.FC = () => {
    const [currentHomeImage, setCurrentHomeImage] = useState(0);

    const nextHomeImage = () => {
        setCurrentHomeImage((prevIndex) => (
            prevIndex === houseImages.length - 1 ? 0 : prevIndex + 1)
        );
    }

    const prevHomeImage = () => {
        setCurrentHomeImage((prevIndex) => (
            prevIndex === 0 ? houseImages.length - 1 : prevIndex - 1)
        );
    }
return (
    <main className="flex-1 p-4">
        <div className="flex flex-col items-center justify-center mb-6">
            <Image
                src={houseImages[currentHomeImage].src}
                className="rounded shadow-lg"
                alt={houseImages[currentHomeImage].alt}
                width={600}
                height={200}>
            </Image>

            <div className="flex space-x-4 mb-8">
                <button onClick={prevHomeImage}
                        className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition w-1/2 mr-2"
                >
                    Previous
                </button>

                <button onClick={nextHomeImage}
                        className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition w-1/2 mr-2"
                >
                    Next
                </button>
            </div>

        </div>
    </main>
)
}

export default Main;