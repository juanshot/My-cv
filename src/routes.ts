export default [
  {
    name: 'detail',
    templateId: 'detail-card',
    iconClasses: ['far', 'fa-user'],
  },
  {
    name: 'contacts',
    templateId: 'contacts',
    iconClasses: ['far', 'fa-envelope'],
  },
  {
    name: 'portfolio',
    templateId: 'portfolio',
    iconClasses: ['fas', 'fa-laptop-code'],
  },
  {
    name: 'studies',
    templateId: 'studies',
    iconClasses: ['fas', 'fa-university'],
  },
  {
    name: 'download',
    type: 'link',
    action: async () => {
      fetch('https://cv-jmg.s3.us-east-2.amazonaws.com/JuanMiguelGarciaFE.PDF')
        .then((response) => response.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(blob);
          let a = document.createElement('a') as HTMLAnchorElement;
          a.href = url;
          a.download = 'JuanMGarcia.pdf';
          document.body.appendChild(a);
          a.click();
          a.remove();
        });
    },
    templateId: 'download',
    iconClasses: ['fa', 'fa-download'],
  },
];
