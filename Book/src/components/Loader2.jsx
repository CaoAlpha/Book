export const Loader2 = () => {
    const loading = true;
    return(
        <div className="min-h-screen w-full flex justify-center items-center z-40">
            <img src="https://cdn.dribbble.com/users/4179244/screenshots/7430038/media/34d6717bbdde1e753889d3625fb16e29.gif" alt="Loading" loading={loading} className=""/>
        </div>
    )
}