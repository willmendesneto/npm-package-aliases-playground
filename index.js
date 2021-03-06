const { setConfigurationObject, isOn } = require('feature-toggle-service');

const toggles = {
  enableLogs: true,
  enableFinalMessageInScript: true,
};

setConfigurationObject(toggles);

console.log(`
β¨ Feature Toggles β¨

> Here's a list of the available Feature Toggles and their values

`);

Object.keys(toggles).forEach((key) => {
  console.log(`- Key '${key}' is ${isOn(key) ? 'β' : 'β'}`);
});

if (isOn('enableFinalMessageInScript')) {
  console.log(`

π Thatβs all folks! Cya π
`);
}
