const Card = ({data}) => {
    return (
        <div className="cursor-pointer w-56 h-68">
            <figure className="relative mb-2 w-full h-4/5" >
                <span className="absolute bottom-0 left-0 bg-black rounded-lg text-white text-xs m-2 px-3 py-0.5">
                {data.categories[0]}</span>
                <img className="w-full h-full object-cover rounded-lg border-solid border-2 border-black" src={`src/assets/data/img/${data.id}.png`} />
                <div className="absolute top-0 right-0 flex justify-center items-center bg-black text-white w-6 h-6 rounded-full m-2 p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                </div>
            </figure>
            <p className="flex flex-col">
                <span className="font-bold text-sm">{data.name}</span>
                <span className="text-sm">{data.text}</span>
            </p>
        </div>
    )
}

export default Card