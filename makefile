ALL = dentinho\
	  carlex-externo\
	  carlex-interno

all: $(ALL)

dentinho:
	cd ../app-dentinho/ && npx expo publish
	cd ../app-dentinho/ && npx expo export --public-url https://ewerton5.github.io/apps/app-dentinho
	rm -rf apps/app-dentinho/
	mv ../app-dentinho/dist/ apps/app-dentinho
	git add *
	git commit -m "dentinho update"
	git push origin master
	cd ../app-dentinho/ && npx expo build:ios -t archive --public-url https://ewerton5.github.io/apps/app-dentinho/ios-index.json
	cd ../app-dentinho/ && npx expo build:android -t apk --public-url https://ewerton5.github.io/apps/app-dentinho/android-index.json

carlex-externo:
	cd ../app-carlex-externo/ && npx expo publish
	cd ../app-carlex-externo/ && npx expo export --public-url https://ewerton5.github.io/apps/app-carlex-externo
	rm -rf apps/app-carlex-externo/
	mv ../app-carlex-externo/dist/ apps/app-carlex-externo
	git add *
	git commit -m "carlex-externo update"
	git push origin master
	cd ../app-carlex-externo/ && npx expo build:ios -t archive --public-url https://ewerton5.github.io/apps/app-carlex-externo/ios-index.json
	cd ../app-carlex-externo/ && npx expo build:android -t apk --public-url https://ewerton5.github.io/apps/app-carlex-externo/android-index.json

carlex-interno:
	cd ../app-carlex-interno/ && npx expo publish
	cd ../app-carlex-interno/ && npx expo export --public-url https://ewerton5.github.io/apps/app-carlex-interno
	rm -rf apps/app-carlex-interno/
	mv ../app-carlex-interno/dist/ apps/app-carlex-interno
	git add *
	git commit -m "carlex-interno update"
	git push origin master
	cd ../app-carlex-interno/ && npx expo build:ios -t archive --public-url https://ewerton5.github.io/apps/app-carlex-interno/ios-index.json
	cd ../app-carlex-interno/ && npx expo build:android -t apk --public-url https://ewerton5.github.io/apps/app-carlex-interno/android-index.json
