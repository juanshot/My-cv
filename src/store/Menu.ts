import routes from '../routes';

export interface MenuItem {
  name: string;
  templateId: string;
  iconClasses: Array<string>;
  active: boolean;
}

export default () => {
  let menuItems: Array<MenuItem> = routes.map((route) => ({
    ...route,
    active: false,
  }));
  const getMenuItems = () => menuItems;
  const setMenuItems = (newMenuItems: Array<MenuItem>) => {
    menuItems = [...newMenuItems];
  };
  return {
    getMenuItems,
    setMenuItems,
  };
};
