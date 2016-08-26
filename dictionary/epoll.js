'use strict';

module.exports = {
  pkgConfig: {
    patches: {
      'epoll.js': [
        'require(\'bindings\')(\'epoll.node\')',
        'require(\'bindings\')({ bindings: \'epoll.node\', module_root: __dirname })'
      ]
    }
  }
};
