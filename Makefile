.PHONY: run-rc deploy

run-rc:
	docker run \
	    --rm -t -d \
	    --name rc-zoom-linker-rc \
	    -p 3000:3000 \
	    -e OVERWRITE_SETTING_Show_Setup_Wizard=completed \
	    -e ADMIN_USERNAME=test \
	    -e ADMIN_PASS=test \
	    -e ADMIN_EMAIL=mail@example.com \
	    -v $(shell pwd)/.data:/var/lib/mongodb \
	    rocketchat/rocket.chat.preview

stop-rc:
	docker stop rc-zoom-linker-rc

deploy:
	rc-apps deploy --url http://localhost:3000 --username test --password test
