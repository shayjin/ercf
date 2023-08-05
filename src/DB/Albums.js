const ALBUMS = [
    {
        name: "시발자동차",
        engName: "sibalcar",
        artist: "Billy Boi & 김도윤 & 김영석",
        date: "2023.08.05",
        type: "싱글",
        cover: "FluorMeme",
        mm: "Juts5Bell",
        songs: [
            {name: "시발자동차", producer: ["마인크래프트고수"]}
        ]
    },
    {
        name: "알바두탕",
        engName: "albadutang",
        artist: "160 linn & LOGOS & 성진현",
        date: "2023.08.05",
        type: "싱글",
        cover: "FluorMeme",
        mm: "link505",
        songs: [
            {name: "알바두탕", producer: ["konu"]}
        ]
    },
    {
        name: "All No Matter",
        engName: "All No Matter",
        artist: "160 linn & Billy Boi & Verde",
        date: "2023.06.26",
        type: "싱글",
        cover: "Verde",
        mm: "Juts5Bell",
        songs: [
            {name: "All No Matter", producer: ["FluorMeme"]}
        ]
    },
    {
        name: "Mogi Killer",
        engName: "Mogi Killer",
        artist: "sagikun",
        date: "2023.04.30",
        type: "Mixtape",
        cover: "KE$h B",
        mm: "마인크래프트고수",
        songs: [
            {name: "intro", producer: ["마인크래프트고수"]},
            {name: "sagi", producer: ["sagikun"]},
            {name: "gang", producer: ["sagikun"], feature: ["BIG Naugty"]},
            {name: "mogi killer", producer: ["sagikun"], feature: ["Mogi"]},
            {name: "chicken hitter", producer: ["sagikun"]},
            {name: "choding sagi", producer: ["sagikun"], feature: ["unujangay"]},
            {name: "michin sagi", producer: ["sagikun"], feature: ["Shay Jin"]},
            {name: "koreano ssa ssa", producer: ["sagikun"]},
            {name: "solider mogi", producer: ["sagikun"]}
        ]
    },
    {
        name: "내일이면돼",
        engName: "tomorrow is fine",
        artist: "MST",
        date: "2023.02.17",
        type: "싱글",
        cover: "FluorMeme",
        mm: "FluorMeme",
        songs: [
            {
                name: "내일이면돼",
                producer: ["FluorMeme"]
            }
        ]
    },
    {
        name: "진동",
        engName: "JinDong",
        artist: "Shay Jin & Billy Boi",
        date: "2023.02.08",
        type: "Mixtape",
        cover: "Billy Boi",
        mm: "마인크래프트고수",
        songs: [
            { name: "딸기 (Skit)", producer: ["Juts5Bell"] },
            { name: "Trap!", producer: ["마인크래프트고수"], feature: ["Big anDre's Bo$$"] },
            { name: "BGH Fackthur Danger!", producer: ["마인크래프트고수"] },
            { name: "금오헬창", producer: ["마인크래프트고수"]},
            { name: "Hook Tuck!", producer: ["마인크래프트고수"], feature: ["신선우"] },
            { name: "Money Dance", producer: ["마인크래프트고수"], feature: ["KE$h B"] },
            { name: "도건인생백도", producer: ["마인크래프트고수"], feature: ["MST", "sagikun"] },
            { name: "A Long Sale", producer: ["마인크래프트고수"], feature: ["이예슬", "Mogi"] }
        ]
    },
    {
        name: "08Basick Remix Remix",
        engName: "08Basick Remix Remix",
        artist: "unujangay",
        date: "2023.02.02",
        type: "싱글",
        cover: "Billy Boi",
        mm: "Juts5Bell",
        songs: [
            {
                name: "08Basick Remix Remix",
                producer: ["TOIL"]
            }
        ]
    },
    {
        name: "Cresent",
        engName: "Cresent",
        artist: "MST",
        date: "2022.04.08",
        type: "싱글",
        cover: "FluorMeme",
        mm: "FluorMeme",
        songs: [
            {
                name: "Cresent",
                producer: ["FluorMeme"]
            }
        ]
    },
    {
        name: "어쩔티비",
        engName: "uztv",
        artist: "MST",
        date: "2022.03.31",
        type: "싱글",
        cover: "FluorMeme",
        mm: "FluorMeme",
        songs: [
            {
                name: "어쩔티비",
                producer: ["FluorMeme"]
            }
        ]
    },
    {
        name: "LaTale",
        engName: "LaTale",
        artist: "MST",
        date: "2022.01.28",
        type: "싱글",
        cover: "FluorMeme",
        mm: "FluorMeme",
        songs: [
            {
                name: "LaTale",
                producer: ["FluorMeme"]
            }
        ]
    },
    {
        name: "진서",
        engName: "JinSeo",
        artist: "Shay Jin & MST",
        date: "2021.08.16",
        type: "Mixtape",
        cover: "마인크래프트고수",
        mm: "마인크래프트고수",
        songs: [
            { name: "Bustdown!", producer: ["마인크래프트고수"] },
            { name: "기분조 은바람", producer: ["마인크래프트고수"], feature: ["Dok3"] },
            { name: "두진서 Freestyle", producer: ["마인크래프트고수"] },
            { name: "ruf", producer: ["마인크래프트고수"], feature: ["UnteIl"] },
            { name: "노인공격", producer: ["마인크래프트고수"], feature: ["Big anDre's Bo$$", "shinji", "Davy Jones"] },
            { name: "bbbp", producer: ["마인크래프트고수"], feature: ["Billy Boi"] },
            { name: "딕소스!", producer: ["마인크래프트고수"], feature: ["sagikun"] },
            { name: "신지혜 만날래!", producer: ["마인크래프트고수"], feature: ["김진성", "Fi$h"] }
        ]
    },
    {
        name: "sagikun",
        engName: "sagikun",
        artist: "sagikun",
        date: "2021.07.30",
        type: "Mixtape",
        cover: "마인크래프트고수",
        mm: "마인크래프트고수",
        songs: [
            { name: "No Cap", producer: ["sagikun"], feature: ["이수민"]},
            { name: "Don't Cross the Line", producer: ["sagikun"], feature: ["BJH Brother"] },
            { name: "Mogi Killer...", producer: ["sagikun"] },
            { name: "비둘기 Killer...", producer: ["sagikun"] },
            { name: "이원문ㅗ", producer: ["sagikun"], feature: ["BIG Naugty"] },
            { name: "잼민쓰", producer: ["sagikun"], feature: ["곽시후"] },
            { name: "내 친구 모기", producer: ["sagikun"] },
            { name: "도림사 & 까마귀", producer: ["sagikun"] },
            { name: "모기에게... pt. 2 (Skit)", producer: ["마인크래프트고수"] },
            { name: "빼재순", producer: ["sagikun"], feature: ["Shay Jin"] }
        ]
    },
    {
        name: "KIK",
        engName: "KIK",
        artist: "Shay Jin & Billy Boi",
        date: "2021.02.26",
        type: "Mixtape",
        cover: "Billy Boi",
        mm: "마인크래프트고수",
        songs: [
            { name: "Intro", producer: ["마인크래프트고수"], feature: ["SCJ Boi"] },
            { name: "100원 자르는 사나이", producer: ["마인크래프트고수"], feature: ["MST"] },
            { name: "의리없는 새기들", producer: ["마인크래프트고수"] },
            { name: "Lim Jaesick, the Truck Racer", producer: ["마인크래프트고수"] },
            { name: "Lee Yeseul, the Happy Church Minister Clone", producer: ["마인크래프트고수"], feature: ["UnteIl", "Big anDre's Bo$$"] },
            { name: "모기에게... (Skit)", producer: ["마인크래프트고수"], feature: ["sagikun"] },
            { name: "기본기 Ruler G", producer: ["마인크래프트고수"], feature: ["sagikun"] },
            { name: "이원문 시발새끼", producer: ["마인크래프트고수"], feature: ["BIG Naugty", "Profe Morri$"] },
            { name: "대가대 셀카 1위", producer: ["마인크래프트고수"], feature: ["Mogi", "Fi$h"] },
            { name: "벙어리 새기", producer: ["마인크래프트고수"], feature: ["Mogi"] },
            { name: "Unknown E.R. Gamer", producer: ["마인크래프트고수"], feature: ["shinji", "Fi$h"] },
            { name: "김재환 타법 (Skit)", producer: ["마인크래프트고수"] },
            { name: "BGH Father Remix", producer: ["마인크래프트고수"], feature: ["Fi$h", "MST", "Lil Arj", "sagikun"] },
            { name: "Outro", producer: ["FluorMeme"] }
        ]
    },
    {
        name: "POM",
        engName: "POM",
        artist: "Shay Jin & Billy Boi",
        date: "2020.06.17",
        type: "Mixtape",
        cover: "Billy Boi",
        mm: "마인크래프트고수",
        songs: [
            { name: "SAVE", producer: ["마인크래프트고수"] },
            { name: "우상의우상의", producer: ["마인크래프트고수"] },
            { name: "유튜브 전사들", producer: ["마인크래프트고수"] },
            { name: "POM Skit (Skit)", producer: ["마인크래프트고수"], feature: ["BIG Naugty"] },
            { name: "Hello, My Name is...", producer: ["마인크래프트고수"], feature: ["Money McDermott"] },
            { name: "15분", producer: ["마인크래프트고수"], feature: ["Fi$h", "shinji"] },
            { name: "ERCF Freestyle", producer: ["마인크래프트고수"], feature: ["Mogi", "sagikun"] },
            { name: "Thank You!", producer: ["마인크래프트고수"], feature: ["Mogi"] }
        ]
    },
    {
        name: "GANG",
        engName: "GANG",
        artist: "Shay Jin & Billy Boi",
        date: "2020.05.06",
        type: "Mixtape",
        cover: "Billy Boi",
        mm: "마인크래프트고수",
        songs: [
            { name: "디디오엔지", producer: ["마인크래프트고수"] },
            { name: "BGH Father", producer: ["마인크래프트고수"], feature: ["Fi$h"] },
            { name: "Sip", producer: ["FluorMeme"], feature: ["Big anDre's Bo$$"] },
            { name: "20.5학번 Freestyle", producer: ["마인크래프트고수"] },
            { name: "rod", producer: ["마인크래프트고수"], feature: ["Mogi"] },
            { name: "돼지흥분제", producer: ["마인크래프트고수"] },
            { name: "삭베아", producer: ["마인크래프트고수"] }
        ]
    },
    {
        name: "JUCK",
        engName: "JUCK",
        artist: "Shay Jin",
        date: "2019.12.13",
        type: "Mixtape",
        cover: "Billy Boi",
        mm: "마인크래프트고수",
        songs: [
            { name: "Abyss", producer: ["마인크래프트고수"], feature: ["Profe Morris", "Fi$h"] },
            { name: "공고문", producer: ["마인크래프트고수"], feature: ["shinji"] },
            { name: "힙합 전사들", producer: ["마인크래프트고수"], feature: ["Profe Morri$", "ViggyMcPiggy"] },
            { name: "마인크래프트 Freestyle", producer: ["마인크래프트고수"], feature: ["Lil Sillyman", "Money McDermott"] },
            { name: "Juck Fose!", producer: ["마인크래프트고수"], feature: ["Mijo", "Fi$h"] },
            { name: "멈블랩", producer: ["마인크래프트고수"], feature: ["Fi$h", "Profe Morri$"] },
            { name: "181230", producer: ["마인크래프트고수"], feature: ["Lasaga Boi", "Mark Kim", "Big anDre's Bo$$"] },
            { name: "Trying to...", producer: ["마인크래프트고수"], feature: ["Fi$h"] },
            { name: "#530", producer: ["마인크래프트고수"], feature: ["Lasaga Boi", "Big anDre's Bo$$"] },
            { name: "Juck Fose 2", producer: ["마인크래프트고수"], feature: ["Mijo", "Fi$h"] },
            { name: "Juck Fose 3", producer: ["마인크래프트고수"], feature: ["Mijo", "Fi$h", "Profe Morri$", "Money McDermott"] },
            { name: "gasssss", producer: ["마인크래프트고수"], feature: ["ViggyMcPiggy", "Lasaga Boi"] },
        ]
    },
];

export default ALBUMS;