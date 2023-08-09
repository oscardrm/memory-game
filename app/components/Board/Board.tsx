'use client';
import { EntryInterface } from "@/app/interfaces/images/entryInterface";
import { useEffect, useState } from "react";

interface ApiImagesInterface {
    entries: EntryInterface[];
}


const Board = () => {
    // normally this url is stored in an environment but for practical purposes I will leave it here
    const API_IMGES_URL = 'https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20';
    const [images, setImages] = useState<ApiImagesInterface>({ entries: [] });

    useEffect(()=>{
        getApiImages();
    },[])

    /**
     * This method fetches the images from the API
     */
    const getApiImages = ()=>{
        fetch(API_IMGES_URL)
        .then(res => res.json())
        .then(data => setImages(data))
        .catch(err => console.log(`Some error occured: ${err}`));
    }

    return (
        <div className="grid grid-cols-5 gap-10">
            {images.entries.map((item) => (
                <div className="box-border h-50 w-32 p-4 border-4">
                                <img src={item?.fields?.image?.url}></img>

              </div>
                // <div key={item?.fields?.image?.uuid}>{item?.fields?.image?.title}</div>
            ))}
        </div>
    );
}

export default Board;