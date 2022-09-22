import {
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
  WhatsAppOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import "./footer.scss";

const Footer = () => {
  return (
    <div className='footer_container'>
      <div className='left_footer'>
        <h4 className='title_footer'>About NK.</h4>
        <div className='desc_footer'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
          impedit pariatur porro perferendis temporibus culpa rerum, tempore
          odit tempora libero commodi quam fuga, dignissimos facere laborum
          quisquam debitis sequi. Odit.
        </div>
        <div className='social_group'>
          <div className='circle'>
            <a
              href='http://facebook.com'
              target='_blank'
              rel='noreferrer noopener'
            >
              <FacebookOutlined className='icon_social' />
            </a>
          </div>
          <div className='circle'>
            <a
              href='http://instagram.com'
              target='_blank'
              rel='noreferrer noopener'
            >
              <InstagramOutlined className='icon_social' />
            </a>
          </div>
          <div className='circle'>
            <a
              href='http://youtube.com'
              target='_blank'
              rel='noreferrer noopener'
            >
              <YoutubeOutlined className='icon_social' />
            </a>
          </div>
        </div>
      </div>
      <div className='center_footer'>
        <h3 className='title_footer'>Infomation</h3>
        <ul className='list_info'>
          <li>
            <a href='#'>About Us</a>
          </li>
          <li>
            <a>Delivery Information</a>
          </li>
          <li>
            <a>Look Book</a>
          </li>
          <li>
            {" "}
            <a>Terms and Conditions </a>
          </li>
          <li>
            {" "}
            <a>Helps and FAQs </a>
          </li>
          <li>
            {" "}
            <a>Shop By Brands </a>
          </li>
          <li>
            {" "}
            <a>Contact Us </a>
          </li>
        </ul>
      </div>
      <div className='right_footer'>
        <h3 className='title_footer'>Contact</h3>
        <div className='right_wrapper'>
          <EnvironmentOutlined className='icon_right' />
          <h4 style={{ padding: 0, margin: 0, textAlign: "left" }}>
            9087S Divamus Faucibus Str., City name, CA 90896, United States.
          </h4>
        </div>
        <div className='right_wrapper'>
          <div>
            <WhatsAppOutlined className='icon_right' />
          </div>
          <div>Call: (+84) 90 12345</div>
        </div>
        <div className='right_wrapper'>
          <div>
            <MailOutlined className='icon_right' />
          </div>
          <div>Exam@gmail.com </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
