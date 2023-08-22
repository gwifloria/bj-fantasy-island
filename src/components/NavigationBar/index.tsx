import { useThemeToken } from "@/hooks/useThemeToken";
import { routesList } from "@/router";
import { Menu, MenuProps } from "antd";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import './index.scss';

export const NavigationBar = () => {
  const navigate = useNavigate();
  const navigationItems = useMemo(() => routesList.map((item) => {
    return {
      ...item,
      label: item.id,
      key: item.id,
    }
  }), [])

  const handleMenuItemClick: MenuProps['onClick'] = (e) => {
    const { key } = e
    navigate(`/${key}`)
  }

  

  return (
    <Menu
      className="navigation-bar__container"
      onClick={handleMenuItemClick}
      mode="horizontal"
      defaultSelectedKeys={['1']}
      items={navigationItems}
    />
  )
}
