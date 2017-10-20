// Set the 'development' environment configuration object
module.exports = {
	db: 'mongodb://localhost/culido-development',
	sessionSecret: 'developmentSessionSecret',
	facebook: {
		clientID: '353013851827622',
		clientSecret: '96474830f9e0beddb5d27fd3a4690519',
		callbackURL: 'http://localhost:3000/oauth/facebook/callback'
	},
	twitter: {
		clientID: 'Twitter Application ID',
		clientSecret: 'Twitter Application Secret',
		callbackURL: 'http://localhost:3000/oauth/twitter/callback'
	},
	google: {
		clientID: '686126099925-1km38v1mee3u6ou620jib0j1gvh5q2q3.apps.googleusercontent.com',
		clientSecret: 'CuYqEx554SogolhJQJSXZj15',
		callbackURL: 'http://localhost:3000/oauth/google/callback'
	},
	  mailer: {
    from: process.env.MAILER_FROM || '',
    options: {
      service: process.env.MAILER_SERVICE_PROVIDER || '',
      auth: {
        user: process.env.MAILER_EMAIL_ID || '',
        pass: process.env.MAILER_PASSWORD || ''
      },
	 secure: true,
	     host: 'smtp.gmail.com',
    port: 465
    }
  },
};
