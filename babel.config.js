module.exports = {
	"env": {
		"test": {},
		"development": {
			"plugins": [],
			"presets": [
				[
					"@babel/preset-env",
					{
						"modules": false,
						"targets": {
							"browsers": [
								"last 1 Chrome version"
							]
						}
					}
				]
			]
		},
		"production": {
			"plugins": [],
			"presets": [
				[
					"@babel/preset-env",
					{
						"modules": false,
						"targets": {
							"browsers": [
								"> 1%",
								"last 2 versions",
								"not ie <= 8"
							]
						}
					}
				]
			]
		}
	}
};
