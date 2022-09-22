import { SendOutlined } from "@ant-design/icons";
import { Input } from "antd";
import "./newsletter.scss";

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h1 className='title_nlt'>Newsletter</h1>
      <div className='desc_nlt'>Get timely updates your favorite products</div>
      <div className='input_group'>
        <Input placeholder='Email Address' size='large' />
        <button className='btn_nlt'>
          <SendOutlined className='btn_style' />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
