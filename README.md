## Getting started

### Demo

https://react-scrollable-tabs.vercel.app/

### Compatibility

Your project needs to use React 16.8 or later. react-smooth-tabs uses modern web technologies. That's why it's so fast, lightweight and easy to style. This, however, comes at a cost of [supporting only modern browsers](https://caniuse.com/#feat=internationalization).

## Features

- Slide with Transitions
- Fullscreen support
- Responsive design

### Installation

Add react-Smooth-tabs to your project by executing `npm install react-smooth-tabs` or `yarn add react-smooth-tabs`.

### Usage

```jsx
import { ScrollableTabs } from "react-smooth-tabs";
import "react-smooth-tabs/dist/index.css";
```

```jsx
import { LeftImage, RightImage } from "@images";

function App() {
  let [activeTab, setActiveTab] = useState("activeOrders");

  const tabs = [
    {
      value: "IntractiveReports",
      label: "Intractive Reports ",
      icon: <TbReportSearch className="h-10 w-10" />,
      qty: 14,
    },
    {
      value: "PlayGround",
      label: "PlayGround",
      icon: <CgDisplayGrid className="h-10 w-10" />,
    },
    {
      value: "FileChanges",
      label: "File Changes",
      icon: <FaFileContract className="h-10 w-10" />,
      qty: 10,
    },
    {
      value: "LimitLessSegementation",
      label: "LimitLess Segementation",
      icon: <PiLineSegmentsDuotone className="h-10 w-10" />,
    },
    {
      value: "Docunmentation",
      label: "Docunmentation",
      icon: <IoDocumentAttach className="h-10 w-10" />,
    },
    {
      value: "CustomerStories",
      label: "Customer Stories",
      icon: <MdAutoStories className="h-10 w-10" />,
    },
    {
      value: "GroupAnaytics",
      label: "Group Anaytics",
      icon: <TbBrandGoogleAnalytics className="h-10 w-10" />,
    },
    {
      value: "Conversion",
      label: "Conversion",
      icon: <GiRugbyConversion className="h-10 w-10" />,
    },
    {
      value: "Portals",
      label: "Portals",
      icon: <AiFillCustomerService className="h-10 w-10" />,
    },
  ];

  return (
    <ScrollableTabs
      tabs={tabsList}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      leftArrow={LeftImage}
      rightArrow={RightImage}
    />
  );
}
export default App;
```
