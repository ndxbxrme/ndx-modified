'use strict'

module.exports = (ndx) ->
  ndx.database.on 'preInsert', (args) ->
    if args.obj
      args.obj[process.env.INSERT_FIELD or ndx.settings.INSERT_FIELD or process.env.MODIFIED_FIELD or ndx.settings.MODIFIED_FIELD or 'modifiedAt'] = new Date().valueOf()
      args.obj[process.env.INSERT_USER_FIELD or ndx.settings.INSERT_USER_FIELD or process.env.MODIFIED_USER_FIELD or ndx.settings.MODIFIED_USER_FIELD or 'modifiedBy'] = ndx.user[ndx.settings.AUTO_ID]
      args.obj[process.env.MODIFIED_FIELD or ndx.settings.MODIFIED_FIELD or 'modifiedAt'] = new Date().valueOf()
      args.obj[process.env.MODIFIED_USER_FIELD or ndx.settings.MODIFIED_USER_FIELD or 'modifiedBy'] = ndx.user[ndx.settings.AUTO_ID]
  ndx.database.on 'preUpdate', (args) ->
    if args.obj
      args.obj[process.env.INSERT_FIELD or ndx.settings.INSERT_FIELD or process.env.MODIFIED_FIELD or ndx.settings.MODIFIED_FIELD or 'modifiedAt'] = new Date().valueOf()
      args.obj[process.env.INSERT_USER_FIELD or ndx.settings.INSERT_USER_FIELD or process.env.MODIFIED_USER_FIELD or ndx.settings.MODIFIED_USER_FIELD or 'modifiedBy'] = ndx.user[ndx.settings.AUTO_ID]
      args.obj[process.env.MODIFIED_FIELD or ndx.settings.MODIFIED_FIELD or 'modifiedAt'] = new Date().valueOf()
      args.obj[process.env.MODIFIED_USER_FIELD or ndx.settings.MODIFIED_USER_FIELD or 'modifiedBy'] = ndx.user[ndx.settings.AUTO_ID]
      