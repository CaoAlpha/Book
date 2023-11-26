import { ClipLoader } from "react-spinners";
export const Loader = () => {
    const loading = true;
    return(
        <div className="min-h-screen w-full flex justify-center items-center z-40">
            <ClipLoader color={'#353C43'} loading={loading} size={20} className=""/>
        </div>
    )
}