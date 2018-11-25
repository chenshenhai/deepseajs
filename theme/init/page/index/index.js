ThemePage({
  data(app) {
    const info = app.getInfo();
    return {
      title: app.getName(),
      text: app.getName(),
      isShowDataList: true,
      datalist: info.datalist,
      datajson: {
        'key1': 'val1',
        'key2': 'val2'
      }
    }
  }
});
