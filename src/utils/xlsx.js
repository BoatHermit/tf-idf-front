import XLSX from 'xlsx'


export function xlsx(jsonData, fields, sheetName, filename = '.xlsx') {
    jsonData.forEach(item => {
        for (let i in item) {
            if (fields.hasOwnProperty(i)) {
                item[fields[i]] = item[i];
            }
            delete item[i];
        }
    })

    let book = XLSX.utils.book_new()
    let sheet = XLSX.utils.json_to_sheet(jsonData, { header: Object.values(fields) })
    sheet['!cols'] = [
        { wch: 5 },
        { wch: 20 },
        { wch: 10 },
        { wch: 10 },
        { wch: 15 },
        { wch: 20 }
    ]
    XLSX.utils.book_append_sheet(book, sheet, sheetName)
    XLSX.writeFile(book, filename)
}
