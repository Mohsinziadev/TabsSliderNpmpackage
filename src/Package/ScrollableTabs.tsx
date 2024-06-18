import React, { useRef } from "react";

const ScrollableTabs = ({
  tabs,
  activeTab,
  setActiveTab,
  leftArrow,
  rightArrow,
}: any) => {
  const tabsRef: any = useRef(null);

  const handleTabClick = (tab: any) => {
    const tabElement = tabsRef.current.querySelector(
      `[data-tab="${tab.value}"]`
    );
    tabElement.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
    setActiveTab(tab.value);
  };

  const handleNextTab = () => {
    const currentIndex = tabs.findIndex((tab: any) => tab.value === activeTab);
    const nextTab = tabs[currentIndex + 1];

    if (nextTab) {
      const tabElement = tabsRef.current.querySelector(
        `[data-tab="${nextTab.value}"]`
      );
      tabElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
      setActiveTab(nextTab.value);
    }
  };

  const handlePrevTab = () => {
    const currentIndex = tabs.findIndex((tab: any) => tab.value === activeTab);
    const prevTab = tabs[currentIndex - 1];

    if (prevTab) {
      const tabElement = tabsRef.current.querySelector(
        `[data-tab="${prevTab.value}"]`
      );
      tabElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
      setActiveTab(prevTab.value);
    }
  };

  return (
    <div className="tabs-container">
      <div className="cursor-pointer" onClick={handlePrevTab}>
        <img
          src={leftArrow}
          className="h-6 w-4 mr-3 object-contain"
          alt="Left Arrow"
        />
      </div>
      <ul className="tabs" ref={tabsRef}>
        {tabs.map((tab: any) => (
          <li
            key={tab.value}
            className={`tab ${activeTab === tab.value ? "active" : ""}`}
            onClick={() => handleTabClick(tab)}
            data-tab={tab.value}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div className="cursor-pointer" onClick={handleNextTab}>
        <img
          src={rightArrow}
          className=" ml-3 h-6 w-4 object-contain"
          alt="Right Arrow"
        />
      </div>
    </div>
  );
};

export { ScrollableTabs };
