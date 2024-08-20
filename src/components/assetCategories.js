const assetCats = require('../../public/asset_category_lists.json')

const GetAssetCats = () => {
    const main_cats = Object.keys(assetCats)
    for (category in main_cats) {
        var sub = main_cats[category]
        console.log(assetCats[sub])
    }
}

// GetAssetCats();