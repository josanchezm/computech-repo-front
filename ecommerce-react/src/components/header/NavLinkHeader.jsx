export default ({text}) => {
    return (
        <a href="#" className="relative py-8 group">
            <span className="group-hover:text-red-500">{text}</span>
            <span className="absolute bottom-0 block scale-x-0 w-full h-1 md:group-hover:bg-gray-500 mt-6 group-hover:scale-x-100 transition-all duration-500"></span>
        </a>
    )
}