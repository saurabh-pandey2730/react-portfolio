import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
  import img1 from '../assets/project-8.jpeg'
  import img2 from '../assets/project-2.jpeg'
  import img3 from '../assets/project-3.png'
  import img4 from '../assets/project-4.jpeg'
  import img5 from '../assets/project-5.jpeg'
  import img6 from '../assets/project-6.jpeg'
  import img7 from '../assets/project-7.jpeg'
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title , src, about,link}) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-8 text-deep-blue`;
  

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair mb-3">{title}</p>
        <p className="mt-2 ">
         <a href={link}>{about}</a>

        </p>
      </div>
      <img src={src} alt="image title"  className="w-80 h-96  object-cover mt-10	"/>
    </motion.div>
  );
      
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>ECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
        Cherished memories captured in moments of joy, adventure, and togetherness. Each picture tells a story of our journey and the beautiful experiences we've shared.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold mt-10"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="blog-App" src={img1} about ="The Blog Web App is a full-stack MERN (MongoDB, Express, React, Node.js) project that enables users to create, read, update, and delete blog posts. It features user authentication, a rich text editor, comment sections, and responsive design. The app ensures smooth performance with RESTful APIs and secure authentication using JWT." link="https://github.com/saurabh-pandey2730/blog-webApp"/>
          <Project title="StoffCare "  src={img2} about="Stoffcare is a MERN-based Laundry Management System that streamlines order handling, tracking, and payments. It offers user authentication, order scheduling, real-time status updates, and admin controls. With a responsive UI, it enhances efficiency for both customers and laundry service providers, ensuring a seamless and hassle-free laundry experience." link="https://github.com/saurabh-pandey2730/Stoffcare.com" />

          {/* ROW 2 */}
          <Project title="Book-Store" src={img3} about="Book-Store is a Next.js-based online bookstore that enables users to browse, search, and purchase books effortlessly. It features dynamic product listings, a shopping cart, secure authentication, and seamless checkout. Optimized for performance and SEO, it offers a smooth user experience, making book discovery and purchasing fast and convenient." link="https://github.com/saurabh-pandey2730/store.nextjs" />
          <Project title="comfy-store" src={img4} about="Comfy-Store is a React-based e-commerce platform for selling home furniture and decor. It features a modern UI, product filtering, a shopping cart, secure checkout, and user authentication. With a responsive design and smooth navigation, it provides a seamless shopping experience, making furniture browsing and purchasing easy and enjoyable."  link="https://comfy-store-seven-zeta.vercel.app/"/>
          <Project title="MCPS - Noida" src={img5} about="MCPS College Noida is a React-based educational portal designed to provide information about courses, faculty, admissions, and campus life. It features a user-friendly interface, student login, event updates, and a responsive design. Optimized for performance, it ensures easy access to academic resources and enhances the student experience." link="https://mcps.vercel.app/" />

          {/* ROW 3 */}
          <Project title="Shree Computer Shop" src={img6} about="Shree Computer Shop is a Django-based e-commerce platform for selling computers, accessories, and peripherals. It includes user authentication, product management, a shopping cart, secure checkout, and order tracking. With a responsive and efficient design, it offers a seamless shopping experience for tech enthusiasts and customers." link="https://shree-computer-shop.vercel.app/" />
          <Project title="my-site" src={img7} about="My-Site is a full-stack Python Django-based web platform designed for personal or business use. It features user authentication, dynamic content management, a responsive UI, and database integration. With secure backend functionality and a seamless frontend experience, it ensures efficient content delivery, making it ideal for blogs, portfolios, or business websites." link="https://github.com/saurabh-pandey2730/my_site-" />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold mt-10"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
