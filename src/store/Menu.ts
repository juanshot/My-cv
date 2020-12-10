import routes from '../routes';

export interface MenuItem {
  active: boolean;
  action?: () => void;
  iconClasses: Array<string>;
  name: string;
  templateId: string;
  type?: string;
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
