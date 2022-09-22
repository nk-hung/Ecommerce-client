import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button, Input, Space } from "antd";
import "./styles.scss";

const { Search } = Input;

const Navbar = () => {
  const onSearch = () => {};

  return (
    <div className='nav_container'>
      <div className='wrapper'>
        <div className='left'>
          <span className='language'>EN</span>
          <Space>
            <Search placeholder='Searching...' onSearch={onSearch} />
          </Space>
        </div>
        <div className='center'>
          <h1 className='logo'>NK.</h1>
        </div>
        <div className='right'>
          <div className='menu-item'>
            <button className='btn_register'>REGISTER</button>
          </div>
          <div className='menu-item'>
            <button className='btn_login'>LOGIN</button>
          </div>
          <div className='menu-item'>
            <Badge count={5}>
              <ShoppingCartOutlined style={{ fontSize: 20 }} />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
