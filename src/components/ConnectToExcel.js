const xlsx = require('xlsx');

const workbook = xlsx.readFile("src/NA Asset Register 2023.xlsx");

export const asset_registry = (search = null) => {
    const all_results = []
    for (let j = 0; j < workbook.SheetNames.length; j++) {
        const worksheet = workbook.Sheets[workbook.SheetNames[j]];
        // console.log(workbook.SheetNames[j])
        const results = [];
        for (let i = 0; i <= 60; i++) {
            try {
                const asset_number = worksheet[`B${i}`].v;
                if (asset_number.toLowerCase() === "asset number") {
                    continue;
                }
                const name = worksheet[`D${i}`]?.v;
                const location = worksheet[`I${i}`]?.v;
                const condition = worksheet[`L${i}`]?.v;

                results.push([asset_number, name, location, condition])
                all_results.push([asset_number, name, location, condition])
            } catch (error) {
                // console.log(`${i} not found`)
                continue;
            }
        }
        // console.log(results)
    }
    if (search) {
        var results = [];
        all_results.filter(item => {
            if (item[0].toString() === search.toString()) {
                results.push(item)
            }
        })
        console.log("found the asset");
        return results;
    } else {
        return all_results;
    }
}