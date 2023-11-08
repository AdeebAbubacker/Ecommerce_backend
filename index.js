const http = require('http');

const server = http.createServer((req, res) => {
    // Set the Content-Type to JSON
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // Create a JSON object to send as a response
    const responseData =
    {
        "Ecommercedta": {
            "Shoes": [



                {
                    "Brand": "Nike",
                    "Model": "Air Max 2023",
                    "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRupXHv4YZxUNxavW8a8tTOvbTPqLqFPakn0w&usqp=CAU",
                    "Size": "US 10",
                    "Price": "Rs. 129.99",
                    "Availability": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkpzBYytJGzrswt1AvV-UiC_f0ZyoN-8SVQw&usqp=CAU",
                    "Description": "Allow your pair of shoes to air and de-odorize at a regular basis, this also helps them retain their natural shape; use shoes bags to prevent any stains or mildew; dust any dry dirt from the surface using a clean cloth, do not use polish or shiner",
                    "Rating": 4.9
                },
                {
                    "Brand": "Adidas",
                    "Model": "Ultra Boost 5.0",
                    "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEAVjC6CPQyCLqaSNRrCnJEMCPq1vOO9P8SA&usqp=CAU",
                    "Size": "US 9.5",
                    "Price": "Rs. 129.99",
                    "Availability": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgdBvJjNXBmG-rVu8D-vt8tHD6Bb-USt6H-Q&usqp=CAU",
                    "Description": "Adidas shoes feature a sleek design with iconic three stripes, offering exceptional comfort and support. Crafted for style and performance, they are a perfect blend of fashion and function.",
                    "Rating": 4.2
                },
                {
                    "Brand": "Puma",
                    "Model": "Ultra Boost 5.0",
                    "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHTWA8GLX9r_GfkPghvwyRpwmoHBpL51_IIQ&usqp=CAU",
                    "Size": "US 9.5",
                    "Price": "Rs. 129.99",
                    "Availability": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf5K9dXwwY7KqhUmMR2f7-EZ2RnI5O8_yVLA&usqp=CAU",
                    "Description": "Puma shoes showcase a sporty and modern look, known for their lightweight construction and excellent cushioning. These kicks effortlessly combine style and athleticism for a versatile footwear choice.",
                    "Rating": 4.1
                },
                {
                    "Brand": "Reebok",
                    "Model": "Ultra Boost 5.0",
                    "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Z7AYY_FCQi4VfAgV76kF5yB8aF30bFR3yQ&usqp=CAU",
                    "Size": "US 9.5",
                    "Price": "Rs. 129.99",
                    "Availability": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt-hOktBlDF6_kQWeVgqhrda1As1QVgF69xg&usqp=CAU",
                    "Description": "Reebok shoes are renowned for their timeless and athletic design, delivering superior comfort and durability. Their classic appeal and performance-oriented features make them a reliable choice for any activity.",
                    "Rating": 4.3
                },
                {
                    "Brand": "Woodland",
                    "Model": "Ultra Boost 5.0",
                    "imgUrl": "https://sslimages.shoppersstop.com/sys-master/images/h72/h18/9042584731678/8192466_9465_alt1.png_2000Wx3000H",
                    "Size": "US 9.5",
                    "Price": "Rs. 129.99",
                    "Availability": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpWI8lwXNNzzCIC5oeNADShRbsWilIS7Ry_A&usqp=CAU",
                    "Description": "Woodland shoes offer rugged durability and outdoor-ready style, built to withstand tough terrains. With their sturdy build and earthy aesthetics, they're perfect for adventurers and nature enthusiasts.",
                    "Rating": 3.9,
                },
            ],
            "Bags": [

                {
                    "Brand": "Wild Craft",
                    "Model": "Air Max 2023",
                    "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyAs328yd7yQQlKeOF_v7gvBWe5WBpbXG4_g&usqp=CAU",
                    "Size": "US 10",
                    "Price": "Rs. 129.99",
                    "Availability": "https://seeklogo.com/images/T/the-wildcraft-logo-221AFC99F7-seeklogo.com.png",
                    "Description": "Wildcraft bags are synonymous with quality and adventure. Crafted for the outdoors, they combine durability, style, and functionality, making them the ideal companions for all your adventures.",
                    "Rating": 4.9
                },
                {
                    "Brand": "Ynique",
                    "Model": "Ultra Boost 5.0",
                    "imgUrl": "https://images.meesho.com/images/products/179061679/r7sk3_512.webp",
                    "Size": "US 9.5",
                    "Price": "Rs. 129.99",
                    "Availability": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_mliuQolf7vQ7lBKyVAcurP2WlcaKVlacRA&usqp=CAU",
                    "Description": "Ynique bags are known for their chic and affordable designs, catering to various fashion tastes. These stylish and versatile bags provide both fashion and functionality for everyday use or special occasions.",
                    "Rating": 4.6,
                },
                {
                    "Brand": "Hidesign",
                    "Model": "Ultra Boost 5.0",
                    "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_iXVgY-gAiKpe-NO1lqcuQzUyHBAgGtFtbQ&usqp=CAU",
                    "Size": "US 9.5",
                    "Price": "Rs. 129.99",
                    "Availability": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-lpFsRPh1Z5eFoBU7faz6uLP5yx9jcxnmkg&usqp=CAU",
                    "Description": "Hidesign bags are synonymous with premium quality and timeless elegance. These leather masterpieces exude sophistication, blending craftsmanship with contemporary style to make a statement of luxury and taste.",
                    "Rating": 4.1,
                },
                {
                    "Brand": "Baggit",
                    "Model": "Ultra Boost 5.0",
                    "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz8sUA67OvsaDJ429K6EKSnWnr-yPn7KnjEw&usqp=CAU",
                    "Size": "US 9.5",
                    "Price": "Rs. 129.99",
                    "Availability": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl6cSOzdSpkXeawdBAPse1vRjhmmx38qCWHw&usqp=CAU",
                    "Description": "Baggit bags are a stylish and sustainable choice, known for their vegan materials and trendy designs. These fashion-forward bags offer a perfect blend of ethics and aesthetics, making them a favorite among eco-conscious individuals.",
                    "Rating": 3.9,
                },
                {
                    "Brand": "Caprese",
                    "Model": "Ultra Boost 5.0",
                    "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiyjI--6TQmokH625Mp7KuNzcVal1uvSCwzQ&usqp=CAU",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaw53bU-hta8YDKny1YmEwfNBkApUiwiu5NQ&usqp=CAU",
                    "Description": "Caprese bags are synonymous with sophisticated and fashionable designs. These chic and elegant handbags are crafted with attention to detail, offering a touch of luxury and style to complement various outfits and occasions.",
                    "Rating": 4.7,
                },
            ],

            "Fridge": [
                {
                    "Brand": "LG",
                    "Model": "Air Max 2023",
                    "imgUrl": "https://www.lg.com/in/images/refrigerators/md07570282/GN-H602HLHM-Refrigerators-Front-View-D-01.jpg",
                    "Size": "US 10",
                    "Price": "Rs. 129.99",
                    "Availability": "In Stock",
                    "Description": "LG fridges are renowned for their innovative technology and modern design. These refrigerators offer advanced features like smart connectivity, energy efficiency, and ample storage space, making them a popular choice for both convenience and style in the kitchen.",
                    "Rating": 4.2,
                },
                {
                    "Brand": "Godrej",
                    "Model": "Ultra Boost 5.0",
                    "imgUrl": "https://imgeng.jagran.com/images/2023/mar/LG%206741679911081049.jpg",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "Godrej fridges are known for their reliability and performance. These refrigerators are designed to cater to various needs, offering efficient cooling, durability, and thoughtful features, making them a trusted choice for households seeking dependable refrigeration solutions.",
                    "Rating": 4.5,
                },
                {
                    "Brand": "Panasonic",
                    "Model": "Ultra Boost 5.0",
                    "imgUrl": "https://kannankandyestore.com/wp-content/uploads/2022/06/godrej1.jpg",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "Panasonic fridges are known for their cutting-edge technology and sleek design. These refrigerators offer advanced features such as energy efficiency, precise temperature control, and ample storage space, making them a popular choice for modern households looking for both functionality and style in their kitchen appliances.",
                    "Rating": 3.9,
                },
                {
                    "Brand": "Samsung",
                    "Model": "Ultra Boost 5.0",
                    "imgUrl": "https://kannankandyestore.com/wp-content/uploads/2022/06/565f244a1-300x300.jpg",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "Samsung fridges are synonymous with innovation and style. These refrigerators incorporate advanced features like smart technology, customizable storage options, and energy efficiency, making them a popular choice for those seeking high-tech, convenient, and aesthetically pleasing refrigeration solutions.",
                    "Rating": 4.4,
                },
                {
                    "Brand": "Whirlpool",
                    "Model": "Ultra Boost 5.0",
                    "imgUrl": "https://img4.gadgetsnow.com/gd/images/products/additional/small/G436215_View_1/electronics/refrigerator/samsung-single-door-246-litres-3-star-refrigerator-camellia-purple-rr26c3753cr-hl.jpg",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "Whirlpool fridges are trusted for their reliability and efficiency. These refrigerators are designed to provide reliable cooling, innovative features, and a variety of storage options to cater to different needs. They are a popular choice for households looking for dependable and functional refrigeration appliances.",
                    "Rating": 4.2,
                },
            ],

            "Laptop": [
                {
                    "Brand": "Lenovo",
                    "Model": "Air Max 2023",
                    "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN0QF7tyTQVEeNWIn-lgAk32v0uNtpSIsJ4g&usqp=CAU",
                    "Size": "US 10",
                    "Price": "Rs. 129.99",
                    "Availability": "In Stock",
                    "Description": "Lenovo laptops are well-regarded for their performance, durability, and versatility. Known for their cutting-edge technology and sleek designs, Lenovo offers a wide range of laptops suitable for various needs, from business to gaming and everyday use, making them a popular choice among users seeking reliable computing solutions.",
                    "Rating": 4.5,
                },
                {
                    "Brand": "Hp",
                    "Model": "Ultra Boost 5.0",
                    "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5gZJRZDe4w1_EfJEQLxyVkrN4fHCakA3Iw&usqp=CAU",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "HP laptops are synonymous with quality and reliability. These laptops are known for their durability, performance, and innovative features. With a wide range of models catering to different needs, HP laptops are popular among users seeking a balance of functionality and style in their computing devices.",
                    "Rating": 4.1,
                },
                {
                    "Brand": "Hp",
                    "Model": "Ultra Boost 5.0",
                    "imgUrl": "https://in-media.apjonlinecdn.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/7/M/7M3V0PA-1_T1686117036.png",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "HP laptops are synonymous with quality and reliability. These laptops are known for their durability, performance, and innovative features. With a wide range of models catering to different needs, HP laptops are popular among users seeking a balance of functionality and style in their computing devices.",
                    "Rating": 3.9,
                },
                {
                    "Brand": "Hp",
                    "Model": "Ultra Boost 5.0",
                    "imgUrl": "https://www.bing.com/th?id=OPA.a%2be1q85XxUMv5g474C474&o=5&pid=21.1&w=142&h=142&rs=1&qlt=100&dpr=1.3",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "HP laptops are synonymous with quality and reliability. These laptops are known for their durability, performance, and innovative features. With a wide range of models catering to different needs, HP laptops are popular among users seeking a balance of functionality and style in their computing devices.",
                    "Rating": 4.2,
                },
                {
                    "Brand": "Hp",
                    "Model": "Ultra Boost 5.0",
                    "imgUrl": "https://www.bing.com/th?id=OPA.iYgSvfqbitzPnw474C474&o=5&pid=21.1&w=130&h=130&rs=1&qlt=100&dpr=1.3&bw=6&bc=FFFFFF",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "HP laptops are synonymous with quality and reliability. These laptops are known for their durability, performance, and innovative features. With a wide range of models catering to different needs, HP laptops are popular among users seeking a balance of functionality and style in their computing devices.",
                    "Rating": 4.5,
                },
            ],
            "Cosmetics": [
                {
                    "Brand": "Lakme",
                    "Model": "Blush and glow",
                    "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTytzJmfEl3PAVNEReQTBQ6bhUJWavxLphIvQ&usqp=CAU",
                    "Size": "US 10",
                    "Price": "Rs. 129.99",
                    "Availability": "In Stock",
                    "Description": "The Nike Air Max 2023 combines style and comfort with its unique design and cushioned sole.",
                    "Rating": 4.2,
                },
                {
                    "Brand": "Lakme",
                    "Model": "Day creame",
                    "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpvrzjcNtecrOLM3J74y-ikF_vyMDKy8Ryeg&usqp=CAU",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "The Adidas Ultra Boost 5.0 offers unparalleled energy return and support for runners.",
                    "Rating": 4.3,
                }
            ],

            "Mobile phone": [
                {
                    "Brand": "Redmi",
                    "Model": "Poco F5 5g",
                    "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHbsgNA2Fupvmjq8TlEPYMHLC3D58pFEgRg&usqp=CAU",
                    "Size": "US 10",
                    "Price": "Rs. 129.99",
                    "Availability": "In Stock",
                    "Description": "The Nike Air Max 2023 combines style and comfort with its unique design and cushioned sole.",
                    "Rating": 3.9
                },
                {
                    "Brand": "Vivo",
                    "Model": "Y 56",
                    "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLpIrzwGWkd7kP94EMWWB1kA0G-azNS5PYDQ&usqp=CAU",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "The Adidas Ultra Boost 5.0 offers unparalleled energy return and support for runners.",
                    "Rating": 4.2,
                },
                {
                    "Brand": "Oppo ",
                    "Model": "A55",
                    "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCw3uL0dmor9NY70PFQgts3oLlFNyzYepi6Q&usqp=CAU",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "The Adidas Ultra Boost 5.0 offers unparalleled energy return and support for runners.",
                    "Rating": 4.3,
                },
                {
                    "Brand": "Realme",
                    "Model": "nazro N 53",
                    "imgUrl": "https://m.media-amazon.com/images/I/41QssaE9gfL._SX300_SY300_QL70_FMwebp_.jpg",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "The Adidas Ultra Boost 5.0 offers unparalleled energy return and support for runners.",
                    "Rating": 4.8,
                },
                {
                    "Brand": "Samsung",
                    "Model": "M 04",
                    "imgUrl": "https://images.samsung.com/is/image/samsung/p6pim/in/sm-m045flggins/gallery/in-galaxy-m04-4gb-64gb-sm-m045flggins-534598046?$730_584_PNG$",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "The Adidas Ultra Boost 5.0 offers unparalleled energy return and support for runners.",
                    "Rating": 4.3,
                },
                {
                    "Brand": "HUAWEI",
                    "Model": "P 3",
                    "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAVycdWB2lqKSXqp6vA_D7F9A9br9ckYDXQ&usqp=CAU",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "The Adidas Ultra Boost 5.0 offers unparalleled energy return and support for runners.",
                    "Rating": 3.9
                },
            ],
            "Tv": [
                {
                    "Brand": "LG 108 cm (43 inches) 4K",
                    "Model": "43NANO73SQA (Ashed Blue)",
                    "imgUrl": "https://m.media-amazon.com/images/I/71+itsdjywL._AC_SR180,120_QL70_.jpg",
                    "Size": "US 10",
                    "Price": "Rs. 129.99",
                    "Availability": "In Stock",
                    "Description": "The Nike Air Max 2023 combines style and comfort with its unique design and cushioned sole.",
                    "Rating": 4.2
                },
                {
                    "Brand": "OnePlus 108 cm (43 inches)",
                    "Model": "Y Series 4K Ultra HD Smart Android LED TV",
                    "imgUrl": "https://m.media-amazon.com/images/I/51ovMTXv9RL._SX300_SY300_QL70_FMwebp_.jpg",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "The Adidas Ultra Boost 5.0 offers unparalleled energy return and support for runners.",
                    "Rating": 4.1,
                },
                {
                    "Brand": "Samsung 108 cm (43 inches)",
                    "Model": "Crystal iSmart 4K Smart LED TV",
                    "imgUrl": "https://m.media-amazon.com/images/I/41KQf7HCDoL._SY300_SX300_QL70_FMwebp_.jpg",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "The Adidas Ultra Boost 5.0 offers unparalleled energy return and support for runners.",
                    "Rating": 4.2,
                },
                {
                    "Brand": "TCL",
                    "Model": "Bezel-Less Series 4K Ultra HD",
                    "imgUrl": "https://m.media-amazon.com/images/I/71aUcnsPLEL._AC_UY327_FMwebp_QL65_.jpg",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "The Adidas Ultra Boost 5.0 offers unparalleled energy return and support for runners.",
                    "Rating": 4.5,
                },
                {
                    "Brand": "OnePlus 138cm",
                    "Model": "U Series",
                    "imgUrl": "https://m.media-amazon.com/images/I/61uk5gA8XOS._AC_UY327_FMwebp_QL65_.jpg",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "The Adidas Ultra Boost 5.0 offers unparalleled energy return and support for runners.",
                    "Rating": 3.9
                },
                {
                    "Brand": "IFFALCON",
                    "Model": "Iffs3",
                    "imgUrl": "https://m.media-amazon.com/images/I/717FSxcSEjL._AC_UY327_FMwebp_QL65_.jpg",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "The Adidas Ultra Boost 5.0 offers unparalleled energy return and support for runners.",
                    "Rating": 4.1,
                },
                {
                    "Brand": "Acer",
                    "Model": "SM - 3",
                    "imgUrl": "https://m.media-amazon.com/images/I/5126gXnEjFL._AC_UY327_FMwebp_QL65_.jpg",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "The Adidas Ultra Boost 5.0 offers unparalleled energy return and support for runners.",
                    "Rating": 4.3,
                },

            ],
            "Sorts Item": [
                {
                    "Brand": "Nivia",
                    "Model": "Rubberized-Stitched",
                    "imgUrl": "https://m.media-amazon.com/images/I/814+CTVS6XL._AC_UL480_FMwebp_QL65_.jpg",
                    "Size": "US 10",
                    "Price": "Rs. 129.99",
                    "Availability": "In Stock",
                    "Description": "The Nike Air Max 2023 combines style and comfort with its unique design and cushioned sole.",
                    "Rating": 4.1,
                },
                {
                    "Brand": "Cosco",
                    "Model": "Ultra Boost 5.0",
                    "imgUrl": "https://m.media-amazon.com/images/I/615zn3rrC5L._AC_UL480_FMwebp_QL65_.jpg",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "The Adidas Ultra Boost 5.0 offers unparalleled energy return and support for runners.",
                    "Rating": 4.9
                },
                {
                    "Brand": "Symcactive",
                    "Model": "Ultra Boost 5.0",
                    "imgUrl": "https://m.media-amazon.com/images/I/61+Yi+4+NsL._AC_UL480_FMwebp_QL65_.jpg",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "The Adidas Ultra Boost 5.0 offers unparalleled energy return and support for runners.",
                    "Rating": 4.3,
                },
                {
                    "Brand": "B-TV",
                    "Model": "Ultra Boost 5.0",
                    "imgUrl": "https://m.media-amazon.com/images/I/61Aj2ARTFaL._AC_UL480_FMwebp_QL65_.jpg",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "The Adidas Ultra Boost 5.0 offers unparalleled energy return and support for runners.",
                    "Rating": 3.9
                },
                {
                    "Brand": "Boldfit",
                    "Model": "Ultra Boost 5.0",
                    "imgUrl": "https://m.media-amazon.com/images/I/71l2-gWOnpL._AC_UL480_FMwebp_QL65_.jpg",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "The Adidas Ultra Boost 5.0 offers unparalleled energy return and support for runners.",
                    "Rating": 4.2
                }
            ],
            "Offer 1": [
                {
                    "Brand": "HP 150 Wired Keyboard",
                    "Model": "664R5AA#ACJ",
                    "imgUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/keyboard/desktop-keyboard/3/c/1/150-hp-original-imaghydff9ttwzex.jpeg?q=70",
                    "Size": "US 10",
                    "Price": "Rs. 511",
                    "Availability": "In Stock",
                    "Description": "Introducing our Wired Keyboard, a reliable and efficient input device designed for seamless productivity and comfortable typing. This keyboard is crafted with precision and practicality in mind, making it an essential tool for work or play.",
                    "Rating": 4.1,
                },
                {
                    "Brand": "TITIRANGI",
                    "Model": "Drive Vehicles for Toddlers",
                    "imgUrl": "https://rukminim2.flixcart.com/image/416/416/khuvxjk0-0/vehicle-pull-along/x/w/y/friction-powered-mini-monster-cars-for-kids-with-big-rubber-original-imafxruqgz7rw4xw.jpeg?q=70",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "Introducing our Toy Truck, a miniature powerhouse of adventure and imagination for young aspiring builders and explorers. Crafted with attention to detail and rugged durability, this toy truck is designed to withstand the most daring playtime escapades.",
                    "Rating": 4.9
                },
                {
                    "Brand": "Marc Loire",
                    "Model": "Women Black Heels Sandal",
                    "imgUrl": "https://rukminim2.flixcart.com/image/832/832/xif0q/sandal/7/u/u/-original-imagg5uzxgqfwypv.jpeg?q=70",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "Introducing our Women's Sandals, the epitome of comfort and style for the modern woman on the move. These sandals are meticulously designed to provide a harmonious blend of fashion-forward aesthetics and unparalleled comfort. Crafted from premium materials, they offer both durability and a soft, cushioned insole, ensuring each step you take feels like a breeze. ",
                    "Rating": 4.3,
                },
                {
                    "Brand": "RK INDIA HAIR DRYER",
                    "Model": "MULTICOLOUR Hair Dryer",
                    "imgUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/hair-dryer/h/k/w/hair-dryer-1500-watts-2-speed-2-heat-settings-with-rolling-comb-original-imagp6hpvxcvwrjk.jpeg?q=70",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "Introducing our Professional Hair Dryer, the ultimate styling tool that combines power, precision, and salon-quality results right in the comfort of your home. Crafted with advanced technology and designed for efficiency, this hair dryer promises a fast and gentle drying experience, leaving your hair silky-smooth and beautifully styled.",
                    "Rating": 3.9
                },
                {
                    "Brand": "Spiderman Bag",
                    "Model": "Red, 30 L",
                    "imgUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/bag/z/h/g/36-web-slinging-36cm-primary-primary-lkg-ukg-1st-std-school-bag-original-imagspnrhnsadwyg.jpeg?q=70",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "Introducing our Spider-Man Backpack, a must-have for every young superhero in training. This backpack combines the thrill of Spidey's adventures with practicality and durability. Made from high-quality materials, it's built to withstand the rigors of school, playdates, and everyday adventures. The eye-catching Spider-Man design adorns the front, inspiring a sense of heroism and excitement in young fans. ",
                    "Rating": 4.2
                }
            ],
            "Offer 2": [
                {
                    "Brand": "TIARA",
                    "Model": "Multicolor Tote",
                    "imgUrl": "https://rukminim2.flixcart.com/image/832/832/k5e7o280/bag/j/w/w/women-tote-handbag-multicolor-astrid-16-original-imafkzt9nqzgsqzu.jpeg?q=70",
                    "Size": "US 10",
                    "Price": "Rs. 558",
                    "Availability": "In Stock",
                    "Description": "Elevate your everyday style with our versatile Tote Bag, a blend of fashion and functionality designed to accompany you on all of life's journeys. Crafted with meticulous attention to detail, this tote boasts a spacious interior that accommodates your daily essentials, from work documents to gym gear. Its high-quality, durable material ensures it can withstand the demands of your busy lifestyle while maintaining a chic appearance. ",
                    "Rating": 4.1,
                },
                {
                    "Brand": "Uplight Wall Lamp",
                    "Model": "G - 7",
                    "imgUrl": "https://rukminim2.flixcart.com/image/416/416/k5y7tzk0/wall-lamp/d/k/e/wall-lamp-goldstar-original-imafzgv8cgrcfmh9.jpeg?q=70",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "Introducing our Wall Lamp, a harmonious blend of elegant design and practical illumination for your living space. Crafted with meticulous attention to detail, this wall-mounted fixture combines form and function seamlessly, adding a touch of sophistication to any room.",
                    "Rating": 4.9
                },
                {
                    "Brand": "Indiginous Milk Purity Tester",
                    "Model": "TGUN -3",
                    "imgUrl": "https://rukminim2.flixcart.com/image/416/416/koynr0w0/hydrometer/d/u/f/milk-purity-tester-meter-glass-lactometer-check-water-in-milk-at-original-imag3b64yp6x6qxj.jpeg?q=70",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "Introducing our Milk Purity Tester, the cutting-edge solution for ensuring the quality and safety of your milk supply. Designed for dairy farmers, milk processors, and quality control professionals, this device provides accurate and reliable assessments of milk purity and composition.",
                    "Rating": 4.3,
                },
                {
                    "Brand": "Cart Dancing Cactus",
                    "Model": "Talking Tom Toy",
                    "imgUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/learning-toy/5/f/y/electronic-recorder-repeating-dancing-cactus-toy-with-led-light-original-imaghyysc4gezatx.jpeg?q=70",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "Introducing our Dancing Cactus Toy, the adorable and entertaining companion that will have everyone grooving with joy. This charming cactus dances to the beat of catchy music, wiggling its arms and swaying its body in a delightful rhythm. Crafted with soft, huggable materials, it's perfect for snuggles and playtime. ",
                    "Rating": 3.9
                },
                {
                    "Brand": "EVERDECOR",
                    "Model": "Bed Sheet",
                    "imgUrl": "https://rukminim2.flixcart.com/image/416/416/kjvrdzk0/blanket/p/b/o/reversible-3rd-generation-double-bed-comforter-blanket-quilt-original-imafzdyxj9dcvhrh.jpeg?q=70",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "Introducing our Premium Bedsheet Set, the epitome of comfort and elegance for your bedroom. Crafted from luxuriously soft and breathable fabric, these sheets promise a night of uninterrupted sleep. The deep-pocket design ensures a snug fit for your mattress, while the durable material maintains its pristine appearance wash after wash. ",
                    "Rating": 4.2
                }
            ],
            "Offer 3": [
                {
                    "Brand": "HIGHLANDER",
                    "Model": "Men Tapered Fit Jeans",
                    "imgUrl": "https://rukminim2.flixcart.com/image/832/832/kfoapow0-0/jean/i/a/e/32-hljn001111-highlander-original-imafw2gagzymmh4m.jpeg?q=70",
                    "Size": "US 10",
                    "Price": "Rs. 129.99",
                    "Availability": "In Stock",
                    "Description": "Elevate your style with our Men's Jeans, the epitome of classic fashion fused with modern comfort. Crafted from premium denim, these jeans offer a perfect balance of durability and a soft, comfortable fit. The timeless design features a versatile straight-leg cut, making them suitable for any occasion. ",
                    "Rating": 4.1,
                },
                {
                    "Brand": "Dennis Lingo ",
                    "Model": "Men Cargos",
                    "imgUrl": "https://rukminim2.flixcart.com/image/832/832/l3uhvgw0/trouser/m/k/z/38-b401-steelgrey-dennis-lingo-original-imagevq2jh4yvets.jpeg?q=70",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "Experience the perfect blend of style and functionality with our Men's Cargo Pants. These versatile pants are designed to adapt to your active lifestyle with ease. Crafted from durable and breathable fabric, they offer comfort for all-day wear. The practical cargo pockets provide ample storage space for your essentials, while the modern, tailored fit keeps you looking sharp. ",
                    "Rating": 4.9
                },
                {
                    "Brand": "Macros Super Soft ",
                    "Model": "Teddy Bear for kids",
                    "imgUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/stuffed-toy/d/t/b/super-soft-10-complete-pack-stuffed-soft-toy-combo-of-teddy-bear-original-imagmaycykwxzejm.jpeg?q=70",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "Introducing our Huggable Teddy Bear, the epitome of cuddly companionship. Crafted with the softest plush fur, this bear is ready to provide endless warmth and comfort. With its endearing smile and timeless design, it's the perfect gift for all ages. Whether you're looking for a snuggle buddy or a heartfelt gesture, our Huggable Teddy Bear is here to make every moment a little cozier.",
                    "Rating": 4.3,
                },
                {
                    "Brand": "INDICLUB",
                    "Model": "Running Shorts",
                    "imgUrl": "https://rukminim2.flixcart.com/image/832/832/xif0q/short/9/w/p/4xl-ic-24649-indiclub-original-imagbf8wmtnrtmbe-bb.jpeg?q=70",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "Our Running Shorts are the perfect blend of style, comfort, and performance for every athlete. Crafted from high-quality moisture-wicking fabric, these shorts keep you dry and comfortable throughout your run. Their lightweight and breathable design allows for unrestricted movement, while the elastic waistband ensures a secure fit.",
                    "Rating": 3.9
                },
                {
                    "Brand": "Hitachi 2023 Model",
                    "Model": "RAS.E318PCAIBS",
                    "imgUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/air-conditioner-new/q/c/8/-original-imagzkeq3kw2gc5s.jpeg?q=70",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "The Hitachi air conditioner stands as a pinnacle of cooling innovation, offering a harmonious blend of powerful performance, energy efficiency, and intelligent features. Its rapid and efficient cooling capabilities ensure that you stay comfortable, even during scorching summer days, while its dedication to energy-saving technologies contributes to reduced utility bills.",
                    "Rating": 4.2
                }
            ],
            "Offer 4": [
                {
                    "Brand": "Trampoline",
                    "Model": "Girls Printed Cotton Blend T Shirt",
                    "imgUrl": "https://rukminim2.flixcart.com/image/832/832/xif0q/kids-t-shirt/k/m/m/7-8-years-trm-fls-222-5-trampoline-original-imagrpv2kzv723tz.jpeg?q=70",
                    "Size": "US 10",
                    "Price": "Rs. 129.99",
                    "Availability": "In Stock",
                    "Description": "Introducing our Girls' T-Shirt, a versatile addition to her wardrobe. Crafted from soft and breathable fabric, it ensures all-day comfort, while its vibrant designs add a playful touch to her look. Perfect for playdates or casual outings, this tee is a must-have for effortless and stylish everyday fashion.",
                    "Rating": 4.1,
                },
                {
                    "Brand": "CEDO XPRO",
                    "Model": "Back Cover",
                    "imgUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/cases-covers/o/b/t/-original-imagtkvkfrvzkg4a.jpeg?q=70",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "Elevate the look of your smartphone with our sleek and stylish back cover. Crafted with a modern design, it adds a touch of elegance while showcasing the beauty of your device.",
                    "Rating": 4.9
                },
                {
                    "Brand": "funtoosh",
                    "Model": "Teddy Bears",
                    "imgUrl": "https://rukminim2.flixcart.com/image/416/416/kgl5ua80/stuffed-toy/e/5/s/couple-love-teddy-bears-in-basket-30-cm-30-mentallook-original-imafwrsgkdfysw4p.jpeg?q=70",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "Our Classic Teddy Bear boasts a timeless and endearing design, featuring soft, plush fur that's gentle to the touch. With its friendly face and huggable body, this teddy bear is a classic that never goes out of style.",
                    "Rating": 4.3,
                },
                {
                    "Brand": "US DZIRE",
                    "Model": "Fancy Light",
                    "imgUrl": "https://rukminim2.flixcart.com/image/416/416/kabe9ow0/ceiling-lamp/q/g/h/460pln-us-dzire-original-imafrx8u2xc4sauc.jpeg?q=70",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "Each crystal is meticulously hand-cut and polished to perfection, ensuring unparalleled clarity and brilliance. The frame is crafted from high-quality metal with a lustrous finish that complements the crystals beautifully.",
                    "Rating": 3.9
                },
                {
                    "Brand": "Para Trooper",
                    "Model": "Tactical Combat Army Jungle Boot",
                    "imgUrl": "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/x/7/x/-original-imagg4h9ychb5zh8.jpeg?q=70",
                    "Size": "US 9.5",
                    "Price": "Rs. 149.99",
                    "Availability": "Out of Stock",
                    "Description": "Paratrooper boots, also commonly known as jump boots, are specialized military boots designed for paratroopers and other airborne forces. These boots are specifically crafted to meet the unique needs of soldiers who are involved in parachute operations.",
                    "Rating": 4.2
                }
            ]
        }

    }

    // Parse the URL to extract the pathname and query
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname;
    const searchQuery = url.searchParams.get('search');

    if (pathname === '/search') {
        if (searchQuery === 'volumeinfo') {
            // If searching for volumeinfo, return only the volumeinfo array
            res.end(JSON.stringify({ "volumeinfo": responseData.volumeinfo }));
        } else if (searchQuery === 'book') {
            // If searching for book, return only the book array
            res.end(JSON.stringify({ "book": responseData.book }));
        } else {
            // If the search query is not recognized, return an empty object
            res.end(JSON.stringify({}));
        }
    } else {
        // If the URL doesn't match the /search endpoint, return the entire responseData
        res.end(JSON.stringify(responseData));
    }
});

server.listen(3001, () => {
    console.log('Server listening on port 3001');
});

