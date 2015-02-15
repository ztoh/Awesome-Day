'use strict';

/**
 * @ngdoc service
 * @name angularDemoApp.shortcutService
 * @description
 * # shortcutService
 * Service in the angularDemoApp.
 */
angular.module('angularDemoApp')
  .service('shortcutService', function (hotkeys) {
    var isItemOrderVisible = false;

    var combo = 'ctrl';
    hotkeys.add({
      combo: combo,
      action: 'keydown',
      description: 'Show item order',
      allowIn: ['INPUT'],
      callback: function() {
        isItemOrderVisible = true;
      }
    });

    hotkeys.add({
      combo: combo,
      action: 'keyup',
      description: 'Hide item order',
      allowIn: ['INPUT'],
      callback: function() {
        isItemOrderVisible = false;
      }
    });

    return {
      isItemOrderVisible: function() {
        return isItemOrderVisible;
      }
    };
  });