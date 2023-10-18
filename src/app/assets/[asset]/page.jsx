"use client";

import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, Suspense, useState } from "react";
import './asset.css'



export default function assetPage({ params: { assetId } }) {
    const router = useRouter()
    const [results, setResults] = useState([]);
    const path = usePathname()
    
    useEffect(() => {
      const getAsset = async () => {
        try {
          const response = await axios.get('../api/assets')
          return response;
        } catch (error) {
          console.log(error)
        }
      }
      getAsset().then(function(result) {
        try{
          var results = [];
          const asset_register = result.data.assets
          const searchTerm =  path.split("/").pop();

          if (searchTerm) { 
            asset_register.filter(item => {
              if(searchTerm.toString() === item[0].toString()) {
                results.push(item);
              }
            })
          } else {
            results = asset_register
          }
          setResults(results[0], results[1], results[2])
          return results;
        } catch (error) {
          console.log(error)
        }
      }) 
    }, [])
   
    return (
        <div className="main grid text-center place-items-center">
            <Suspense fallback={<h2>Loading..</h2>}>
                <div className="main-card mt-10 m-3 p-10 drop-shadow-lg bg-white rounded-2xl items-center justify-center">
                  <p className="text-2xl font-bold">{results[1]}</p>
                  <br />
                  <h1><b>Inventory Number:</b> {results[0]}</h1>
                  <h1><b>Location:</b> {results[2]}</h1>
                </div>

                <button 
                onClick={() => router.back()}
                className="rounded-full bg-transparent outline p-2 m-3 text-purple-400 hover:bg-purple-400 hover:text-white transform duration-300"
                >Go back</button>
            </Suspense>
        </div>
    )
}