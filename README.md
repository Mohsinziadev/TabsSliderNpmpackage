## Getting started

### Demo

https://react-scrollable-tabs.vercel.app/

### Compatibility

Your project needs to use React 16.8 or later. react-smooth-tabs uses modern web technologies. That's why it's so fast, lightweight and easy to style. This, however, comes at a cost of [supporting only modern browsers](https://caniuse.com/#feat=internationalization).

## Features

- Slide with Transitions
- Fullscreen support
- Responsive design
- Customizable tab icons and colors
- Horizontal/Vertical tab positioning
- Customizable active tab highlight color and background color


### Explanation of Props:
- tabs: The array of objects representing the tabs. Each object must have a value, label, and icon property.
- activeTab: The currently active tab’s value (e.g., "activeOrders").
- setActiveTab: A function that updates the active tab.
- activeColor: The color for the active tab (e.g., "#008080").
- lineColor: The color of the underline indicating the active tab.
- position: Set the tab positioning to either Horizontal or Vertical.
- displayArrows: A boolean that controls the visibility of the navigation arrows.
- leftArrow and rightArrow: The custom icons/images for the left and right navigation arrows.
- className: Additional class names for styling the component (optional).


### Installation

Add react-Smooth-tabs to your project by executing `npm install react-smooth-tabs` or `yarn add react-smooth-tabs`.


### Usage

```jsx
import { ScrollableTabs } from "react-smooth-tabs";
import "react-smooth-tabs/dist/index.css";
```

```jsx
import { leftArowIcon, rightArrowIcon } from "@images";

function App() {
  let [activeTab, setActiveTab] = useState("activeOrders");

  const tabsWithoutQTY = [
    {
      value: "IntractiveReports",
      label: "Intractive Reports ",
      icon: <img src={ReportIcon} className="h-[1.5rem] w-[1.5rem]" />,
    },
    {
      value: "PlayGround",
      label: "PlayGround",
      icon: <img src={playgroundIcon} className="h-[1.5rem] w-[1.5rem]" />,
    },
    {
      value: "FileChanges",
      label: "File Changes",
      icon: <img src={fileChangeIcon} className="h-[1.5rem] w-[1.5rem]" />,
    },
    {
      value: "Segementation",
      label: "Segementation",
      icon: <img src={segmentIcon} className="h-[1.5rem] w-[1.5rem]" />,
    },
    {
      value: "Docunmentation",
      label: "Docunmentation",
      icon: <img src={documentIcon} className="h-[1.5rem] w-[1.5rem]" />,
    },
    {
      value: "CustomerStories",
      label: "Customer Stories",
      icon: <img src={storiesicon} className="h-[1.5rem] w-[1.5rem]" />,
    },
    {
      value: "GroupAnaytics",
      label: "Group Anaytics",
      icon: <img src={revinueIcon} className="h-[1.5rem] w-[1.5rem]" />,
    },
    {
      value: "Conversion",
      label: "Conversion",
      icon: <img src={conversionIcon} className="h-[1.5rem] w-[1.5rem]" />,
    },
    {
      value: "Portals",
      label: "Portals",
      icon: <img src={portalIcon} className="h-[1.5rem] w-[1.5rem]" />,
    },
  ];
  return (
    <ScrollableTabs
      tabs={tabsWithoutQTY}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      activeColor="#008080"
      lineColor="#008080"
      position="Horizontal"
      displayArrows={true}
      leftArrow={leftArowIcon}
      rightArrow={rightArrowIcon}
      className="flex flex-col gap-2  items-center justify-center"
    />
  );
}
export default App;


```


