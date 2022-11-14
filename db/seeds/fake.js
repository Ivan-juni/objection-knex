exports.seed = async function (knex) {
  // turncate all existing table (because of foreign keys)
  await knex.raw('TRUNCATE TABLE "user" CASCADE')
  await knex.raw('TRUNCATE TABLE "channel" CASCADE')
  await knex.raw('TRUNCATE TABLE "video" CASCADE')

  await knex('channel').insert([
    {
      name: 'channel_1',
    },
    {
      name: 'channel_2',
    },
  ])

  await knex('video').insert([
    {
      title: 'video_1_user_1',
      channelId: 1,
    },
    {
      title: 'video_2_user_1',
      channelId: 1,
    },
    {
      title: 'video_1_user_2',
      channelId: 2,
    },
  ])

  return await knex('user').insert([
    {
      name: 'user_1',
      email: 'user1@gmail.com',
      channelId: 1,
    },
    {
      name: 'user_2',
      email: 'user2@gmail.com',
      channelId: 2,
    },
    {
      name: 'user_3',
      email: 'user3@gmail.com',
    },
  ])
}
