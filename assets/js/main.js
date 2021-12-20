/*
	Dimension by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

modes = ["attract", "bounce", "bubble", "connect", "grab", "modes", "push", "remove", "repulse", "slow", "trail"];

animations = [
	{
		"background": {
		  "opacity": 0,
		  "color": {
			"value": "#000000"
		  },
		  "position": "50% 50%",
		  "repeat": "no-repeat",
		  "size": "cover"
		},
		"fullScreen": {
		  "zIndex": 1
		},
		"interactivity": {
		  "events": {
			"onClick": {
			  "enable": true,
			  "mode": "push"
			},
			"onDiv": {
			  "selectors": "#repulse-div",
			  "mode": "repulse"
			},
			"onHover": {
			  "enable": true,
			  "mode": "connect",
			  "parallax": {
				"force": 60
			  }
			}
		  },
		  "modes": {
			"bubble": {
			  "distance": 400,
			  "duration": 2,
			  "opacity": 0.8,
			  "size": 40
			},
			"grab": {
			  "distance": 400
			}
		  }
		},
		"particles": {
		  "color": {
			"value": "#ffffff"
		  },
		  "links": {
			"color": {
			  "value": "#ffffff"
			},
			"distance": 150,
			"opacity": 0.4
		  },
		  "move": {
			"attract": {
			  "rotate": {
				"x": 600,
				"y": 1200
			  }
			},
			"enable": true,
			"outModes": {
			  "bottom": "out",
			  "left": "out",
			  "right": "out",
			  "top": "out"
			},
			"speed": 6
		  },
		  "number": {
			"density": {
			  "enable": true
			},
			"limit": 500,
			"value": 300
		  },
		  "opacity": {
			"value": 0.5,
			"animation": {
			  "speed": 1,
			  "minimumValue": 0.1
			}
		  },
		  "size": {
			"random": {
			  "enable": true
			},
			"value": {
			  "min": 1,
			  "max": 5
			},
			"animation": {
			  "speed": 40,
			  "minimumValue": 0.1
			}
		  }
		}
	},

	{
		"background": {
		  "color": {
			"value": "#000000"
		  },
		  "position": "50% 50%",
		  "repeat": "no-repeat",
		  "size": "cover",
		  "opacity": 0
		},
		"fullScreen": {
		  "zIndex": 1
		},
		"interactivity": {
		  "events": {
			"onClick": {
			  "mode": "push"
			},
			"onHover": {
			  "enable": true,
			  "mode": "bubble"
			}
		  },
		  "modes": {
			"bubble": {
			  "distance": 400,
			  "duration": 2,
			  "opacity": 0.8,
			  "color": {
				"value": "#ff0000"
			  },
			  "size": 40
			},
			"grab": {
			  "distance": 400
			}
		  }
		},
		"particles": {
		  "color": {
			"value": "#1b1e34"
		  },
		  "links": {
			"color": {
			  "value": "#ffffff"
			},
			"distance": 200,
			"width": 2
		  },
		  "move": {
			"attract": {
			  "rotate": {
				"x": 600,
				"y": 1200
			  }
			},
			"enable": true,
			"outModes": {
			  "bottom": "out",
			  "left": "out",
			  "right": "out",
			  "top": "out"
			},
			"speed": 8
		  },
		  "number": {
			"density": {
			  "enable": true
			},
			"value": 6
		  },
		  "opacity": {
			"random": {
			  "enable": true,
			  "minimumValue": 0.3
			},
			"value": {
			  "min": 0.3,
			  "max": 0.5
			},
			"animation": {
			  "speed": 1,
			  "minimumValue": 0.1
			}
		  },
		  "shape": {
			"options": {
			  "polygon": {
				"sides": 6
			  },
			  "star": {
				"sides": 6
			  }
			},
			"type": "polygon"
		  },
		  "size": {
			"random": {
			  "enable": true,
			  "minimumValue": 100
			},
			"value": {
			  "min": 100,
			  "max": 160
			},
			"animation": {
			  "minimumValue": 40
			}
		  }
		}
	},

	{
		"background": {
		  "color": {
			"value": "#000000"
		  },
		  "position": "50% 50%",
		  "repeat": "no-repeat",
		  "size": "cover",
		  "opacity": 0
		},
		"fullScreen": {
		  "zIndex": 1
		},
		"interactivity": {
		  "events": {
			"onClick": {
			  "enable": true,
			  "mode": "push"
			},
			"onHover": {
			  "enable": true,
			  "mode": "grab",
			  "parallax": {
				"enable": true,
				"force": 60
			  }
			}
		  },
		  "modes": {
			"bubble": {
			  "distance": 400,
			  "duration": 2,
			  "opacity": 0.8,
			  "size": 40
			},
			"grab": {
			  "distance": 400
			}
		  }
		},
		"particles": {
		  "color": {
			"value": "#ffffff"
		  },
		  "links": {
			"color": {
			  "value": "#ffffff"
			},
			"distance": 150,
			"enable": true,
			"opacity": 0.4
		  },
		  "move": {
			"attract": {
			  "rotate": {
				"x": 600,
				"y": 1200
			  }
			},
			"enable": true,
			"outModes": {
			  "bottom": "out",
			  "left": "out",
			  "right": "out",
			  "top": "out"
			}
		  },
		  "number": {
			"density": {
			  "enable": true
			}
		  },
		  "opacity": {
			"random": {
			  "enable": true
			},
			"value": {
			  "min": 0.1,
			  "max": 0.5
			},
			"animation": {
			  "enable": true,
			  "speed": 3,
			  "minimumValue": 0.1
			}
		  },
		  "size": {
			"random": {
			  "enable": true
			},
			"value": {
			  "min": 0.1,
			  "max": 10
			},
			"animation": {
			  "enable": true,
			  "speed": 20,
			  "minimumValue": 0.1
			}
		  }
		}
	},

	{
		"background": {
		  "color": {
			"value": "#000000"
		  },
		  "position": "50% 50%",
		  "repeat": "no-repeat",
		  "size": "cover",
		  "opacity": 0
		},
		"fullScreen": {
		  "zIndex": 1
		},
		"fpsLimit": 30,
		"interactivity": {
		  "events": {
			"onClick": {
			  "enable": true,
			  "mode": "push"
			},
			"onHover": {
			  "enable": true,
			  "mode": "repulse",
			  "parallax": {
				"force": 60
			  }
			}
		  },
		  "modes": {
			"bubble": {
			  "distance": 400,
			  "duration": 2,
			  "opacity": 0.8,
			  "size": 40
			},
			"grab": {
			  "distance": 400
			}
		  }
		},
		"particles": {
		  "color": {
			"value": "#ffffff"
		  },
		  "links": {
			"color": {
			  "value": "#ffffff"
			},
			"distance": 150,
			"enable": true,
			"opacity": 0.4,
			"shadow": {
			  "color": {
				"value": "#000000"
			  },
			  "enable": true
			}
		  },
		  "move": {
			"attract": {
			  "rotate": {
				"x": 600,
				"y": 1200
			  }
			},
			"enable": true,
			"outModes": {
			  "bottom": "out",
			  "left": "out",
			  "right": "out",
			  "top": "out"
			}
		  },
		  "number": {
			"density": {
			  "enable": true
			},
			"value": 80
		  },
		  "opacity": {
			"value": 0.5,
			"animation": {
			  "speed": 1,
			  "minimumValue": 0.1
			}
		  },
		  "shadow": {
			"blur": 5,
			"enable": true,
			"offset": {
			  "x": 3,
			  "y": 3
			}
		  },
		  "size": {
			"random": {
			  "enable": true
			},
			"value": {
			  "min": 1,
			  "max": 5
			},
			"animation": {
			  "speed": 40,
			  "minimumValue": 0.1
			}
		  }
		}
	},

	{
		"background": {
		  "color": {
			"value": "#0d47a1"
		  },
		  "position": "50% 50%",
		  "repeat": "no-repeat",
		  "size": "cover",
		  "opacity": 0
		},
		"fullScreen": {
		  "zIndex": 1
		},
		"interactivity": {
		  "events": {
			"onClick": {
			  "enable": true,
			  "mode": "absorber"
			},
			"onHover": {
			  "enable": true,
			  "mode": "repulse"
			}
		  },
		  "modes": {
			"bubble": {
			  "distance": 400,
			  "duration": 2,
			  "opacity": 0.8,
			  "size": 40
			},
			"grab": {
			  "distance": 400
			},
			"absorbers": {
			  "color": {
				"value": "#ffffff"
			  },
			  "draggable": false,
			  "opacity": 1,
			  "destroy": true,
			  "orbits": false,
			  "size": {
				"random": {
				  "enable": true,
				  "minimumValue": 5
				},
				"value": {
				  "min": 5,
				  "max": 10
				},
				"density": 5,
				"limit": {
				  "radius": 50,
				  "mass": 0
				}
			  }
			}
		  }
		},
		"particles": {
		  "color": {
			"value": "#ffffff"
		  },
		  "links": {
			"color": {
			  "value": "#ffffff"
			},
			"distance": 150,
			"enable": true,
			"opacity": 0.4
		  },
		  "move": {
			"attract": {
			  "rotate": {
				"x": 600,
				"y": 1200
			  }
			},
			"enable": true,
			"outModes": {
			  "bottom": "out",
			  "left": "out",
			  "right": "out",
			  "top": "out"
			}
		  },
		  "number": {
			"value": 80
		  },
		  "opacity": {
			"random": {
			  "enable": true
			},
			"value": {
			  "min": 0.1,
			  "max": 0.5
			},
			"animation": {
			  "enable": true,
			  "speed": 3,
			  "minimumValue": 0.1
			}
		  },
		  "size": {
			"random": {
			  "enable": true
			},
			"value": {
			  "min": 1,
			  "max": 50
			},
			"animation": {
			  "speed": 20,
			  "minimumValue": 0.1
			}
		  }
		}
	}
];

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		$main_articles = $main.children('article');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Fix: Flexbox min-height bug on IE.
		if (browser.name == 'ie') {

			var flexboxFixTimeoutId;

			$window.on('resize.flexbox-fix', function() {

				clearTimeout(flexboxFixTimeoutId);

				flexboxFixTimeoutId = setTimeout(function() {

					if ($wrapper.prop('scrollHeight') > $window.height())
						$wrapper.css('height', 'auto');
					else
						$wrapper.css('height', '100vh');

				}, 250);

			}).triggerHandler('resize.flexbox-fix');

		}

	// Nav.
		var $nav = $header.children('nav'),
			$nav_li = $nav.find('li');

		// Add "middle" alignment classes if we're dealing with an even number of items.
			if ($nav_li.length % 2 == 0) {

				$nav.addClass('use-middle');
				$nav_li.eq( ($nav_li.length / 2) ).addClass('is-middle');

			}

	// Main.
		var	delay = 325,
			locked = false;

		// Methods.
			$main._show = function(id, initial) {
				var ran = Math.floor(Math.random() * animations.length);
				var animation = animations[ran];
				var ran_mode = Math.floor(Math.random() * modes.length);
				console.log(ran_mode);
				console.log("Animation" + ran);
				animation.interactivity.events.onHover.mode = modes[ran_mode];
				if(ran == 1) {
					animation.particles.shape.options.polygon.sides = Math.floor(Math.random() * 8);
				}
				particlesJS("wrapper", animation)
				

				var $article = $main_articles.filter('#' + id);

				// No such article? Bail.
					if ($article.length == 0)
						return;

				// Handle lock.

					// Already locked? Speed through "show" steps w/o delays.
						if (locked || (typeof initial != 'undefined' && initial === true)) {
							
							// Mark as switching.
								$body.addClass('is-switching');

							// Mark as visible.
								$body.addClass('is-article-visible');

							// Deactivate all articles (just in case one's already active).
								$main_articles.removeClass('active');

							// Hide header, footer.
								$header.hide();
								$footer.hide();

							// Show main, article.
								$main.show();
								$article.show();

							// Activate article.
								$article.addClass('active');

							// Unlock.
								locked = false;

							// Unmark as switching.
								setTimeout(function() {
									$body.removeClass('is-switching');
								}, (initial ? 1000 : 0));

							return;

						}

					// Lock.
						locked = true;

				// Article already visible? Just swap articles.
					if ($body.hasClass('is-article-visible')) {

						// Deactivate current article.
							var $currentArticle = $main_articles.filter('.active');

							$currentArticle.removeClass('active');

						// Show article.
							setTimeout(function() {

								// Hide current article.
									$currentArticle.hide();

								// Show article.
									$article.show();

								// Activate article.
									setTimeout(function() {

										$article.addClass('active');

										// Window stuff.
											$window
												.scrollTop(0)
												.triggerHandler('resize.flexbox-fix');

										// Unlock.
											setTimeout(function() {
												locked = false;
											}, delay);

									}, 25);

							}, delay);

					}

				// Otherwise, handle as normal.
					else {

						// Mark as visible.
							$body
								.addClass('is-article-visible');

						// Show article.
							setTimeout(function() {

								// Hide header, footer.
									$header.hide();
									$footer.hide();

								// Show main, article.
									$main.show();
									$article.show();

								// Activate article.
									setTimeout(function() {

										$article.addClass('active');

										// Window stuff.
											$window
												.scrollTop(0)
												.triggerHandler('resize.flexbox-fix');

										// Unlock.
											setTimeout(function() {
												locked = false;
											}, delay);

									}, 25);

							}, delay);

					}

			};

			$main._hide = function(addState) {

				var $article = $main_articles.filter('.active');

				// Article not visible? Bail.
					if (!$body.hasClass('is-article-visible'))
						return;

				// Add state?
					if (typeof addState != 'undefined'
					&&	addState === true)
						history.pushState(null, null, '#');

				// Handle lock.

					// Already locked? Speed through "hide" steps w/o delays.
						if (locked) {

							// Mark as switching.
								$body.addClass('is-switching');

							// Deactivate article.
								$article.removeClass('active');

							// Hide article, main.
								$article.hide();
								$main.hide();

							// Show footer, header.
								$footer.show();
								$header.show();

							// Unmark as visible.
								$body.removeClass('is-article-visible');

							// Unlock.
								locked = false;

							// Unmark as switching.
								$body.removeClass('is-switching');

							// Window stuff.
								$window
									.scrollTop(0)
									.triggerHandler('resize.flexbox-fix');

							return;

						}

					// Lock.
						locked = true;

				// Deactivate article.
					$article.removeClass('active');

				// Hide article.
					setTimeout(function() {

						// Hide article, main.
							$article.hide();
							$main.hide();

						// Show footer, header.
							$footer.show();
							$header.show();

						// Unmark as visible.
							setTimeout(function() {

								$body.removeClass('is-article-visible');

								// Window stuff.
									$window
										.scrollTop(0)
										.triggerHandler('resize.flexbox-fix');

								// Unlock.
									setTimeout(function() {
										locked = false;
									}, delay);

							}, 25);

					}, delay);


			};

		// Articles.
			$main_articles.each(function() {

				var $this = $(this);

				// Close.
					$('<div class="close">Close</div>')
						.appendTo($this)
						.on('click', function() {
							location.hash = '';
						});

				// Prevent clicks from inside article from bubbling.
					$this.on('click', function(event) {
						event.stopPropagation();
					});

			});

		// Events.
			$body.on('click', function(event) {
				// Article visible? Hide.
					if ($body.hasClass('is-article-visible')) {
						console.log("hii");
						$main._hide(true);
					}

			});

			$window.on('keyup', function(event) {

				switch (event.keyCode) {

					case 27:

						// Article visible? Hide.
							if ($body.hasClass('is-article-visible'))
								$main._hide(true);

						break;

					default:
						break;

				}

			});

			$window.on('hashchange', function(event) {

				// Empty hash?
					if (location.hash == ''
					||	location.hash == '#') {

						// Prevent default.
							event.preventDefault();
							event.stopPropagation();

						// Hide.
							$main._hide();

					}

				// Otherwise, check for a matching article.
					else if ($main_articles.filter(location.hash).length > 0) {

						// Prevent default.
							event.preventDefault();
							event.stopPropagation();

						// Show article.
							$main._show(location.hash.substr(1));

					}

			});

		// Scroll restoration.
		// This prevents the page from scrolling back to the top on a hashchange.
			if ('scrollRestoration' in history)
				history.scrollRestoration = 'manual';
			else {

				var	oldScrollPos = 0,
					scrollPos = 0,
					$htmlbody = $('html,body');

				$window
					.on('scroll', function() {

						oldScrollPos = scrollPos;
						scrollPos = $htmlbody.scrollTop();

					})
					.on('hashchange', function() {
						$window.scrollTop(oldScrollPos);
					});

			}

		// Initialize.

			// Hide main, articles.
				$main.hide();
				$main_articles.hide();

			// Initial article.
				if (location.hash != ''
				&&	location.hash != '#')
					$window.on('load', function() {
						$main._show(location.hash.substr(1), true);
					});

})(jQuery);