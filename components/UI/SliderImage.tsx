import styles from "../../styles/components/navbar.module.scss";

const SliderImage = () => {
  const { image_container } = styles;
  return (
    <div className={image_container}>
      <img src="/image/Abaya1.jpeg" alt="image" />
    </div>
  );
};

export default SliderImage;
