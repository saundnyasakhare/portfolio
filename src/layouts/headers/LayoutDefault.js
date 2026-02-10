import Link from "next/link";
import { useState } from "react";
import appData from "@data/app.json";
import { useRouter } from 'next/router';
import basePath from "@common/basePath";

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
          <img src={`${basePath}/saundnyasakhare.png`} alt="Saundnya Sakhare" style={{ height: '40px' }} />
        </Link>

        <div className={`saundyanavigation ${toggle ? "saundyaactive" : ""}`}>
            <nav id="swupMenu" className="saundyamenu-transition">
                <ul>
                    {navItems.map((item, key) => (
                    <li className={item.classes} key={`header-menu-item-${key}`}>
                        {item.link.startsWith('http') ? (
                          <a href={item.link} target="_blank" rel="noopener noreferrer">{item.label}</a>
                        ) : (
                          <Link href={item.link}>{item.label}</Link>
                        )}
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
