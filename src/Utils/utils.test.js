const { formatDates } = require('./utils');

describe('formatDates', () => {
  it('receives an empty array, returns an empty array', () => {
    const articles = [];
    expect(formatDates(articles)).toEqual([]);
  });
  it('works for a single item array', () => {
    const articles = [
      {
        article_id: 13,
        title:
          "What does Jose Mourinho's handwriting say about his personality?",

        created_at: '2018-04-16T19:29:32.774Z'
      }
    ];
    expect(formatDates(articles)).toEqual([
      {
        article_id: 13,
        title:
          "What does Jose Mourinho's handwriting say about his personality?",

        created_at: 'Mon Apr 16 2018'
      }
    ]);
  });
  it('works for multiple item array', () => {
    const articles = [
      {
        article_id: 25,
        title: 'Sweet potato & butternut squash soup with lemon & garlic toast',
        created_at: '2017-08-18T09:25:14.275Z'
      },
      {
        article_id: 34,
        title: 'The Notorious MSG’s Unlikely Formula For Success',
        created_at: '2017-08-16T22:08:30.430Z'
      }
    ];
    expect(formatDates(articles)).toEqual([
      {
        article_id: 25,
        title: 'Sweet potato & butternut squash soup with lemon & garlic toast',
        created_at: 'Fri Aug 18 2017'
      },
      {
        article_id: 34,
        title: 'The Notorious MSG’s Unlikely Formula For Success',
        created_at: 'Wed Aug 16 2017'
      }
    ]);
  });
  it('works for a single item array', () => {
    const articles = {
      article_id: 13,
      title: "What does Jose Mourinho's handwriting say about his personality?",

      created_at: '2018-04-16T19:29:32.774Z'
    };
    expect(formatDates(articles)).toEqual({
      article_id: 13,
      title: "What does Jose Mourinho's handwriting say about his personality?",

      created_at: 'Mon Apr 16 2018'
    });
  });
  it('does not mutate original array', () => {
    const articles = [
      {
        article_id: 25,
        title: 'Sweet potato & butternut squash soup with lemon & garlic toast',
        created_at: '2017-08-18T09:25:14.275Z'
      },
      {
        article_id: 34,
        title: 'The Notorious MSG’s Unlikely Formula For Success',
        created_at: '2017-08-16T22:08:30.430Z'
      }
    ];
    formatDates(articles);
    expect(articles).toEqual([
      {
        article_id: 25,
        title: 'Sweet potato & butternut squash soup with lemon & garlic toast',
        created_at: '2017-08-18T09:25:14.275Z'
      },
      {
        article_id: 34,
        title: 'The Notorious MSG’s Unlikely Formula For Success',
        created_at: '2017-08-16T22:08:30.430Z'
      }
    ]);
  });
});
