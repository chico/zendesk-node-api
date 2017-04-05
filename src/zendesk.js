function Zendesk(config){
  config.authorization = 'Basic ' + new Buffer(config.email + '/token:' + config.token).toString('base64');

  if (config.oauth) {
    config.authorization = 'Bearer ' + config.token;
  }
  return {
    tickets: require('./accessor.js')(config, 'ticket', 'tickets'),
    ticketFields: require('./accessor.js')(config, 'ticket_field', 'ticket_fields'),

    users: require('./accessor.js')(config, 'user', 'users'),
    userFields: require('./accessor.js')(config, 'user_field', 'user_fields'),

    groups: require('./accessor.js')(config, 'group', 'groups'),
    groupMemberships: require('./accessor.js')(config, 'group_membership', 'group_memberships'),

    macros: require('./accessor.js')(config, 'macro', 'macros'),
    search: require('./accessor.js')(config, 'search', 'search')
  };
}

module.exports = Zendesk
