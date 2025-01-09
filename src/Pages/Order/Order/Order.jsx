import React, { useState } from 'react';
import orderCover from '../../../assets/shop/banner2.jpg'
import MenuCoverCard from '../../../MenuCoverCArd/MenuCoverCard';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Helmet } from 'react-helmet';
import useMenu from '../../../hooks/UseMenu';
import OrderTab from './OrderTab/OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {
    const categories = ['soup', 'salad', 'pizza', 'kebab', 'steak', 'sushi', 'dessert', 'drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex );
    const [menu] = useMenu();
    // console.log(category) 
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    const kebab = menu.filter(item => item.category === 'kebab');
    const salad = menu.filter(item => item.category === 'salad');
    const drinks = menu.filter(item => item.category === 'drinks');
    const dessert = menu.filter(item => item.category === 'dessert');
    const sushi = menu.filter(item => item.category === 'sushi');
    const steak = menu.filter(item => item.category === 'steak');
    return (
        <div>
            <Helmet>
                <title>Pearl Bistro | Order</title>
            </Helmet>

            <MenuCoverCard img={orderCover} title={'Order Food'} titleInfo={"Craving something delicious? Ordering from us is quick and easy! Simply browse through our diverse menu, select your favorite dishes, and let us bring the taste of excellence right to your door. Whether you're in the mood for a hearty steak, a light salad, or a refreshing Mojito, we’ve got something to satisfy every craving."}>
            </MenuCoverCard>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
                <Tab>Soup</Tab>
                <Tab>Salad</Tab>
                <Tab>Pizza</Tab>
                <Tab>kebab</Tab>
                <Tab>Steak</Tab>
                <Tab>Sushi</Tab>
                <Tab>Dessert</Tab>
                <Tab>Drinks</Tab>
            </TabList>
            <TabPanel>
                <OrderTab items={soup}></OrderTab>
            </TabPanel>
            <TabPanel>
                <OrderTab items={salad}></OrderTab>
            </TabPanel>
            <TabPanel>
                <OrderTab items={pizza}></OrderTab>
            </TabPanel>
            <TabPanel>
                <OrderTab items={kebab}></OrderTab>
            </TabPanel>
            <TabPanel>
                <OrderTab items={steak}></OrderTab>
            </TabPanel>
            <TabPanel>
                <OrderTab items={sushi}></OrderTab>
            </TabPanel>
            <TabPanel>
                <OrderTab items={dessert}></OrderTab>
            </TabPanel>
            <TabPanel>
                <OrderTab items={drinks}></OrderTab>
            </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;