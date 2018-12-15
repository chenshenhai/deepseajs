ThemePage ({
  data (app) {
    return {
      title: app.getName(),
      text: app.getName(),
      config: {
        fileStoragePath: app.getFileStoragePath()
      }
    };
  }
});
