import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="bg-slate-500 p-5 flex">
            <button className="btn btn-error">Breaking News</button>
                <Marquee pauseOnHover={true}>
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
        </div>
    );
};

export default BreakingNews;