import React, { useState } from 'react';
import collapseIcon from '../../assets/img/navbar-collapsed-icon (3).png';
import expandIcon from '../../assets/img/navbar-expand-icon.png';
import navbarResources from '../../resources/navbarResources';
import MobileNavbarHeader from './MobileNavbarHeader';
import MobileNavbarItem from './MobileNavbarItem';
import MobileSocialNavbar from './MobileSocialNavbar';
import MobileNavbarChilds from './MobileNavbarChilds';

export default function MobileNavbar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [childItems, setChildItems] = useState([]);
  const [disableMenu, setDisableMenu] = useState(false);
  const [slideEndTransition, setSlideEndTransition] = useState(false);

  const handleToggle = (data) => {
    setTimeout(() => setIsExpanded(!isExpanded), 50);
    setDisableMenu(!disableMenu);
    setChildItems(data)
  };

  const handleChildItemsChange = (newChildItems) => {
    setChildItems(newChildItems);
    setSlideEndTransition(false);
  };

  const navbarClass = isExpanded ? 'navbar navbar-expand-lg c-mobile-navbar-expand py-0' : 'navbar navbar-expand-lg c-mobile-navbar';
  const fadeClass = disableMenu ? 'fade-out' : '';

  return (
    <nav className={`${navbarClass} ${fadeClass}`}>
      <MobileNavbarHeader
        navContainerClassName={isExpanded ? 'bg-light-blue' : ''}
        toggleIcon={isExpanded ? expandIcon : collapseIcon}
        onToggle={handleToggle}
        childsSetter={handleToggle}
      />
      {!isExpanded && (
        childItems.length > 0 ? (
          <MobileNavbarChilds childs={childItems} onBackClick={handleChildItemsChange} />
        ) : (
          <div className={`c-mobile-submenu z-1 w-100 pt-2 ps-4 ms-1 mt-5 ${!slideEndTransition ? 'c-slide-start' : 'c-slide-end'}`}>
            {navbarResources.map(item => (
              <MobileNavbarItem
                key={item.id}
                className={item.className}
                onClick={() => {
                  setSlideEndTransition(true);
                  setTimeout(() => setChildItems(item.childs), 100)
                }}
                linkClassName={item.linkClassName}
                name={item.name}
                imgClassName={item.imgClassName}
                icon={item.icon}
              />
            ))}
            <MobileSocialNavbar />
          </div>
        )
      )
      }
    </nav >
  );
}