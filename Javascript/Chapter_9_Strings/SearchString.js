let url = "https://hmsweb-rauto.hms.hosp.us1.mdev.inforcloudsuite.com/web/base/logindisp?tenant=RAUTO_FOLI2";
console.log(url.includes('hmsweb'));
console.log(url.startsWith('https'));
console.log(url.endsWith('inforcloudsuite.com/web/base/logindisp?tenant=RAUTO_FOLI2'));
console.log(url.indexOf('hmsweb'));
console.log(url.slice(8, 15));
console.log(url.replace('hmsweb', 'example'));  
console.log(url.split('/'));
let splittedStr = url.split('/');
console.log(splittedStr[2]);
console.log(url.indexOf('RAUTO_FOLI2'));
console.log(url.lastIndexOf('h'));
console.log(url.indexOf('PAUTO_FOLI2'));
console.log(url.includes('PAUTO_FOLI2'));
console.log(url.search('RAUTO_FOLI2'));


let name = " Patil Nagarjuna ";
console.log(name.trim());
console.log(name.trimStart());
console.log(name.trimEnd());
console.log(name.trim().toUpperCase());
console.log(name.replace(/\s/g, ''));

// concatination
let firstName = "Patil";
let lastName = "Nagarjuna";
let fullName = firstName + " " + lastName;
console.log(fullName);
let fullName2 = `${firstName} ${lastName}`;
console.log(fullName2); 



