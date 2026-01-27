const CursorModule = () => {
    return (
        <>
        {/* preloader */}
        <div className="saundyapreloader-frame">
            <div className="saundyapreloader-content" style={{"transform": "scale(.6) translateY(200px)", "opacity": "0"}}>
                <div className="saundyapreloader">
                    <div className="saundyacirc-1"></div>
                    <div className="saundyacirc-2"></div>
                    <div className="saundyacirc-3"></div>
                    <div className="saundyacirc-4"></div>
                </div>
                <div className="saundyaupper">Loading</div>
            </div>
        </div>
        {/* preloader end */}
        </>
    );
};
export default CursorModule;