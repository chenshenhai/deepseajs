const vm = require('vm');

function compileToFunctionStr(tpl) {
  let tplCode = tpl;
  const regTpl = /\<directive\:([^\>]+)?\>|\<\/directive\:\>|\{\{([^\}\}]+)?\}\}/ig;
  const regDirectStart = /\<directive\:([^\>]+)?\>|\<\/directive\:\>/i;
  const regDirectEnd = /\<\/directive\:\>/i;
  const regDirectIf = /if\=\"([^\"]+)?\"/i;
  const regDirectForArray = /for-array=\"([^\"]+)?\"/i;
  const regDirectForArrayIndex = /for-array-index=\"([^\"]+)?\"/i;
  const regDirectForArrayItem = /for-array-item=\"([^\"]+)?\"/i;
  const regDirectForJSON = /for-json=\"([^\"]+)?\"/i;
  const regDirectForJSONKey = /for-json-key=\"([^\"]+)?\"/i;
  const regDirectForJSONVal = /for-json-value=\"([^\"]+)?\"/i;
  const regData = /\{\{([^\}\}]+)?\}\}/i;
  let funcCodeStr = '';
  let match;
  let matchEnd = '';
  let codeIndex = 0;
  funcCodeStr += '\n let _row=[];\n';

  const addFuncCode = function(params) {
    const {currentExec, currentMatch, restCode} = params;
    
    if (regData.test(currentExec) === true) {
      funcCodeStr += `\n _row.push(${regData.exec(currentExec)[1]});`;
    } else if (regDirectIf.test(currentExec) === true) {
      funcCodeStr += `\n if (${regDirectIf.exec(currentExec)[1]}) {`;
    } else if (regDirectForArray.test(currentExec) === true) {
      const forArrayName = regDirectForArray.exec(currentExec)[1];
      const forArrayIndexName = regDirectForArrayIndex.exec(currentExec)[1] || 'index';
      const forArrayIndexItem = regDirectForArrayItem.exec(currentExec)[1] || 'item';
      funcCodeStr += `
      \n for ( let ${forArrayIndexName}=0; ${forArrayIndexName}>${forArrayName}.length; ${forArrayIndexName}++ ) {
          const ${forArrayIndexItem} = ${forArrayName}[${forArrayIndexName}]; 
      `;
    } else if (regDirectForJSON.test(currentExec) === true) {
      const forJSONName = regDirectForJSON.exec(currentExec)[1];
      const forJSONKey = regDirectForJSONKey.exec(currentExec)[1] || 'key';
      const forJSONValue = regDirectForJSONVal.exec(currentExec)[1] || 'value';
      funcCodeStr += `
      \n for ( const ${forJSONKey} in ${forJSONName} ) {
          const ${forJSONValue} = ${forJSONName}[${forJSONKey}]; 
      `;
    } else if (regDirectEnd.test(currentExec) === true) {
      funcCodeStr += `\n }`;
    } else {
      funcCodeStr += `\n _row.push(\`${restCode}\`); `
    }
  }


  while( match = regTpl.exec(tplCode)) {
    const restCode = tplCode.slice(codeIndex, match.index);
    const currentExec = match[0];
    const currentMatch = match[1];
    addFuncCode({restCode});
    addFuncCode({currentExec, currentMatch, restCode});
    codeIndex = match.index + match[0].length;
  }
  addFuncCode({restCode: tplCode.substr(codeIndex, tplCode.length)});

  funcCodeStr += '\n return _row.join("");';
  // funcCodeStr += '\n }';
  funcCodeStr = funcCodeStr.replace(/[\r\t\n]/g, '')
  return funcCodeStr;
}

const template = {
  compile(tpl, data) {
    const funcStr = compileToFunctionStr(tpl);
    const func = new Function(funcStr.replace(/[\r\t\n]/g, '')).call([data])
    console.log(funcStr);
    return tpl;
  }
}

module.exports = template;