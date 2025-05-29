import React from "react";

function Search({searchTerm, setSearchTerm}){
    return(
        <div className="search">
            <div>
                <img src="./public/vector.svg" alt="search" />

                <input type="text"
                       placeholder="Search thorugh thousands of movies"
                       value={searchTerm} 
                       onChange={(event)=> setSearchTerm(event.target.value)}/>
                       
            </div>
        </div>
    )
}

export default Search