"use client";

import { useRouter } from "next/navigation";
import {AiOutlineArrowLeft} from "react-icons/ai";

const BackButton:React.FC = () => {
    const router = useRouter();

    const goBack = () => {
        router.back();
    };

    return (
        <button
        onClick={goBack}
        className="fixed top-4 left-4 bg-gray-200 p-2 rounded hover:bg-gray-400 z-flex items-center"
        >
            <AiOutlineArrowLeft size={24}/>
        </button>
    )
}

export default BackButton;