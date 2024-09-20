"use client";

import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "@/redux/store";
import {addLocation, removeLocation, clearLocations} from "@/redux/broomstickSlice";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";

const Broomstick: React.FC = () => {
    const sidebarItems = [
        {label: 'Training', href: '/broomstick/training'},
        {label: 'Culture journey', href: '/altar/culture'},
        {label: 'Climbing', href: '/altar/climb'},
        {label: 'Dreams', href: '/altar/dream'}
    ]

    const dispatch = useDispatch();
    const locations = useSelector((state: RootState) => state.broomstick.locations);

    const [destination, setDestination] = useState("");
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const storedLocations = localStorage.getItem('locations');
        if (storedLocations) {
            const parsedLocations = JSON.parse(storedLocations);
            parsedLocations.forEach((location: any) => {
                dispatch(addLocation(location))
            })
        }
    }, [dispatch])

    const fetchWeather = async (place: string) => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=8e89d3501adc5a2ff50cb5a545ecb45e&units=metric`
            );
            setWeather(response.data);
        } catch (error) {
            alert('Error fetching weather')
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetchWeather(destination)
    }

    const handleSaveLocation = () => {
        if (weather) {
            const newLocation = {
                id: locations.length + 1,
                name: destination,
                description: weather.weather[0].description,
                weather: `${weather.main.temp}°C`
            };
            dispatch(addLocation(newLocation));
            localStorage.setItem('locations', JSON.stringify([...locations, newLocation]))
            setDestination("");
            setWeather(null);
        }
    }

    const handleRemoveLocation = (locationId: number) => {
        dispatch(removeLocation(locationId));
        const updatedLocations = locations.filter((loc) => loc.id !== locationId)
        localStorage.setItem('locations', JSON.stringify(updatedLocations))
    }

    const handleClearAllLocations = () => {
        dispatch(clearLocations());
        localStorage.removeItem('locations');
    }

return (
    <div className="bg-blue-100 min-h-screen flex flex-col items-center py-10">
        <Navbar/>
        <Sidebar items={sidebarItems}/>
        <h1 className="text-4xl font-bold text-blue-800 mb-10">
            Glenda`s journey
        </h1>

        <form
            onSubmit={handleSubmit} className="mb-6">
            <input
                type="text"
                placeholder="Enter destination (e.g.Lysa Gora)"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="p-2 border rounded w-full mb-2"
            />
            <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
                Get Weather
            </button>
        </form>

        {weather && (
            <div className="mt-6">
                <h2 className="text-2xl font-bold mb-4">
                    Weather in {weather.name}
                </h2>
                <p>Temperature: {weather.main.temp}°C</p>
                <p>Weather: {weather.weather[0].description}</p>
                <button
                    className="mt-4 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
                    onClick={handleSaveLocation}>
                    Save Location
                </button>
            </div>
        )}

        <h2 className="text-2xl font-bold mt-10 mb-6">
            Saved Locations
        </h2>
        {locations.length > 0 ? (
            <ul className="list-disc pl-5">
                {locations.map((location) => (
                    <li key={location.id} className="mb-2">
                        <strong>{location.name}</strong>
                         {location.weather} ({location.description})
                        <button className="ml-4 text-red-600"
                                onClick={handleRemoveLocation}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        ) : (<p>No saved locations </p>)}

        {locations.length > 0 && (
            <button
                className="mt-6 bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800"
                onClick={handleClearAllLocations}>
                Clear all locations
            </button>
        )}
    </div>
)
}

export default Broomstick;