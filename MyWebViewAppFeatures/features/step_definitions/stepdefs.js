const assert = require('assert');
const { Given, When, Then, AfterAll, BeforeAll} = require('cucumber');

const webdriverio = require('webdriverio');

const androidCaps = {
    platformName: "Android",
    platformVersion: "8.1.0",
    automationName: 'UiAutomator2',
    deviceName: "Android Emulator",
    app: require('path').resolve( "../MyWebViewApp/app/build/outputs/apk/debug/app-debug.apk")
};

const serverConfig = {
    host: process.env.APPIUM_HOST || 'localhost',
    port: process.env.APPIUM_PORT || 4723,
    logLevel: 'info'
};

const androidOptions = Object.assign({
    capabilities: androidCaps
},
serverConfig
);


BeforeAll({ timeout: 20000}, async () => {
    this.client = await webdriverio.remote(androidOptions);
});

AfterAll(async () => {
    const delete_session = await this.client.deleteSession();
    this.client = null;
});
/**
 * Interesting methods
 * let xpath = '....';
 * let element = await this.client.$(xpath)
 * await element.click()
 * await element.getText()
 */
/**
 * Setting timeout in steps (defaults to 5000ms)
 * When('blablabla', {timeout: 25000}, async () => {
 *   //...
 * });
 */