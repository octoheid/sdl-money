/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'SDLMoney.Application',

    name: 'SDLMoney',
    stores:[
        'Expenses',
        'ExpenseCategory',
        'Month',
        'Year'
    ],
    requires: [
        // This will automatically load all classes in the SDLMoney namespace
        // so that application classes do not need to require each other.
        'SDLMoney.*'
    ],

    // The name of the initial view to create.
    mainView: 'SDLMoney.view.main.Main'
});
