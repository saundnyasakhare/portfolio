import Link from "next/link";
import { useState } from "react";
import appData from "@data/app.json";
import { useRouter } from 'next/router';

const DefaultHeader = ({ extraClass }) => {
  const [toggle, setToggle] = useState(false);

  const navItems = [];

  const { asPath } = useRouter();

  appData.header.menu.forEach((item, index) => {
    let s_class1 = '';

    if ( item.children != 0 ) {
      s_class1 = 'saundyahas-children';
    }
    if ( ( asPath.indexOf( item.link ) != -1 && item.link != '/' ) || asPath == item.link ) {
      s_class1 += ' saundyaactive';
    }
    let newobj = Object.assign({}, item, { "classes" :  s_class1 });
    navItems.push(newobj);
  });

  return (
    <>
    
    {/* top bar */}
    <div className="saundyatop-panel">

        {/* Logo */}
        <Link href={appData.header.logo.link} className="saundyalogo">
          <img src="/saundnyasakhare.png" alt="Saundnya Sakhare" style={{ height: '40px' }} />
        </Link>

        <div className={`saundyanavigation ${toggle ? "saundyaactive" : ""}`}>
            <nav id="swupMenu" className="saundyamenu-transition">
                <ul>
                    {navItems.map((item, key) => (
                    <li className={item.classes} key={`header-menu-item-${key}`}>
                        <Link href={item.link}>{item.label}</Link>
                        {item.children != 0 &&
                        <ul>
                            {item.children.map((subitem, key2) => (
                            <li key={`header-submenu${key}-item-${key2}`}><Link href={subitem.link}>{subitem.label}</Link></li>
                            ))}
                        </ul>
                        }
                    </li>
                    ))}
                </ul>
            </nav>
        </div>

        <div className="saundyatop-panel-btns">
            <Link href={appData.header.button.link} className="saundyacontact-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
            </Link>

            <div 
              className={`saundyamenu-btn ${toggle ? "saundyaactive" : ""}`}
              onClick={() => setToggle(!toggle)}
            >
                <span />
            </div>
        </div>

    </div>
    {/* top bar end */}

    </>
  );
};
export default DefaultHeader;
