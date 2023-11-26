export const NoFound = () => {
    return(
        <div className="flex flex-col justify-center items-center w-[200px] h-[120px]">
            <img src="src\assets\img\cover-not-found\book-not-found.jpg" alt="Not Found" className="object-cover"/>
            <h2 className="text-center">No search result found</h2>
        </div>
    )
}