import { SELECT_LANGUAGE } from './../action/language';
import languageMap from './../../language/index';

const zhcnLanguageMap = languageMap['zh-cn'];
const defaultData = {
  lang: 'zh-cn',
  textMap: zhcnLanguageMap
};

function language (state = defaultData, action) {
  switch (action.type) {
    case SELECT_LANGUAGE:
      const { lang = 'zh-cn' } = action;
      return {
        ...state,
        ...{
          lang: lang,
          textMap: languageMap[lang]
        }
      };
    default:
      return state;
  }
};

export default language;
