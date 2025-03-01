
# Pearl Bistro


Pearl-Bistro is a MERN stack restaurant website that connects food lovers with a seamless online ordering experience. The platform allows customers to explore the menu, place orders, and make secure payments, while admins have full control over managing products, users, and transactions. With an intuitive design, robust authentication, and real-time order tracking, Pral-Bistro ensures a smooth and enjoyable dining experience from start to finish.

Restaurant owners can efficiently manage their menu, update prices, and handle customer orders in real-time. Customers can browse dishes, customize their orders, and make payments securely using Stripe. Whether dining in or ordering online, Pral-Bistro enhances the restaurant experience with an easy-to-use digital platform.

Admins have full control over the platform, including managing users, monitoring orders, and ensuring compliance with platform guidelines. They can delete inactive users, remove inappropriate content, and keep the platform running smoothly for an optimal user experience.

## key Features
Pearl-Bistro allows users to easily register, log in, and log out using their email and password. The authentication system includes multi-factor authentication, CAPTCHA verification, and a view password feature to enhance security.

Menu Browsing & Ordering:

Customers can browse through an extensive menu with dynamically updated items from the backend. Each dish has a detailed page with descriptions, prices, and images. Orders are processed efficiently, and customers receive real-time updates on their orders.

Add and Manage Menu Items:

Restaurant owners and admins can create, update, delete, and manage menu items through a user-friendly interface. Admins have full control over modifying dishes, changing prices, and removing inappropriate items to keep the platform up to date.

Responsive Design:

Pearl-Bistro is fully responsive, ensuring a smooth experience across all devices, including mobile phones, tablets, and desktops. The design includes smooth animations and an intuitive layout for easy navigation.

Social Media Integration:

Pearl-Bistro includes links to the platform's social media accounts, such as LinkedIn, Facebook, GitHub, and Twitter, in the footer, allowing users to stay connected and informed.

Secure Payments:

Stripe is integrated for secure and seamless online payments. Customers can easily complete their purchases, and order confirmation emails are sent automatically after a successful transaction.

Database & Security:

Pearl-Bistro uses a secure MongoDB database to store all menu, order, and user data. Firebase authentication ensures a safe sign-up and login process, with encrypted passwords and secure email verification. SSL encryption protects user data, and regular backups help prevent data loss.

With an intuitive design and robust backend, Pearl-Bistro offers a modern and user-friendly experience for both restaurant owners and customers. Whether you need to order food, manage a restaurant, or browse the menu, our platform makes the process effortless and secure.


## Tech Stack
Frontend: React, Tailwind CSS, DaisyUI, TanStack, Framer Motion, Swiper, React Icons, SweetAlert

Backend: Node.js, Express.js

Database: MongoDB

Authentication: Firebase (Admin/User Roles, Multi-Factor Authentication, CAPTCHA, View Password Feature)

Payment Gateway: Stripe

Image Upload: ImageBB API

## User Features:

✅ Responsive Design – Works seamlessly across devices.
✅ Secure Authentication – Firebase authentication for users and admins, including multi-factor authentication, CAPTCHA verification, and view password feature.
✅ Browse & Order – View the menu, add to cart, and proceed to checkout.
✅ Secure Payments – Stripe integration ensures smooth transactions.
✅ Order Confirmation Email – Customers receive an email after successful payment.

Admin Features:

✅ Full CRUD Operations – Admins can Create, Read, Update, and Delete menu items.
✅ User & Order Management – View orders and manage customers.
✅ Photo API Integration – When a new item is added, its image is uploaded to the server using ImageBB API.

🔧 Installation & Setup

Clone the repository:

git clone https://github.com/Md-shahien-khan/pearl-bistro-client.git

Install dependencies for frontend and backend:

npm install && cd client && npm install

Set up environment variables:

Create a .env file in the root directory and add your Firebase, MongoDB, Stripe, and ImageBB API keys.

Start the development server:

npm run dev

📬 API Endpoints

Authentication

POST /api/auth/register – User registration

POST /api/auth/login – User login

Menu Management

GET /api/menu – Fetch all menu items

POST /api/menu – Add a new menu item (Admin only)

PUT /api/menu/:id – Update a menu item (Admin only)

DELETE /api/menu/:id – Remove a menu item (Admin only)

Orders & Payments

POST /api/orders – Place an order

GET /api/orders – Get all orders (Admin only)

POST /api/checkout – Process payment via Stripe

📸 Image Upload

ImageBB API is used to upload images when creating or updating a menu item.



## Authors

- [@MD-shahien-khan](https://github.com/Md-shahien-khan)


## Live Link for the deploy project
Project live link - https://pearl-bistro.netlify.app/

