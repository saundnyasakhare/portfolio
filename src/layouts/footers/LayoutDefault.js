import Link from "next/link";
import appData from "@data/app.json";

const DefaultFooter = ( { extraClass } ) => {
  return (
    <>
    {/* footer */}
    <footer className="saundyafw">
      <p className="saundyalight-soft">{appData.footer.copy}</p>
      <p className="saundyalight-soft" dangerouslySetInnerHTML={{__html : appData.footer.dev}} />
    </footer>
    {/* footer end */}
    </>
  );
};
export default DefaultFooter;
