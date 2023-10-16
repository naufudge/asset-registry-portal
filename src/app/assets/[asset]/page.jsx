"use client";

import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, Suspense, useState } from "react";



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
        <div className="text-center">
            <Suspense fallback={<h2>Loading..</h2>}>
                <button 
                onClick={() => router.back()}
                className="rounded-full bg-purple-400 p-2 m-3 text-white"
                >Go back</button>


                <p className="text-2xl">{results[1]}</p>
                <h1><b>Inventory Number:</b> {results[0]}</h1>
                <h1><b>Location:</b> {results[2]}</h1>
            </Suspense>
        </div>
    )
}