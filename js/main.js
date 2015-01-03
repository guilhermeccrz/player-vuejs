define(function (require) {

	"use strict";
    var $    = require('jquery'),
    Backbone = require('backbone'),
    Vue = require('vue');



	var player = new Vue({
		el:'#player',
		data: {
			playerTitle: 'Player - Pleimo - VUE.js',
			playingTitle: 'Tocando agora',
			playingMusic: null ,
			selectMusic: 'Selecione uma música',
			musics: null
		},
		compiled: function(){
			var self = this;
			console.log(self.$data);

			$.ajax({
				url: 'js/fake-ws.json',
				dataType: "json",
				complete: function (data) {

					self.$data.musics = data.responseJSON; 
					self.$emit('data-loaded');

					console.log(data.responseJSON);
				}
			})
		}

	});


});