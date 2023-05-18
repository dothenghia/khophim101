export function getAllDataPages() {
    const dataPages = [];

    for (let i = 1; i <= 95; i++) {
        dataPages.push(
            {
                params : {
                    page: i.toString()
                }
            }
        )
    }

    return dataPages    
}

