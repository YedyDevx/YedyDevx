const Shadow = () => {
    return (
        <div className="w-full xl:h-[1100px]S  pt-10 overflow-hidden relative">
            <div className="flex justify-center items-center text-2xl mt-24 relative z-10">
                <div className="w-[1100px] h-[1100px] border-[1px] border-zinc-950 rounded-full flex justify-center items-center">
                    <div className="w-[800px] h-[800px] border-[1px] border-zinc-950 rounded-full flex justify-center items-center">
                        <div className="w-[500px] h-[500px] border-[1px] border-zinc-950 rounded-full flex justify-center items-center">
                            <div className="animate-shadow-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shadow;
