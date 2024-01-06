import Home from "~/page/Home";
import { HeaderOnly } from "~/Layouts";
import Collections from "~/page/Collections";
import Products from "~/page/Products";
import ContactUs from "~/page/ContactUs";

 const publicRoutes =[
    {
        path:'/', component: Home
    },
    {
        path:'/collections', component: Collections
    },
    {
        path:'/products', component: Products, layout: HeaderOnly
    },
    {
        path:'/contactUs', component: ContactUs
    },
]

 const privateRoutes =[
    
]

export { publicRoutes, privateRoutes };