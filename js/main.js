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
		methods: {

			playMusic: function(e){
				

				var el = e.target;
				var audio = document.getElementById('mp3');
				var mp3Src = $(el).attr('data-src');

				$('#mp3').attr('src',mp3Src);
				audio.play();


			}

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