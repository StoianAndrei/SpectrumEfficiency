export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Spectrum Efficiency';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Efficiency unleashed through meaningful intelligence';
 /* const footerText = process.env.BLOG_FOOTER_TEXT
 /*   ? decodeURI(process.env.BLOG_FOOTER_TEXT)
 /*   : document.write('<a href="'+https://stoianandreimircea.zohobookings.com/#/customer/111+'">'+'Make a booking'+'</a>');*/
const footerText = <a href="https://stoianandreimircea.zohobookings.com/#/customer/111">Make a booking</a>

  return {
    name,
    blogTitle,
    footerText,
  };
};
