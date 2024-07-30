import { SearchItem } from "../search-item/search-item";

export function SearchList({data, searchType}) {
    const filteredData = Array.isArray(data) ? data.filter(valid => valid.poster_path !== null) : [];
    return(
        <>
        {filteredData.map((searchData) => (
                <SearchItem 
                    key={searchData.id}
                    id={searchData.id} 
                    img={searchData.poster_path} 
                    name={searchType == 0 ? searchData.title : searchData.name} 
                    searchType={searchType}
                />
            ))}
        </>          
    )
}