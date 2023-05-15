export function getAllDataPages() {
    const dataPages = [];

    for (let i = 1; i <= 50; i++) {
        dataPages.push(
            {
                params : {
                    page: i.toString()
                }
            }
        )
    }

    return dataPages

    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    
}