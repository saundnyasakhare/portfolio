const rightPanelModule = ( { background, img } ) => {
    return (
        <>
        <div className="saundyaright-banner" id="scene">
            {/* scrollbar */}
            <div className="saundyaprogress-track">
                <div className="saundyaprogress" />
            </div>
            {/* scrollbar end */}
            <div className="saundyabanner-wrapper" data-depth="1">
                <div id="swupBg" className="saundyabanner-frame">
                    <img src={background} alt="background" className={img ? "saundyabanner-bg saundyablur" : "saundyabanner-bg"} />
                </div>
            </div>
            <div className="saundyabanner-wrapper" data-depth="0.2">
                {img != undefined &&
                <div id="swupPerson" className="saundyabanner-frame">
                    <img src={img} alt="person" className="saundyabanner-person" />
                </div>
                }
            </div>
            <div className="saundyaflying-skills" data-depth="0.1">
                {img != undefined &&
                <div id="swupSkills" className="saundyaskills-frame">
                    {/* <div className="saundyaitem" style={{"top": "30%", "left": "10%"}}>
                        <img src="/img/logos/1.jpg" alt="logo" />
                    </div>
                    <div className="saundyaitem" style={{"bottom": "15%", "left": "20%"}}>
                        <img src="/img/logos/2.jpg" alt="logo" />
                    </div>
                    <div className="saundyaitem" style={{"bottom": "45%", "right": "15%"}}>
                        <img src="/img/logos/3.jpg" alt="logo" />
                    </div> */}

                    {/* <div className="saundyael saundyaaddition-el-1">+</div>
                    <div className="saundyael saundyaaddition-el-2">+</div> */}
                    {/* <div className="saundyael saundyaaddition-el-3" />
                    <div className="saundyael saundyaaddition-el-4" /> */}
                </div>
                }
            </div>
        </div>
        </>
    );
};
export default rightPanelModule;