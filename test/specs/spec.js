'use strict'

function signIn(login, password) {
    $('#sign_in').click();
    $('#username').setValue(login);
    $('#password').setValue(password);
    browser.hideDeviceKeyboard();
    $('#sign_in').click();
}

describe('Proto mail tests', () => {

    beforeAll(() => {
        browser.timeouts('implicit', 12000);
    });

    it('should sign in correctly', () => {
        signIn('jstalab', 'jstalabpas');
        expect($('#engagement_title').getText()).toEqual('Welcome to ProtonMail!');
    });

});
