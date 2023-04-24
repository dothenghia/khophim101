## Chức năng Chính :
- Render những thẻ phim từ API (MovieList Page)
- Tải trang MoviePage khi click vào (Router , MoviePage Page)
- 

## Chức năng Phụ :
- Header Nav bar :
    + Rerender MovieList theo yêu cầu
    + Search
    + 
- Slider
- Aside Bar :
    + Hiện phim mới nhất/xem nhìu nhất
- Footer

## Style Color
### Dark mode
    #0f172a -> 1 gray-900
    #161f34 -> 2
    #1e293b -> 3 slate-800
    #333d4d -> 4 slate-600 border trầm
    #e5e7eb -> 5 gray-200 border sáng

    - Heading Text : #e2e8f0 => slate-200
    - Subheading Text : #778394 ~~> slate-400
    - Primary : sky-500 == rgb(14 165 233)
    - 

## Log :
- 19/4 :
    + Review
    + Setup project (Using Bootstrap)

- 20/4 :
    + Get API and Render Movie list
    + Review NextJS (Change to use NextJS)
    + Setup new project (Using TailwindCSS)

- 21/4 :
    + Create Layout component
    + Split MovieCard into a component
    + Create page [slug].jsx
    + Render Movie info base on slug
    + Gắn Link vào MovieCard
    + Comment

- 22/4 :
    + Polishing :
        * Home Page
        * MovieCard component
        = Hover UX
        * Movie Information ([slug])
        
- 23/4 :
    + Create Header component
    + Play movie
    + Deploy

- 24/4 :
    + Polishing
        * Đổi màu

    + Đổi tập phim
    + Đổi trang phim
    + Thêm server
    + Split UI into several components
    + Thêm chức năng Phim Bộ Phim Lẻ ...

    
    + Search
    + Dark mode



episodes = [
    {
        server_name : "Vietsub # 1",
        server_data : [
            {
                link : "....",
                name : "1"

            },
            {},
            ...
        ]
    },
    {},
    {},
    ...
]