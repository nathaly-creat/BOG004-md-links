// console.log('Hola')


const mocks = {};
const dataFiles = [
    'C:/Users/LABORATORIA/Documents/BOG004-md-links/means',
    'C:/Users/LABORATORIA/Documents/BOG004-md-links/README.md',
    'C:/Users/LABORATORIA/Documents/BOG004-md-links/means/testThree.md',
    'C:/Users/LABORATORIA/Documents/BOG004-md-links/means/sourcesAdd/testOne.md',
];

const linksData = [
    {
        file: 'C:/Users/LABORATORIA/Documents/BOG004-md-links/test/DocT/Test.md',
        href: 'https://www.facebook.com',
        title: 'Facebook',
    },
    {
        file: 'C:/Users/LABORATORIA/Documents/BOG004-md-links/test/DocT/Test.md',
        href: 'https://www.youtube.com',
        text: 'Youtube',
    },
    {
        file: 'C:/Users/LABORATORIA/Documents/BOG004-md-links/test/DocT/Test.md',
        href: 'https://www.google.com',
        text: 'Google',
    },
    {
        file: 'C:/Users/LABORATORIA/Documents/BOG004-md-links/test/DocT/Test.md',
        href: 'https://www.linkedin.com',
        text: 'Linkedin',
    },
    {
        file: 'C:/Users/LABORATORIA/Documents/BOG004-md-links/test/DocT/Test.md',
        href: 'https://developer.mozilla.org/es/eb/JavaScript/Reference/Global_Objects/Array/',
        text: 'LinkRoto2',
    },
    {
        file: 'C:/Users/LABORATORIA/Documents/BOG004-md-links/test/DocT/Test.md',
        href: 'https://www.google.com',
        text: 'Google',
    },

];


// Validate true.
const statusData = [
    {
      text: 'Facebook',
      href: 'https://www.facebook.com',
      file: 'C:\\Users\\LABORATORIA\\Documents\\BOG004-md-links\\test\\DocT\\Test.md',
      status: 200,
      str: 'OK'
    },
    {
      text: 'YouTube',
      href: 'https://www.youtube.com',
      file: 'C:\\Users\\LABORATORIA\\Documents\\BOG004-md-links\\test\\DocT\\Test.md',
      status: 200,
      str: 'OK'
    },
    {
      text: 'Google',
      href: 'https://www.google.com/',
      file: 'C:\\Users\\LABORATORIA\\Documents\\BOG004-md-links\\test\\DocT\\Test.md',
      status: 200,
      str: 'OK'
    },
    {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/',
      file: 'C:\\Users\\LABORATORIA\\Documents\\BOG004-md-links\\test\\DocT\\Test.md',
      status: 200,
      str: 'OK'
    },
    {
      text: 'LinkRoto2',
      href: 'https://developer.mozilla.org/es/eb/JavaScript/Reference/Global_Objects/Array/',
      file: 'C:\\Users\\LABORATORIA\\Documents\\BOG004-md-links\\test\\DocT\\Test.md',
      status: 404,
      str: 'Fail'
    },
    {
      text: 'Google',
      href: 'https://www.google.com/',
      file: 'C:\\Users\\LABORATORIA\\Documents\\BOG004-md-links\\test\\DocT\\Test.md',
      status: 200,
      str: 'OK'
    }
  ]



// validate False.
const statusDataFalse = [
    {
      text: 'Facebook',
      href: 'https://www.facebook.com',
      file: 'C:\\Users\\LABORATORIA\\Documents\\BOG004-md-links\\test\\DocT\\Test.md'
    },
    {
      text: 'YouTube',
      href: 'https://www.youtube.com',
      file: 'C:\\Users\\LABORATORIA\\Documents\\BOG004-md-links\\test\\DocT\\Test.md'
    },
    {
      text: 'Google',
      href: 'https://www.google.com/',
      file: 'C:\\Users\\LABORATORIA\\Documents\\BOG004-md-links\\test\\DocT\\Test.md'
    },
    {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/',
      file: 'C:\\Users\\LABORATORIA\\Documents\\BOG004-md-links\\test\\DocT\\Test.md'
    },
    {
      text: 'LinkRoto2',
      href: 'https://developer.mozilla.org/es/eb/JavaScript/Reference/Global_Objects/Array/',
      file: 'C:\\Users\\LABORATORIA\\Documents\\BOG004-md-links\\test\\DocT\\Test.md'
    },
    {
      text: 'Google',
      href: 'https://www.google.com/',
      file: 'C:\\Users\\LABORATORIA\\Documents\\BOG004-md-links\\test\\DocT\\Test.md'
    }
  ]

mocks.dataFiles = dataFiles;
mocks.linksData = linksData;
mocks.statusData = statusData;
mocks.statusDataFalse = statusDataFalse;

module.exports = mocks;
