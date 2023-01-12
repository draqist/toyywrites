import type { NextPage } from "next";
import BlogCard from "../components/UI/BlogCard";
import Navbar from "../components/UI/Navbar";
import styles from "../styles/pages/body.module.scss";
const Home: NextPage = () => {
  const {
    carousel_container,
    brand_tag,
    brand_tagline,
    brand_svg,
    brand_brief,
    brand_link,
    content_container,
    projects,
    image_container,
    body,
    project_tagline,
    project_slides,
    recent_blogs,
  } = styles;
  return (
    <div className={body}>
      <Navbar />
      <div className={carousel_container} />
      <div className={content_container}>
        <section className={brand_tag}>
          <div className={brand_tagline}>
            <div />
            <h1>FASHION WITH SAUCE </h1>
            <div />
          </div>
          <div className={brand_brief}>
            {" "}
            It all began 15 years ago in the tight crevices of Lagos, Nigeria. The will to make people express
            themselves with the confidence that their attires gave them. Putting smiles on faces and making people the
            talk of town with trendy and stylish designs from all cultural blends.
          </div>
        </section>
      </div>
      <section className={projects}>
        <div className={project_tagline}>
          <div />
          <h1> YOU IN MANY SHADES </h1>
          <div />
        </div>
        <div className={project_slides}>
        </div>
      </section>
      <div className={content_container}>
        <section className={brand_tag}>
          <div className={brand_tagline}>
            <div />
            <h1>Recent blog posts </h1>
            <div />
          </div>
          <div className={recent_blogs}>
            {" "}
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
