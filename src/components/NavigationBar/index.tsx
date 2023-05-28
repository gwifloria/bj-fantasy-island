import { routesList } from "@/router"
import { Menu } from "antd"
import { uniqueId } from "lodash"
import { useMemo } from "react"

export const NavigationBar = () => {
  const navigationItems = useMemo(() => routesList.map((item) => {
    return {
      label: item.id,
      key: uniqueId(item.id)
    }
  }), [])

  const handleMenuItemClick = () => {
    console.log(11)
  }

  return (
    <Menu
      onClick={handleMenuItemClick}
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['1']}
      items={navigationItems}
    />
  )
}
