

function Background() {
    return (
        <>
            <div className="bg-[#1C1E23] absolute -z-10 w-full h-full"/>
            <div className="bg-[url('./images/backgroundImages/blueBackground1.png')] bg-cover absolute max-w-full h-full bg-repeat rotate-90 -z-10 opacity-10" />
            <div className="bg-[url('./images/backgroundImages/noise.webp')] bg-repeat bg-contain absolute w-full h-full opacity-60 -z-10" />
        </>
    );
}

export default Background;