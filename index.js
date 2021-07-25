const { setConfigurationObject, isOn } = require('feature-toggle-service');

const toggles = {
  enableLogs: true,
  enableFinalMessageInScript: true,
};

setConfigurationObject(toggles);

console.log(`
✨ Feature Toggles ✨

> Here's a list of the available Feature Toggles and their values

`);

Object.keys(toggles).forEach((key) => {
  console.log(`- Key '${key}' is ${isOn(key) ? '✅' : '❌'}`);
});

if (isOn('enableFinalMessageInScript')) {
  console.log(`

👋 That’s all folks! Cya 👋
`);
}
