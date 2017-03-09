(function() {
  'use strict';
  module.exports = function(ndx) {
    ndx.database.on('preInsert', function(args) {
      if (args.obj) {
        args.obj[process.env.INSERT_FIELD || args.settings.INSERT_FIELD || process.env.MODIFIED_FIELD || args.settings.MODIFIED_FIELD || 'modifiedAt'] = new Date().valueOf();
        args.obj[process.env.INSERT_USER_FIELD || args.settings.INSERT_USER_FIELD || process.env.MODIFIED_USER_FIELD || args.settings.MODIFIED_USER_FIELD || 'modifiedBy'] = ndx.user[ndx.settings.AUTO_ID];
        args.obj[process.env.MODIFIED_FIELD || args.settings.MODIFIED_FIELD || 'modifiedAt'] = new Date().valueOf();
        return args.obj[process.env.MODIFIED_USER_FIELD || args.settings.MODIFIED_USER_FIELD || 'modifiedBy'] = ndx.user[ndx.settings.AUTO_ID];
      }
    });
    return ndx.database.on('preUpdate', function(args) {
      if (args.obj) {
        args.obj[process.env.INSERT_FIELD || args.settings.INSERT_FIELD || process.env.MODIFIED_FIELD || args.settings.MODIFIED_FIELD || 'modifiedAt'] = new Date().valueOf();
        args.obj[process.env.INSERT_USER_FIELD || args.settings.INSERT_USER_FIELD || process.env.MODIFIED_USER_FIELD || args.settings.MODIFIED_USER_FIELD || 'modifiedBy'] = ndx.user[ndx.settings.AUTO_ID];
        args.obj[process.env.MODIFIED_FIELD || args.settings.MODIFIED_FIELD || 'modifiedAt'] = new Date().valueOf();
        return args.obj[process.env.MODIFIED_USER_FIELD || args.settings.MODIFIED_USER_FIELD || 'modifiedBy'] = ndx.user[ndx.settings.AUTO_ID];
      }
    });
  };

}).call(this);

//# sourceMappingURL=index.js.map
