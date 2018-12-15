function getPageData () {
  let pageData = {};
  const dataAreaNode = document.getElementById('HiddenDataArea');
  if (dataAreaNode) {
    const inputs = dataAreaNode.querySelectorAll('input');
    if (inputs && inputs.length > 0) {
      try {
        inputs.forEach(function (ipt) {
          const name = ipt.getAttribute('name');
          const val = ipt.getAttribute('value');
          if (typeof name === 'string' && name.length > 0 && typeof val === 'string' && val.length > 0) {
            pageData[name] = val;
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
  return pageData;
}

export default {
  getAll () {
    return getPageData();
  }
};
