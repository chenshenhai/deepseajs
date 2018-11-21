ThemePage({
  data(app) {
    console.log('app ===== ', app);
    return {
      title: 'nonon page',
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
