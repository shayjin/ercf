const ALBUMS = [
    {
        name: "BILLY JIN",
        engName: "BILLY JIN",
        artist: "Shay Jin & Billy Boi",
        date: "2024.04.09",
        type: "Mixtape",
        cover: "Billy Boi",
        mm: "Shay Jin x Juts5Bell",
        songs: [
            {name: "3 DAY CUP", producer: ["Shay Jin"]},
            {name: "B THAGGER", producer: ["Shay Jin"]},
            {name: "G.M.F.", producer: ["Shay Jin"], feature: ["Don back", "160 linn", "LOGOS"]},
            {name: "DON BACK FUCKS II", producer: ["Shay Jin"], feature: ["Depretown", "Don back", "160 linn", "LOGOS"]},
            {name: "SS ELEMENTARY SCHOOL", producer: ["Shay Jin"], feature: ["unujangay", "MST"]},
            {name: "GYUNGJOO GUKBAP", producer: ["Shay Jin"], feature: ["서주현", "160 linn"]},
            {name: "PHILLY DRIFT", producer: ["Shay Jin"], feature: ["김진성", "Mogi"]},
            {name: "LEE WONMOON DAEGARI", producer: ["Shay Jin"]},
            {name: "#BRINGSAGIKUNBACK", producer: ["Shay Jin"]},
        ]
    },
    {
        name: "twenty plus",
        engName: "twenty plus",
        artist: "MST",
        date: "2023.12.12",
        type: "정규앨범 1집",
        cover: "MST",
        mm: "FluorMeme",
        songs: [
            {name: "폐달을 밟아", producer: ["Pink is Cold"]},
            {name: "스물의 끝", producer: ["우야"], feature: ["이모린"]},
            {name: "사범님 집에 놀러가도 됩니까", producer: ["COLDEST"]},
            {name: "학교 앞 아이들", producer: ["Kismet"]},
            {name: "그거 그렇게 하는거 아닌데", producer: ["COLDEST"]},
            {name: "단풍잎 마을 도적", producer: ["우야"]},
            {name: "반복", producer: ["슬로스"]},
            {name: "희망을 따라", producer: ["Pink is Cold"], feature: ["혜원"]},
        ]
    },
    {
        name: "쓰레기매립장",
        engName: "Trash MaRipG",
        artist: "Billy Boi",
        date: "2023.11.01-2023.12.01",
        type: "Mixtape",
        cover: "Billy Boi",
        mm: "Juts5Bell",
        songs: [
            {name: "기분더러운날", feature: ["Don back", "Hareubang"], producer: ["FluorMeme"]},
            {name: "Fuckallnighterup", producer: ["FluorMeme"], feature: ["Don back"]},
            {name: "InTheAir", producer: ["FluorMeme"], feature: ["Don back"]},
            {name: "Trash MaeRipG", producer: ["FluorMeme"], feature: ["Don back", "Verde"]},
            {name: "Rigel", producer: ["FluorMeme"], feature: ["Hareubang", "Verde", "전이현"]},
            {name: "GunGangDrill", producer: ["FluorMeme"], feature: ["Don back"]},
            {name: "상심", producer: ["FluorMeme"], feature: ["Hareubang", "Don back"]},
            {name: "Don back Fucks", producer: ["FluorMeme"], feature: ["서주현", "Don back", "LOGOS"]},
            {name: "녹색지폐", producer: ["FluorMeme"], feature: ["Don back"]},
            {name: "Citypop", producer: ["FluorMeme"], feature: ["서주현", "160 linn"]},
        ]
    },
    {
        name: "Billy Boi State University",
        engName: "Billy Boi State University",
        artist: "Billy Boi",
        date: "2023.10.01",
        type: "Mixtape",
        cover: "Billy Boi",
        mm: "Shay Jin",
        songs: [
            {name: "#정원식2", producer: ["Shay Jin"]},
            {name: "JaenaN", producer: ["Shay Jin"], feature: ["Shay Jin"]},
            {name: "LeeHain 2001", producer: ["FluorMeme"]},
            {name: "시발자동차", producer: ["Shay Jin"], feature: ["Hareubang", "김영석"]},
            {name: "Interview Interruption (Skit)", producer: ["Juts5Bell"], feature: ["sagikun"]},
            {name: "All No Matter", producer: ["FluorMeme"], feature: ["Verde", "160 linn"]},
        ]
    },
    {
        name: "M&M",
        engName: "m&m",
        artist: "MST",
        date: "2023.08.14",
        type: "Mixtape",
        cover: "KE$h B",
        mm: "Shay Jin",
        songs: [
            {name: "시발자동차 2", producer: ["Shay Jin"], feature: ["Nike Sangwoo"]},
            {name: "나르샤", producer: ["Shay Jin"]},
            {name: "몽환의 숲", producer: ["Shay Jin"]},
            {name: "M&M Freestyle", producer: ["Shay Jin"], feature: ["Billy Boi"]}
        ]
    },
    {
        name: "Mogi Killer",
        engName: "Mogi Killer",
        artist: "sagikun",
        date: "2023.04.30",
        type: "Mixtape",
        cover: "KE$h B",
        mm: "Shay Jin",
        songs: [
            {name: "intro", producer: ["Shay Jin"]},
            {name: "sagi", producer: ["sagikun"]},
            {name: "gang", producer: ["sagikun"], feature: ["BIG Naugty"]},
            {name: "mogi killer", producer: ["sagikun"], feature: ["Mogi"]},
            {name: "chicken hitter", producer: ["sagikun"]},
            {name: "choding sagi", producer: ["sagikun"], feature: ["unujangay"]},
            {name: "michin sagi", producer: ["sagikun"], feature: ["Shay Jin"]},
            {name: "koreano ssa ssa", producer: ["sagikun"]},
            {name: "soldier mogi", producer: ["sagikun"]}
        ]
    },
    {
        name: "내일이면돼",
        engName: "tomorrow is fine",
        artist: "MST",
        date: "2023.02.17",
        type: "싱글",
        cover: "MST",
        mm: "FluorMeme",
        songs: [
            {
                name: "내일이면돼",
                producer: ["WhiteLIT Beatz"]
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
        mm: "Shay Jin",
        songs: [
            { name: "딸기 (Intro)", producer: ["Juts5Bell"] },
            { name: "Trap!", producer: ["Shay Jin"], feature: ["Big anDre's Bo$$"] },
            { name: "BGHFFF Danger!", producer: ["Shay Jin"] },
            { name: "금오헬창", producer: ["Shay Jin"]},
            { name: "Hook Tuck!", producer: ["Shay Jin"], feature: ["신선우"] },
            { name: "Money Dance!", producer: ["Shay Jin"], feature: ["KE$h B"] },
            { name: "도건인생백도", producer: ["Shay Jin"], feature: ["MST", "sagikun"] },
            { name: "A Long Sale", producer: ["Shay Jin"], feature: ["이예슬", "Mogi"] }
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
        name: "초승달",
        engName: "cresent",
        artist: "MST",
        date: "2022.04.08",
        type: "싱글",
        cover: "MST",
        mm: "FluorMeme",
        songs: [
            {
                name: "Cresent",
                producer: ["COLDEST"]
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
                producer: ["COLDEST"]
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
                producer: ["COLDEST"]
            }
        ]
    },
    {
        name: "진서",
        engName: "JinSeo",
        artist: "Shay Jin & MST",
        date: "2021.08.16",
        type: "Mixtape",
        cover: "Shay Jin",
        mm: "Shay Jin",
        songs: [
            { name: "Bustdown!", producer: ["Shay Jin"] },
            { name: "Gibunjo Silver Wind", producer: ["Shay Jin"], feature: ["Dok3"] },
            { name: "두진서 Freestyle", producer: ["Shay Jin"] },
            { name: "ruf", producer: ["Shay Jin"], feature: ["UnteIl"] },
            { name: "노인공격", producer: ["Shay Jin"], feature: ["Big anDre's Bo$$", "shinji", "Davy Jones"] },
            { name: "bbbp", producer: ["Shay Jin"], feature: ["Billy Boi"] },
            { name: "Dick Sauce!", producer: ["Shay Jin"], feature: ["sagikun"] },
            { name: "신지혜 만날래!", producer: ["Shay Jin"], feature: ["김진성", "Fi$h"] }
        ]
    },
    {
        name: "sagikun",
        engName: "sagikun",
        artist: "sagikun",
        date: "2021.07.30",
        type: "Mixtape",
        cover: "Shay Jin",
        mm: "Shay Jin",
        songs: [
            { name: "No Cap", producer: ["sagikun"], feature: ["이수민"]},
            { name: "Don't Cross the Line", producer: ["sagikun"], feature: ["BJH Brother"] },
            { name: "Mogi Killer...", producer: ["sagikun"] },
            { name: "비둘기 Killer...", producer: ["sagikun"] },
            { name: "이원문ㅗ", producer: ["sagikun"], feature: ["BIG Naugty"] },
            { name: "잼민쓰", producer: ["sagikun"], feature: ["곽시후"] },
            { name: "내 친구 모기", producer: ["sagikun"] },
            { name: "도림사 & 까마귀", producer: ["sagikun"] },
            { name: "모기에게... pt. 2 (Skit)", producer: ["Shay Jin"] },
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
        mm: "Shay Jin",
        songs: [
            { name: "Intro", producer: ["Shay Jin"], feature: ["SCJ Boi"] },
            { name: "100원 자르는 사나이", producer: ["Shay Jin"], feature: ["MST"] },
            { name: "의리없는 새기들", producer: ["Shay Jin"] },
            { name: "Lim Jaesick, the Truck Racer", producer: ["Shay Jin"] },
            { name: "Lee Yeseul, the Happy Church Minister Clone", producer: ["Shay Jin"], feature: ["UnteIl", "Big anDre's Bo$$"] },
            { name: "모기에게... (Skit)", producer: ["Shay Jin"], feature: ["sagikun"] },
            { name: "기본기 Ruler G", producer: ["Shay Jin"], feature: ["sagikun"] },
            { name: "이원문 시발새끼", producer: ["Shay Jin"], feature: ["BIG Naugty", "Profe Morri$"] },
            { name: "대가대 셀카 1위", producer: ["Shay Jin"], feature: ["Mogi", "Fi$h"] },
            { name: "벙어리 새기", producer: ["Shay Jin"], feature: ["Mogi"] },
            { name: "Unknown E.R. Gamer", producer: ["Shay Jin"], feature: ["shinji", "Fi$h"] },
            { name: "김재환 타법 (Skit)", producer: ["Shay Jin"] },
            { name: "BGH Father Remix", producer: ["Shay Jin"], feature: ["Fi$h", "MST", "Lil Arj", "sagikun"] },
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
        mm: "Shay Jin",
        songs: [
            { name: "SAVE", producer: ["Shay Jin"] },
            { name: "우상의우상의", producer: ["Shay Jin"] },
            { name: "유튜브 전사들", producer: ["Shay Jin"] },
            { name: "POM Skit (Skit)", producer: ["Shay Jin"], feature: ["BIG Naugty"] },
            { name: "Hello, My Name is...", producer: ["Shay Jin"], feature: ["Money McDermott"] },
            { name: "15분", producer: ["Shay Jin"], feature: ["Fi$h", "shinji"] },
            { name: "ERCF Freestyle", producer: ["Shay Jin"], feature: ["Mogi", "sagikun"] },
            { name: "Thank You!", producer: ["Shay Jin"], feature: ["Mogi"] }
        ]
    },
    {
        name: "GANG",
        engName: "GANG",
        artist: "Shay Jin & Billy Boi",
        date: "2020.05.06",
        type: "Mixtape",
        cover: "Billy Boi",
        mm: "Shay Jin",
        songs: [
            { name: "디디오엔지", producer: ["Shay Jin"] },
            { name: "BGH Father", producer: ["Shay Jin"], feature: ["Fi$h"] },
            { name: "Sip", producer: ["FluorMeme"], feature: ["Big anDre's Bo$$"] },
            { name: "20.5학번 Freestyle", producer: ["Shay Jin"] },
            { name: "rod", producer: ["Shay Jin"], feature: ["Mogi"] },
            { name: "돼지흥분제", producer: ["Shay Jin"] },
            { name: "Shark Veya", producer: ["Shay Jin"] }
        ]
    },
    {
        name: "JUCK",
        engName: "JUCK",
        artist: "Shay Jin",
        date: "2019.12.13",
        type: "Mixtape",
        cover: "Billy Boi",
        mm: "Shay Jin",
        songs: [
            { name: "Abyss", producer: ["Shay Jin"], feature: ["Profe Morris", "Fi$h"] },
            { name: "Gonggomoon", producer: ["Shay Jin"], feature: ["shinji"] },
            { name: "Hiphop Warriors", producer: ["Shay Jin"], feature: ["Profe Morri$", "ViggyMcPiggy"] },
            { name: "Minecraft Freestyle", producer: ["Shay Jin"], feature: ["Lil Sillyman", "Money McDermott"] },
            { name: "Juck Fose!", producer: ["Shay Jin"], feature: ["Mijo", "Fi$h"] },
            { name: "Mumble Rap!", producer: ["Shay Jin"], feature: ["Fi$h", "Profe Morri$"] },
            { name: "181230", producer: ["Shay Jin"], feature: ["Lasaga Boi", "Mark Kim", "Big anDre's Bo$$"] },
            { name: "Trying to...", producer: ["Shay Jin"], feature: ["Fi$h"] },
            { name: "#530", producer: ["Shay Jin"], feature: ["Lasaga Boi", "Big anDre's Bo$$"] },
            { name: "Juck Fose 2", producer: ["Shay Jin"], feature: ["Mijo", "Fi$h"] },
            { name: "Juck Fose 3", producer: ["Shay Jin"], feature: ["Mijo", "Fi$h", "Profe Morri$", "Money McDermott"] },
            { name: "gasssss", producer: ["Shay Jin"], feature: ["ViggyMcPiggy", "Lasaga Boi"] },
        ]
    },
];

export default ALBUMS;