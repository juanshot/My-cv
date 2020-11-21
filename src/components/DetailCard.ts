import Component from './BaseComponent';
export default (currentTemplateId: string) => {
  const renderDetailInfo = () => {
    console.log('render....', currentTemplateId);
  };

  const DetailCard = Component('detail-card', 'root', true, 'detail__card');
  renderDetailInfo();
  DetailCard.attach();
};
