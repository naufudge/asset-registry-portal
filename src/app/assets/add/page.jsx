'use client';

import { useState, useEffect } from "react"
import axios from 'axios'

const AddAssetPage = () => {
    const [assets, setAssets] = useState(null)
    const [mainCategory, setMainCategory] = useState(null)
    const [subCategory, setSubCategory] = useState(null)
    const [subSubCategory, setSubSubCategory] = useState(null)
    const [categorySelections, setSelections] = useState({
        main: '',
        sub: '',
        subsub: '',
        mini: ''
    })  

    const [details, setDetails] = useState({
        inventory: '',
        assetName: '',
        previousLocation: '',
        currentLocation: '',
        date: ''
    })

    useEffect(() => {
        async function getAsset() {
            const response = await axios.get('/api/asset_categories')
            setAssets(response.data)
        }
        try {
            if (!assets) getAsset();
        } catch (error) {
            console.log(error.message);
        }
    }, [assets])

    const numberFormat = (num) => {
        if (parseInt(num) < 10) {
            return `0${num}`;
        } else return num;
    }

    const mainCatSelect = (category) => {
        if (category === "null") {
            setMainCategory(null)
            setSubCategory(null)
            setSubSubCategory(null)
            return;
        }
        setMainCategory(assets.assetCats[category]);
        setSelections({...categorySelections, main: assets.assetNums[category]})
    }

    const subCatSelect = (subCategory) => {
        setSubCategory(mainCategory[subCategory])
        console.log(mainCategory[subCategory])
        setSelections({...categorySelections, sub: assets.assetNums[subCategory]})
    }

    const subSubCatSelect = (subSubCategory) => {
        setSelections({...categorySelections, subsub: assets.assetNums[subSubCategory]})
        const miniCategory = subCategory[subSubCategory]
        if (miniCategory?.length > 0) {
            setSubSubCategory(miniCategory)
        } else {
            setSubSubCategory(null)
        }
    }

    const submitAsset = () => {
        if (categorySelections.mini === '' && details.date) {
            setDetails({...details, inventory: `433-${details.date[0].slice(-2)}-${numberFormat(categorySelections.main)}-${categorySelections.sub}-${categorySelections.subsub}`})
        } else if (details.date) {
            setDetails({...details, inventory: `433-${details.date[0].slice(-2)}-${numberFormat(categorySelections.main)}-${categorySelections.sub}-${categorySelections.subsub}-${categorySelections.mini}`})
        }
    }

    return (
        <div>
        <div className='text-center font-[Quicksand] mt-10'>
            <h1 className='text-3xl font-extrabold'>Add an Asset</h1>
            <form className='flex flex-col items-center justify-center mt-5 gap-2 w-fit mx-auto'>
                
                <label className="flex flex-col"> <span className="text-left font-semibold">Asset Name: </span>
                <input type="text" className='px-3 py-1 rounded-lg drop-shadow-md focus:outline-none w-[250px]'
                onChange={(e) => {setDetails({...details, assetName: e.target.value})}}
                required={true}
                />
                </label>

                <label className="flex flex-col"> <span className="text-left font-semibold">Asset Category:</span> 
                <select className='px-2 py-1 rounded-lg drop-shadow-md focus:outline-none w-[250px]'
                        onChange={(e) => {mainCatSelect(e.target.value)}}>
                    <option value="null"></option>
                    {assets ? Object.keys(assets?.assetCats).map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    )): null}
                    
                </select>
                </label>

                {mainCategory ? 
                <label className="flex flex-col"> <span className="text-left font-semibold">Asset Sub Category:</span> 
                <select className='px-2 py-1 rounded-lg drop-shadow-md focus:outline-none w-[250px]'
                        onChange={(e) => {subCatSelect(e.target.value)}}>
                    {Object.keys(mainCategory).map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </select>
                </label>
                : 
                null}

                {subCategory ? 
                <label className="flex flex-col"> <span className="text-left font-semibold">Asset Sub Sub Category: </span>
                <select className='px-2 py-1 rounded-lg drop-shadow-md focus:outline-none w-[250px]'
                        onChange={(e) => {subSubCatSelect(e.target.value)}}>
                    {Object.keys(subCategory).map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </select>
                </label>
                : 
                null }

                { subSubCategory ?
                    <label className="flex flex-col"> <span className="text-left font-semibold"> Asset Sub Sub Sub Category: </span>
                    <select className='px-2 py-1 rounded-lg drop-shadow-md focus:outline-none w-[250px]'
                            onChange={(e) => {setSelections({...categorySelections, mini: assets.assetNums[e.target.value]})}}>
                        {subSubCategory.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </select>
                    </label>
                    :
                    null
                }

                <label className="flex flex-col"> <span className="text-left font-semibold"> Previous Location: </span>
                <input type="text" className='px-3 py-1 rounded-lg drop-shadow-md focus:outline-none w-[250px]'
                onChange={(e) => {setDetails({...details, previousLocation: e.target.value})}}
                />
                </label>

                <label className="flex flex-col"> <span className="text-left font-semibold"> Current Location: </span>
                <input type="text" className='px-3 py-1 rounded-lg drop-shadow-md focus:outline-none w-[250px]'
                onChange={(e) => {setDetails({...details, currentLocation: e.target.value})}}
                />
                </label>

                <label className="flex flex-col"> <span className="text-left font-semibold"> Date: </span>
                <input type="date" className='px-3 py-1 rounded-lg drop-shadow-md focus:outline-none w-[250px]'
                onChange={(e) => {setDetails({...details, date: e.target.value.split('-')})}}
                />
                </label>

                <button type="button" onClick={submitAsset}
                className="bg-gradient-to-r from-purple-500 via-violet-500 to-purple-600 mx-auto px-4 py-1 my-5 rounded-full text-white hover:scale-110 transition-all"
                >Submit</button>
            </form>
            {details.inventory ? <p><b>Asset Number:</b> {details.inventory}</p>  : false}
            
        </div>
        </div>
    )
}

export default AddAssetPage
