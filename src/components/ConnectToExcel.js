const xlsx = require('xlsx');

const workbook = xlsx.readFile("src/NA Asset Register 2023.xlsx");

export const asset_registry = (search = null) => {
    const all_results = []
    for (let j = 0; j < workbook.SheetNames.length; j++) {
        const worksheet = workbook.Sheets[workbook.SheetNames[j]];
        // console.log(workbook.SheetNames[j])
        const results = [];
        for (let i = 0; i <= 50; i++) {
            try {
                if (results.length) {
                    if (results[0][1].toLowerCase() === "sap asset no." || results[0][1].toLowerCase() === "sap asset no") {
                        const asset_number = worksheet[`B${i}`].v;
                        const name = worksheet[`D${i}`].v;
                        const location = worksheet[`I${i}`].v;
                        results.push([asset_number, name, location])
                        all_results.push([asset_number, name, location])
                    } else {
                        const asset_number = worksheet[`B${i}`].v;
                        const name = worksheet[`C${i}`].v;
                        const location = worksheet[`H${i}`].v;
                        results.push([asset_number, name, location])
                        all_results.push([asset_number, name, location])
                    }
                } else {
                    const asset_number = worksheet[`B${i}`].v;
                    const name = worksheet[`C${i}`].v;
                    const location = worksheet[`H${i}`].v;
                    results.push([asset_number, name, location])
                }
                
            } catch (error) {
                // console.log(`${i} not found`)
                continue;
            }
        }
        // console.log(results)
    }
    return all_results;
}