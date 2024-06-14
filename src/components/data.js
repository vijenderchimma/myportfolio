import {v4 as uuidv4} from 'uuid'

export const profileImage = 'assests/profile image/vijender.jpg'


const data =[
    {
        projectName: "Foodie Application",
        images: [
            {
                id: uuidv4(),
                image: "assests/Foodie/Home page loading view.jpg"
            },
            {
                id: uuidv4(),
                image: "assests/Foodie/Home page view.jpg"
            },
            {
                id: uuidv4(),
                image: 'assests/Foodie/firm collections.jpg',
            },{
                id: uuidv4(),
                image: 'assests/Foodie/products view.jpg'
            },
        ],
        pdfFile: 'assests/Foodie/Foodie.pdf',
        projectUrl:"https://foodie-app-silk.vercel.app/"
    },
    {
        projectName: "Foodie Vendor Application",
        images: [
            {
                id: uuidv4(),
                image: "assests/Foodie/registration view.jpg"
            },
            {
                id: uuidv4(),
                image: "assests/Foodie/login view.jpg"
            },
            {
                id: uuidv4(),
                image: 'assests/Foodie/vendor dashbaoard.jpg'
            },
            {
                id: uuidv4(),
                image: 'assests/Foodie/firm success view.jpg',
            },{
                id: uuidv4(),
                image: 'assests/Foodie/product success view.jpg'
            },{
                id: uuidv4(),
                image: 'assests/Foodie/vendor allproducts view.jpg'
            }
        ],
        pdfFile: 'assests/Foodie/vendor.pdf',
        projectUrl: "https://foodie-dashboard-ten.vercel.app/"
    },

    {
        projectName: "NxtTrendz Application",
        images: [
            {
                id: uuidv4(),
                image: "assests/nxttrendz/login view.jpg"
            },
            {
                id: uuidv4(),
                image: "assests/nxttrendz/nxttrendz home page.jpg"
            },
            {
                id: uuidv4(),
                image: 'assests/nxttrendz/prime deeals.jpg'
            },
            {
                id: uuidv4(),
                image: 'assests/nxttrendz/all products.jpg',
            },{
                id: uuidv4(),
                image: 'assests/nxttrendz/similar items.jpg'
            },{
                id: uuidv4(),
                image: 'assests/nxttrendz/cart view.jpg'
            },
        ],
        pdfFile: 'assests/nxttrendz/NxtTrendz Application.pdf',
        projectUrl: "https://vij13nxttrendz.ccbp.tech"
    },

    {
        projectName: "Weather Dashboard Application",
        images: [
            {
                id: uuidv4(),
                image: "assests/weather/weather home page.jpg"
            },
            {
                id: uuidv4(),
                image: "assests/weather/weather results.jpg"
            },
            {
                id: uuidv4(),
                image: 'assests/weather/map view.jpg',
            },
            {
                id: uuidv4(),
                image: 'assests/weather/map results.jpg'
            },{
                id: uuidv4(),
                image:'assests/weather/map weather results.jpg'
            },
        ],
        pdfFile: 'assests/weather/weather dashboard.pdf',
        projectUrl:"https://weatherdashboardfrontend.vercel.app/"
    },
    {
        projectName: "Notes Application",
        images: [
            {
                id: uuidv4(),
                image: 'assests/notes app/notes view.jpg'
            },
            {
                id: uuidv4(),
                image: 'assests/notes app/task added.jpg'
            }
        ],
        pdfFile: 'assests/notes app/Full Stack Vijender.pdf',
        projectUrl: "https://vijendernotes.vercel.app/"
    },
    

]

export default data