module.exports = {
  // your community or team name to display on join page.
  community: process.env.COMMUNITY_NAME || '코딩 배우는 디자이너 그룹',
  // your slack team url (ex: socketio.slack.com)
  slackUrl: process.env.SLACK_URL || 'designer-learn-coding.slack.com',
  // access token of slack
  // You can generate it in https://api.slack.com/web#auth
  // You should generate the token in admin user, not owner.
  // If you generate the token in owner user, missing_scope error will be occurred.
  //
  // You can test your token via curl:
  //   curl -X POST 'https://YOUR-SLACK-TEAM.slack.com/api/users.admin.invite' \
  //   --data 'email=EMAIL&token=TOKEN&set_active=true' \
  //   --compressed
  slacktoken: process.env.SLACK_TOKEN || 'xoxp-288202977797-287542157057-289468257831-d3d5af92c80c702c73a25e1c5a907320',
  // an optional security measure - if it is set, then that token will be required to get invited.
  inviteToken: process.env.INVITE_TOKEN || null,
  // an optional security measure - if both are set, then recaptcha will be used.
  recaptchaSiteKey: process.env.RECAPTCHA_SITE || null,
  recaptchaSecretKey: process.env.RECAPTCHA_SECRET || null,
  // default locale
  locale: process.env.LOCALE || "ko",
};
