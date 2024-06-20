## Getting started

[](https://www.npmjs.com/package/react-calendar#getting-started)

### Compatibility

Your project needs to use React 16.8 or later.
react-smooth-tabs uses modern web technologies. That's why it's so fast, lightweight and easy to style. This, however, comes at a cost of [supporting only modern browsers](https://caniuse.com/#feat=internationalization).

## Features

- Slide with Transitions
- Fullscreen support
- Responsive design

### Installation

[](https://www.npmjs.com/package/react-calendar#installation)

Add react-Smooth-tabs to your project by executing `npm install react-smooth-tabs` or `yarn add react-smooth-tabs`.

### Usage

    import  {  ScrollableTabs  }  from  "react-smooth-tabs";
    import  "react-smooth-tabs/dist/index.css";

### Example

    function  App()  {
    let  [activeTab,  setActiveTab]  =  useState("activeOrders");
    // Your tab list
    const  tabsList  =  [
    {
    value:  "activeOrders",
    label:  "Active Orders",
    },
    {
    value:  "completedOrders",
    label:  "Completed Orders",
    },
    {
    value:  "cancelledOrders",
    label:  "Cancelled Orders",
    },
    {
    value:  "WaitingResponse",
    label:  "Waiting Response",
    },
    {
    value:  "PendingApproval",
    label:  "Pending Approval",
    },
    {
    value:  "Declined",
    label:  "Declined",
    },
    {
    value:  "RoutedOffers",
    label:  "Routed Offers",
    },
    {
    value:  "DisputedOrders",
    label:  "Disputed Orders",
    },
    {
    value:  "CounterOffers",
    label:  "Counter Offers",
    },
    ];

    return  (

    <ScrollableTabs
    tabs={tabsList}
    activeTab={activeTab}
    setActiveTab={setActiveTab}
    leftArrow={"https://cdn-icons-png.flaticon.com/512/109/109618.png"}
    rightArrow={"https://cdn-icons-png.flaticon.com/512/109/109617.png"}
    />

    );
    }
    export  default  App;
