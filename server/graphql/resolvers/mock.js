module.exports = {
  Mutation: {
    createPost: async (_, args, ctx) => {
      const { input } = args;
      const { title, content } = input || {};
      return {
        id: 1,
        title: title || 'aaa',
        content: content || 'bbb',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      };
    },
    updatePost: async (_, args, ctx) => {
      const { input } = args;
      const { id, title, content } = input || {};
      return {
        id: id || 1,
        title: title || 'aaa',
        content: content || 'bbb',
        createdAt: new Date('2019-08-20T10:00:00'),
        updatedAt: new Date(),
        deletedAt: null,
      };
    },
    deletePost: async (_, args, ctx) => {
      const { input } = args;
      const { id } = input || {};
      return {
        id: id || 1,
        title: 'aaa',
        content: 'bbb',
        createdAt: new Date('2019-08-20T10:00:00'),
        updatedAt: new Date(),
        deletedAt: new Date(),
      };
    }
  },
  Query: {
    hello: () => 'Hello World!',
    getPost: (_, args, ctx) => {
      const { id } = args;
      return {
        id,
        title: 'aaa',
        content: 'bbb',
        createdAt: new Date('2019-08-20T10:00:00'),
        updatedAt: new Date('2019-08-20T10:00:00'),
        deletedAt: null,
      };
    },
    getPosts: (_, args, ctx) => {
      return [
        {
          id: 1,
          title: 'aaa',
          content: 'bbb',
          createdAt: new Date('2019-08-20T10:00:00'),
          updatedAt: new Date('2019-08-20T10:00:00'),
          deletedAt: null,
        },
        {
          id: 2,
          title: 'fff',
          content: 'ggg',
          createdAt: new Date('2019-08-20T10:30:00'),
          updatedAt: new Date('2019-08-20T10:30:00'),
          deletedAt: null,
        },
        {
          id: 3,
          title: 'kkk',
          content: 'lll',
          createdAt: new Date('2019-08-20T11:00:00'),
          updatedAt: new Date('2019-08-20T11:00:00'),
          deletedAt: null,
        },
      ];
    },
  },
  Post: {
    postedBy: async (_, args, ctx) => {
      return {
        id: 1,
        account: 'hoge',
        nickname: 'ほげ',
      }
    },
    comments: async (_, args, ctx) => {
      return [
        {
          id: 1,
          content: 'ccc',
        },
        {
          id: 2,
          content: 'ddd',
        },
        {
          id: 3,
          content: 'eee',
        },
      ];
    },
  },
  Comment: {
    postedBy: async (_, args, ctx) => {
      return {
        id: 2,
        account: 'fuga',
        nickname: 'ふが',
      }
    },
  }
};
