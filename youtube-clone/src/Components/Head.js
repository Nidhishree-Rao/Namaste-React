import React, { cache, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../Utils/appSlice';
import { YOUTUBE_SUGGEST_API } from '../Utils/constants';
import { cacheResults } from '../Utils/searchSlice';

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);
    const dispatch = useDispatch();

    const cacheSearch = useSelector((store) => store.search);

    useEffect(() => {
        const timer = setTimeout(() =>  {
            if(cacheSearch[searchQuery]){
                setSuggestions(cacheSearch[searchQuery]);
            }
            else{
                getSearchSuggestions()
            }
            },200);

        return () => {
            clearTimeout(timer);
        };
    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        console.log('API CALL' + searchQuery);
       
            const data = await fetch(YOUTUBE_SUGGEST_API + searchQuery);
            const json = await data.json();
            setSuggestions(json[1]);
            //if it is not present on the cache,we have to make an api call, now we have to update on the cache.
            dispatch(cacheResults({
                [searchQuery] : json[1],           }))
     
    };

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    return (
        <div className="grid grid-flow-col shadow-md p-5 m-2">
            <div className="flex col-span-1 items-center">
                <img
                    onClick={() => toggleMenuHandler()}
                    className="h-6"
                    alt="menu"
                    src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
                />
                <a href="/">
                    <img
                        className="h-16 mx-2"
                        alt="logo"
                        src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
                    />
                </a>
            </div>
            <div className=" col-span-10 px-3">
                <div className="relative"> {/* Add relative positioning */}
                    <input
                        className="w-1/2 border border-gray-400 py-1 px-2 rounded-l-full"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestion(true)}
                        onBlur={() => setShowSuggestion(false)}
                    />
                    <button className="bg-gray-100 border border-gray-300 py-1 px-2 rounded-r-full">
                        Search
                    </button>
                </div>

                {showSuggestion && (
                    <div className="absolute bg-white px-5 py-2 w-[34rem] shadow-lg rounded-lg border border-gray-100">
                        <ul>
                            {suggestions.map((s) => (
                                <li key={s} className="hover:bg-gray-200 py-2">
                                    🔍 {s}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div className="col-span-1">
                <img
                    className="h-8"
                    alt="user"
                    src="data:image/png;base64,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"
                />
            </div>
        </div>
    );
};

export default Head;