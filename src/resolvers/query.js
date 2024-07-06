const Query = {
    me: (parent, args, context) => {
      if (!context.user) throw new Error('Not authenticated');
      return context.user;
    },
  };
  
  module.exports = Query;
  