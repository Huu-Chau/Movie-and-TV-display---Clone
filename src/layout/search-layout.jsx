import axios from "axios";
import { SearchList } from "../components/search-list/search-list";
import { useState, useEffect, useRef } from "react";

export default function SearchLayout() {
    const api_key = import.meta.env.VITE_API_KEY
    const api_url = import.meta.env.VITE_API_URL
    // db
    const [result, setResult] = useState({})
    // const [isSearching, setIsSearching] = useState(false)
    // input text to fetch
    const [inputValue, setInputValue] = useState('')
    // type of button for fetching
    const [insertType, setInsertType] = useState(0)
    let inputUrl = 'movie'

    function typeChange(e) {
        const buttonType = e.target.textContent
        switch (buttonType) {
            case 'Actors':
                setInsertType(2)
                break
            case 'Tv Series':
                setInsertType(1)
                break
            case 'Movies':
                setInsertType(0)
                break
        }
    }
// use debound as opt 2
    function handleChange(e){
        const search = e.target.value.toLowerCase()
        setInputValue(search)
    }

    const searchItem = async () => {
        switch (insertType) {
            case 0:
                inputUrl = 'movie'
                break;
            case 1:
                inputUrl = 'tv'
                break;
            case 2:
                inputUrl = 'person'
                break;
        }
        const response = await axios.get(`${api_url}/search/${inputUrl}?query=${inputValue}&api_key=${api_key}`)
        setResult(response.data)
        console.log(response.data.results)
    }

    return ( 
        <>
            <main className='bg-primary_black w-full' style={{paddingTop:'8vh'}}>
                <div className="flex mx-auto w-6/12 my-4">
                    <button onClick={typeChange} className="p-2 text-gray-200 text-xl mx-auto w-3/12">Movies</button>
                    <button onClick={typeChange} className="p-2 text-gray-200 text-xl mx-auto w-3/12 ml-4">Tv Series</button>
                    <button onClick={typeChange} className="p-2 text-gray-200 text-xl mx-auto w-3/12 ml-4">Actors</button>
                </div>
                <div className="flex mx-auto w-4/12">
                    <input onChange={handleChange} className="p-2 rounded-md mx-auto flex text-black" type="text" placeholder="Insert here..."/>
                    <button onClick={searchItem} className="p-2 text-gray-200 text-xl">Search</button>
                </div>
                <section className="search-list w-8\/12" style={{height:'277vh'}}>
                    {result != {} &&
                        <SearchList data={result.results} searchType={insertType}/>
                    }
                </section>   
            </main>
        </>
    );
}