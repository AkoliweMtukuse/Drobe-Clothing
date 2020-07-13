import { Menu } from "antd";
import React from "react";
import "./Navbar.css";
import {
  ShopOutlined,
  ManOutlined,
  WomanOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import Logo from "./logo.png";

import { Input } from "antd";

const { SubMenu } = Menu;

const { Search } = Input;

class App extends React.Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <div>
        <header>
          <img src={Logo} alt="Logo" />
        </header>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          id="Navbar"
        >
          <Menu.Item key="home" icon={<ShopOutlined />} id="NavOptions">
            Home
          </Menu.Item>
          <SubMenu icon={<ManOutlined />} title="Men" id="NavOptions">
            <Menu.ItemGroup title="Styles:" id="NavDropdown1">
              <Menu.Item key="setting:1">Casual Wear</Menu.Item>
              <Menu.Item key="setting:2">Classic Wear</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Other:" id="NavDropdown2">
              <Menu.Item key="setting:3">Boheimian Wear</Menu.Item>
              <Menu.Item key="setting:4">Street Wear</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu icon={<WomanOutlined />} title="Women" id="NavOptions">
            <Menu.ItemGroup title="Styles" id="NavDropdown1">
              <Menu.Item key="setting:1">Casual Wear</Menu.Item>
              <Menu.Item key="setting:2">Classic Wear</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Other:" id="NavDropdown2">
              <Menu.Item key="setting:3">Boheimian Wear</Menu.Item>
              <Menu.Item key="setting:4">Street Wear</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu icon={<TeamOutlined />} title="Kids" id="NavOptions">
            <Menu.ItemGroup title="Boys Styles:" id="NavDropdown1">
              <Menu.Item key="setting:1">Casual Wear</Menu.Item>
              <Menu.Item key="setting:2">Street Wear</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Girls Styles:" id="NavDropdown2">
              <Menu.Item key="setting:3">Normal Wear</Menu.Item>
              <Menu.Item key="setting:4">Street Wear</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>

        <Search
          placeholder="input search text"
          onSearch={(value) => console.log(value)}
          enterButton
        />
      </div>
    );
  }
}
export default App;
