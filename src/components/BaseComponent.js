export default (templateId, parentId, insertAtStart, newElementId) => {
  const attach = () => {
    parentElement.insertAdjacentElement(
      insertAtStart ? 'afterbegin' : 'beforeend',
      componentElement
    );
  };
  const templateElement = document.getElementById(templateId);
  const parentElement = document.getElementById(parentId);
  const importedContent = document.importNode(templateElement.content, true);
  const componentElement = importedContent.firstElementChild;
  if (newElementId) {
    componentElement.id = newElementId;
  }
  return {
    componentElement,
    parentElement,
    insertAtStart,
    attach,
  };
};
//# sourceMappingURL=BaseComponent.js.map
