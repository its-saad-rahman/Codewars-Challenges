
function countLanguages(list) {
    const obj={};
    list.map(v=>obj[v.language]=(obj[v.language]||0)+1)
    return obj

  
  }

 