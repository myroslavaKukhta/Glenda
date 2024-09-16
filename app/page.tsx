"use client"

import Main from "@/app/Main";
import Sidebar from "@/app/Sidebar";
import Navbar from "@/app/Navbar";
import Footer from "@/app/Footer";


const Home: React.FC = () => {


    return (
        <div className="bg-green-100 min-h-screen flex flex-col items-center">
            <Navbar/>
            <Main/>
            <Sidebar/>
            <Footer/>

        </div>
    );
}

export default Home;