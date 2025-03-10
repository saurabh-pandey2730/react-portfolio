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

const Project = ({ title , src, about}) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
        {about}

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
          <Project title="Finaly .... Its ......" src={img1} about =" Every moment matters.
        Life is made of small moments like this
        Wherever we are together, that is home"/>
          <Project title="31 July "  src={img2} about="I hope your day is as amazing and special as you are. " />

          {/* ROW 2 */}
          <Project title="My Love Aarush" src={img3} about="It's been wonderful getting to know you, and I feel lucky to have you in my life." />
          <Project title="random clicked" src={img4} about=" Wishing you all the happiness, laughter, and love in the world today and always" />
          <Project title="Eyes..." src={img5} about=" Let's make some great memories together this year!" />

          {/* ROW 3 */}
          <Project title="May be vitamin D 😊" src={img6} about="Be a girl with a mind , a woman with attitude, and a lady with class." />
          <Project title="And The Last One" src={img7} about="Smile big, laugh often Being the girl who decided to go for it." />
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
