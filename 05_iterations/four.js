const myObject={
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby'
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
 
}

const programming = ["js", "rb", "py", "java"]

for (const key in programming) {
    console.log(programming[key]);
}

const map =new Map()
map.set('Np', "Nepal")
map.set('IN', "India")

for (const key in map) {
  console.log(key)
    
}


