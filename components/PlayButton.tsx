import { FaPlay } from 'react-icons/fa'

const PlayButton = () => {
	return (
		<button
			className="transition opacity-0 rounded-full flex items-center justify-center 
        bg-green-500 py-4 pr-4 pl-5 drop-shadow-md translatet ranslate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110"
		>
			<FaPlay className="text-black" />
		</button>
	)
}

export default PlayButton
