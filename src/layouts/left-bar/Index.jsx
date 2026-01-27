import appData from "@data/app.json";

const leftPanelModule = () => {
    return (
        <>
        {/* left bar */}
        <div className="saundyaleft-panel">

            <div className="saundyapage-name saundyaupper saundyadark">Homepage</div>

            <ul className="saundyasocial-icons">
                {appData.social.map((item, key) => (
                <li key={`lp-social-item-${key}`}><a href={item.link} target="_blank" className="social-icon"><i className={item.icon} /></a></li>
                ))}
            </ul>

        </div>
        {/* left bar end */}
        </>
    );
};
export default leftPanelModule;