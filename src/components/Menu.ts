import Component from './BaseComponent';
import MenuStore from '../store/Menu';
export default (
  renderFunc: (selectedElement: string) => void,
  selectedItem: string
) => {
  // Methods
  const createMenus = (parentItem: HTMLElement) => {
    const menus = MenuStore();
    menus.getMenuItems().forEach((menu) => {
      const menuElement = document.createElement('div');
      menuElement.classList.add('menu-item');
      if (menu.name === selectedItem) {
        menuElement.classList.add('active');
      }
      const iconElement = document.createElement('i');
      iconElement.setAttribute('name', menu.name);
      menu.iconClasses.forEach((className) => {
        iconElement.classList.add(className);
      });
      menuElement.appendChild(iconElement);
      menuElement.addEventListener('click', handleMenuClick);
      parentItem.appendChild(menuElement);
    });
  };
  const handleMenuClick = (event: Event) => {
    const elementItem = event.target as HTMLDivElement;
    const elementSelected = elementItem.getAttribute('name') as string;
    renderFunc(elementSelected);
  };

  // Rendering component
  const Menu = Component('menu', 'root', true, 'menu-bar');
  createMenus(Menu.componentElement);
  Menu.attach();
};
