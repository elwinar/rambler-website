Vagrant.configure(2) do |config|
	config.vm.box = "elwinar/laravel"
	config.vm.box_check_update = true
	config.vm.network "forwarded_port", guest: 80, host: 8080
end
