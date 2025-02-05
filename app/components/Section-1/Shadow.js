const Shadow = () => {
        return (
                <div className="flex justify-center items-center text-2xl mt-24 relative z-10">
                        <div className="w-[1100px] h-[1100px]  border-[1px] border-zinc-950 rounded-full flex justify-center items-center">
                                <div className="w-[800px] h-[800px] border-[1px] border-zinc-950 rounded-full flex justify-center items-center">
                                        <div className="w-[500px] h-[500px] border-[1px] border-zinc-950 rounded-full flex justify-center items-center">
                                                <div className="w-[120px] h-[120px] border-[1px] border-zinc-950 rounded-full bg-[#582678] animate-shadow-pulse"></div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Shadow;