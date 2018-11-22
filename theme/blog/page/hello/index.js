ThemePage({
  data(app) {
    const data = app.getData();
    console.log('xxxx = ', data)
    return {
      title: data.title,
      text: 'this is hello page!',
      isShowDataList: true,
      datalist: [
        '001', '002', '003', '004'
      ],
      datajson: {
        'key1': 'val1',
        'key2': 'val2'
      }
    }
  }
});
