import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import "./styles.scss";
import { dataItems } from "../data";

const Slider = () => {
  const [sliderItems, setSliderItems] = useState(dataItems);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIdx = sliderItems.length - 1;

    if (index < 0) {
      setIndex(lastIdx);
    }

    if (index > lastIdx) {
      setIndex(0);
    }
  }, [index, sliderItems]);

  useEffect(() => {
    let cur = setInterval(() => {
      setIndex(index + 1);
    }, 3000);

    return () => clearInterval(cur);
  }, [index]);
  return (
    <div className='slider_container'>
      <div className='wrapper'>
        {sliderItems.map((item, slideIdx) => {
          let position = "next_slider";
          if (slideIdx === index) {
            position = "active_slider";
          }

          if (
            slideIdx === index - 1 ||
            (index === 0 && slideIdx === sliderItems.length - 1)
          ) {
            position = "last_slider";
          }

          return (
            <article
              key={item.id}
              className={"slider " + position}
              style={{ backgroundColor: item.bg }}
            >
              <div className='img_container'>
                <img src={item.img} alt='anh' className='image' />
              </div>
              <div className='info_container'>
                <h1 className='title'>{item.title}</h1>
                <div className='description'>{item.desc}</div>
                <button className='btn_slider'>SHOW NOW</button>
              </div>
            </article>
          );
        })}
      </div>
      <div className='arrow p_left' onClick={() => setIndex(index - 1)}>
        <CaretLeftOutlined />
      </div>
      <div className='arrow p_right' onClick={() => setIndex(index + 1)}>
        <CaretRightOutlined />
      </div>
      <div className='dot_circle'>
        {sliderItems.map((item, sliderIdx) => {
          return (
            <div
              key={sliderIdx}
              className={"circle "}
              style={{ opacity: sliderIdx === index ? 1 : 0.5 }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
