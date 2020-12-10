import Component from './BaseComponent';
import MenuStore from '../store/Menu';
import { MenuItem } from '../store/Menu';

export default (currentTemplateName: string) => {
  const menu = MenuStore();
  const menuItem: MenuItem = menu
    .getMenuItems()
    .find((item) => item.name === currentTemplateName) as MenuItem;

  const DetailCard = Component(
    menuItem.templateId,
    'root',
    true,
    'detail__card'
  );
  DetailCard.attach();
};
