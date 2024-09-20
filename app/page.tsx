"use client"

import Main from "@/app/components/Main";
import Sidebar from "@/app/components/Sidebar";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";


const Home: React.FC = () => {
    const sidebarItems = [
        {label: 'Grimyar', href: '/grimyar'},
        {label: 'Gallery', href: '/gallery'},
        {label: 'Familiar', href: '/familiar'},
        {label: 'About project', href: '/about'}
    ]

    return (
        <div className="bg-green-100 min-h-screen flex flex-col items-center">
            <Navbar/>
            <Main/>
            <Sidebar items={sidebarItems}/>
            <Footer/>

        </div>
    );
}

export default Home;