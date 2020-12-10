export default <T extends HTMLElement, U extends HTMLElement>(
  templateId: string,
  parentId: string,
  insertAtStart: boolean,
  newElementId?: string
): {
  componentElement: U;
  parentElement: T;
  insertAtStart: boolean;
  attach: () => void;
} => {
  const attach = (): void => {
    parentElement.insertAdjacentElement(
      insertAtStart ? 'afterbegin' : 'beforeend',
      componentElement
    );
  };
  const templateElement: HTMLTemplateElement = document.getElementById(
    templateId
  ) as HTMLTemplateElement;
  const parentElement: T = document.getElementById(parentId) as T;
  const importedContent: DocumentFragment = document.importNode(
    templateElement.content,
    true
  );
  const componentElement = importedContent.firstElementChild as U;
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
