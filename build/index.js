(function() {
  'use strict';
  module.exports = function(ndx) {
    ndx.database.on('preInsert', function(args, cb) {
      if (args.obj) {
        args.obj[process.env.INSERT_FIELD || ndx.settings.INSERT_FIELD || process.env.MODIFIED_FIELD || ndx.settings.MODIFIED_FIELD || 'modifiedAt'] = new Date().valueOf();
        args.obj[process.env.MODIFIED_FIELD || ndx.settings.MODIFIED_FIELD || 'modifiedAt'] = new Date().valueOf();
        if (ndx.user) {
          args.obj[process.env.INSERT_USER_FIELD || ndx.settings.INSERT_USER_FIELD || process.env.MODIFIED_USER_FIELD || ndx.settings.MODIFIED_USER_FIELD || 'modifiedBy'] = ndx.user[ndx.settings.AUTO_ID];
          args.obj[process.env.MODIFIED_USER_FIELD || ndx.settings.MODIFIED_USER_FIELD || 'modifiedBy'] = ndx.user[ndx.settings.AUTO_ID];
        }
      }
      return cb();
    });
    return ndx.database.on('preUpdate', function(args, cb) {
      if (args.obj) {
        args.obj[process.env.INSERT_FIELD || ndx.settings.INSERT_FIELD || process.env.MODIFIED_FIELD || ndx.settings.MODIFIED_FIELD || 'modifiedAt'] = new Date().valueOf();
        args.obj[process.env.MODIFIED_FIELD || ndx.settings.MODIFIED_FIELD || 'modifiedAt'] = new Date().valueOf();
        if (ndx.user) {
          args.obj[process.env.INSERT_USER_FIELD || ndx.settings.INSERT_USER_FIELD || process.env.MODIFIED_USER_FIELD || ndx.settings.MODIFIED_USER_FIELD || 'modifiedBy'] = ndx.user[ndx.settings.AUTO_ID];
          args.obj[process.env.MODIFIED_USER_FIELD || ndx.settings.MODIFIED_USER_FIELD || 'modifiedBy'] = ndx.user[ndx.settings.AUTO_ID];
        }
      }
      return cb();
    });
  };

}).call(this);

//# sourceMappingURL=index.js.map
