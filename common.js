Wechat = {
    serviceName: (Meteor.settings && Meteor.settings.public && Meteor.settings.public.wechatServiceName) || 'wechat'
};

Accounts.oauth.registerService(Wechat.serviceName);