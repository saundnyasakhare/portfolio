import Data from "@data/sections/subscribe.json";
import appData from "@data/app.json";

const SubscribeSection = () => {
  return (
    <>
        {/* call to action */}
        <section id="about" className="saundyap-90-90">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="saundyacenter">
                        <h2 className="saundyaup saundyamb-60">{Data.title}</h2>
                        <div className="saundyaup">
                            <form action={appData.settings.mailchimp.url} method="post" target="_blank" className="saundyasubscribe-form">
                                <input type="email" placeholder="Your Email" name="EMAIL" required />
                                <input type="hidden" name={appData.settings.mailchimp.key} />
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* call to action end */}
    </>
  );
};

export default SubscribeSection;