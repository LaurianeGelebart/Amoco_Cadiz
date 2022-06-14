(function () {
    'use strict';
    $(document).ready(function () {


        var numP = 1;

        if ($("body").hasClass("histoire") || $("body").hasClass("carte") || $("body").hasClass("index") || $("body").hasClass("vs") ) {

            var joue = localStorage.getItem("soundstate");
            var intro = localStorage.getItem("intro");

            var audio = new Audio('son/tempete.mp3');
            if (joue == "true" || joue == null) {
                audio.play();
            } else {
                $('#okSon').attr('src', 'images/sonC.svg');
            }


            $('#okSon').click(function () {
                if (joue == "true") {
                    audio.pause();
                    localStorage.setItem("soundstate", "false");
                    $('#okSon').attr('src', 'images/sonC.svg');
                } else {
                    audio.play();
                    localStorage.setItem("soundstate", "true");
                    $('#okSon').attr('src', 'images/son.svg');
                }
                joue = localStorage.getItem("soundstate");
            });

        }

        document.addEventListener("keypress", function (e) {
            if (e.keyCode === 13) {
                toggleFullScreen();
            }
        }, false);

        function toggleFullScreen() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();

            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
            }
        }

        if ($("body").hasClass("index")) {
            console.log(intro);
            if (!(intro === "fait")) {
                setTimeout(function () {
                    $('.indexTitre').removeClass('opacity0');
                    $('.divFleches').removeClass('opacity0');
                    $('.lignePic').removeClass('opacity0');
                    $('.infosDebut').css('display', 'none');
                }, 10300);
                localStorage.setItem("intro", "fait");
            } else {
                $('.indexTitre').removeClass('opacity0');
                $('.divFleches').removeClass('opacity0');
                $('.lignePic').removeClass('opacity0');
                $('.infosDebut').css('display', 'none');
                $('.titre').css('animation-delay', '0s');
                $('.sous-titre').css('animation-delay', '0s');
            }

        }



        /* --------------------------------- CARTE ------------------------------- */

        if ($("body").hasClass("carte")) {
            var zone = $('.ellispse');

            zone.click(function () {
                let nb = $(this).data("ville");
                switch (nb) {
                    case 1:
                        $('.infosImg').addClass('opacity0');
                        setTimeout(function () {
                            $('.inf1').removeClass('opacity0');
                        }, 300);
                        break;
                    case 2:
                        $('.infosImg').addClass('opacity0');
                        setTimeout(function () {
                            $('.inf2').removeClass('opacity0');
                        }, 300);
                        break;
                    case 3:
                        $('.infosImg').addClass('opacity0');
                        setTimeout(function () {
                            $('.inf3').removeClass('opacity0');
                        }, 300);
                        break;
                    case 4:
                        $('.infosImg').addClass('opacity0');
                        setTimeout(function () {
                            $('.inf4').removeClass('opacity0');
                        }, 300);
                        break;
                    case 5:
                        $('.infosImg').addClass('opacity0');
                        setTimeout(function () {
                            $('.inf5').removeClass('opacity0');
                        }, 300);
                        break;
                }

            });

        }




        /* -------------------------------- PICTOS ------------------------------- */

        $("#pictoCarte").hover(
            function () {
                $('#pictoCarte').attr('src', "images/pictoJ1.png");
            },
            function () {
                $('#pictoCarte').attr('src', "images/picto1.png");
            }
        );
        $("#pictoVideo").hover(
            function () {
                $('#pictoVideo').attr('src', "images/pictoJ2.png");
            },
            function () {
                $('#pictoVideo').attr('src', "images/picto2.png");
            }
        );
        $("#pictoVS").hover(
            function () {
                $('#pictoVS').attr('src', "images/pictoJ3.png");
            },
            function () {
                $('#pictoVS').attr('src', "images/picto3.png");
            }
        );
        $("#pictoPhoto").hover(
            function () {
                $('#pictoPhoto').attr('src', "images/pictoJ4.png");
            },
            function () {
                $('#pictoPhoto').attr('src', "images/picto4.png");
            }
        );
        $("#pictoAcc").hover(
            function () {
                $('#pictoAcc').attr('src', "images/pictoJ5.png");
            },
            function () {
                $('#pictoAcc').attr('src', "images/picto5.png");
            }
        );



        /* ------------------------------- HISTOIRE ------------------------------ */


        if ($("body").hasClass("histoire")) {
            $('#fleche_gauche').click(function () {
                $('.explications').text("");
                if (numP === 1) {
                    window.location.replace("index.html");
                } else if (numP === 2) {
                    window.location.replace("#1");
                } else if (numP === 3) {
                    window.location.replace("#2");
                } else {
                    window.location.replace("#3");
                };
                numP--;
                changementTexte();
            });

            $('#fleche_droite').click(function () {
                $('.explications').text("");
                if (numP === 1) {
                    window.location.replace("#2");
                } else if (numP === 2) {
                    window.location.replace("#3");
                } else if (numP === 3) {
                    window.location.replace("#4");
                } else {
                    window.location.replace("index.html");
                }
                numP++;
                changementTexte();
            });


            changementTexte();


            function changementTexte(evt) {

                switch (numP) {
                    case 1:
                        console.log(numP);
                        $('.histoire').css({
                            'background-image': 'url(images/amoco.png)'
                        });
                        $('.titreH').text("Le naufrage");

                        $('.laZone3').css({
                            'top': '30vh',
                            'left': '25vw'
                        });
                        $('.laZone1').css({
                            'top': '75vh',
                            'left': '50vw'
                        });
                        $('.laZone2').css({
                            'top': '2vh',
                            'left': '60vw'
                        });

                        $('.leTexte').css({
                            'top': '72vh',
                            'left': '3vw'
                        });
                        $('.explications').css({
                            'width': '37vw',
                            'text-align': 'left'
                        });


                        $('#zone3').click(function () {
                            $(".explications").addClass('opacity0');
                            setTimeout(function () {
                                $('.explications').text('L’Amoca Cadiz était un super tanker de 330 mètres de long, construit par la compagnie Américaine Amoco Transport, et transportant 220 000 litres de pétrole du Golf Persique au port de Rotterdam. Bien que le bateau soit connu pour ses problèmes de gouvernail, la compagnie avait décidé de le laisser partir pour un dernier voyage. Dernier voyage qui se terminera plus tôt que prévu sur les roches bretonnes.');
                                $(".explications").removeClass('opacity0');
                            }, 300);
                        });

                        $('#zone2').click(function () {
                            $(".explications").addClass('opacity0');

                            setTimeout(function () {
                                $('.explications').text("En 1978 le Rail d’Ouessant passe très près des côtes Finistériennes, c’est en passant au nord d'Ouessant qu’une avarie de gouvernaille est détectée sur l’Amoco Cadiz. Comme l’unique remorqueur de la marine nationale est occupé, c’est un remorqueur privé qui vient au secours du bateau, le capitaine perd de nombreuses heures en négociant le prix du remorquage. Finalement le bateau est trop gros et après de nombreux échecs il fait naufrage à moins de 2 kilomètres des plages de la commune de Portsall. ");
                                $(".explications").removeClass('opacity0');
                            }, 300);
                        });

                        $('#zone1').click(function () {
                            $(".explications").addClass('opacity0');

                            setTimeout(function () {
                                $('.explications').text('Le 16 mars 1978 vers 21h le pétrolier se fracasse sur les rochers de Portsall. Le lendemain les bretons se réveillent avec l’odeur du pétrole et des plages noires de mazout. Les 220 000 tonnes de brut que transportait le bateau se déversent petit à petit et ce pendant plusieurs semaines sur la côte nord-ouest de la Bretagne. ');
                                $(".explications").removeClass('opacity0');
                            }, 300);
                        });
                        break;
                    case 2:
                        $('.histoire').css({
                            'background-image': 'url(images/nettoyage.jpg)'
                        });
                        $('.titreH').text("Le nettoyage");

                        $('.laZone3').css({
                            'top': '33vh',
                            'left': '30vw'
                        });
                        $('.laZone1').css({
                            'top': '76vh',
                            'left': '42vw'
                        });
                        $('.laZone2').css({
                            'top': '10vh',
                            'left': '78vw'
                        });

                        $('.leTexte').css({
                            'top': '65vh',
                            'left': '55vw'
                        });
                        $('.explications').css({
                            'width': '30vw',
                            'text-align': 'right'
                        });

                        $('#zone1').click(function () {
                            $(".explications").addClass('opacity0');
                            setTimeout(function () {
                                $('.explications').text('Au départ les bretons n’ont pas de moyens et nettoient les plages avec les moyens du bord. On ramasse le pétrole à la pelle. Il faut recommencer à chaque marée, car jour après jour, jusqu’à son dynamitage le 30 mars, l’Amoco Cadiz continue de vomir des litres et des litres de sa cargaison sombre et gluante, sur les plages bretonnes.');
                                $(".explications").removeClass('opacity0');
                            }, 300);

                        });

                        $('#zone2').click(function () {
                            $(".explications").addClass('opacity0');
                            setTimeout(function () {
                                $('.explications').text('Les agriculteurs sont mobilisés dès le premier jour, avec leur tonne à lisier ils aident à l’évacuation du pétrole vers de lieux de stockage temporaires. Par la suite, le gouvernement envoie l’armée en aide. Du 16 mars au 12 avril, on estime qu’en moyenne 1000 véhicules participent au nettoyage par jour.');
                                $(".explications").removeClass('opacity0');
                            }, 300);

                        });

                        $('#zone3').click(function () {
                            $(".explications").addClass('opacity0');
                            setTimeout(function () {
                                $('.explications').text('Il faudra 6 mois pour nettoyer entièrement les plages et près de 7 ans pour que les espèces marines et l’ostréiculture récupèrent totalement. Difficile de chiffrer le bilan, quoi qu\'il en soit très lourd. Les scientifiques parlent de plus de 20 000 oiseaux morts. \"Bretagne vivante\" et la Ligue de protection des oiseaux (LPO) ont soigné 4 500 volatiles, moins d\'une cinquantaine ont pu être sauvés du désastre.');
                                $(".explications").removeClass('opacity0');
                            }, 300);
                        });
                        break;
                    case 3:
                        $('.histoire').css({
                            'background-image': 'url(images/proces.jpg)'
                        });
                        $('.titreH').text("Le procès");

                        $('.laZone3').css({
                            'top': '53vh',
                            'left': '14vw'
                        });
                        $('.laZone1').css({
                            'top': '48vh',
                            'left': '32vw'
                        });
                        $('.laZone2').css({
                            'top': '20vh',
                            'left': '80vw'
                        });

                        $('.leTexte').css({
                            'top': '80vh',
                            'left': '3vw'
                        });
                        $('.explications').css({
                            'width': '45vw',
                            'text-align': 'left'
                        });

                        $('.laZone3').css({
                            'visibility': 'visible'
                        });


                        $('#zone3').click(function () {
                            $(".explications").addClass('opacity0');
                            setTimeout(function () {
                                $('.explications').text('Dès septembre, 92 communes du Finistère menées par le sénateur et maire de Portsall-Ploudalmézeau, Alphonse Arzel se rassemblent pour attaquer la Standard Oil Of Indiana, géant mondial du pétrole et armateur de l\'Amoco. Ils n’étaient pas du même bord politique mais avaient une idée en tête: faire payer les responsables de cette catastrophe. ');
                                $(".explications").removeClass('opacity0');
                            }, 300);

                        });

                        $('#zone2').click(function () {
                            $(".explications").addClass('opacity0');
                            setTimeout(function () {
                                $('.explications').text('Après 14 ans de procès, la société Amoco est condamnée par la Cour d’appel de Chicago, à verser l\'équivalent de 194 millions d’euros aux collectivités bretonnes et à l\'État Français. C’est la première fois de l’histoire qu’une compagnie est tenue responsable et condamnée pour une marée noire. La condamnation fait aujourd`\'hui jurisprudence et correspond au principe du \"Pollueur-Payeur\". ');
                                $(".explications").removeClass('opacity0');
                            }, 300);
                        });

                        $('#zone1').click(function () {
                            $(".explications").addClass('opacity0');
                            setTimeout(function () {
                                $('.explications').text("Durant les 14 années de procédures, les avocats ont dû prouver que l’entreprise connaissait les problèmes de gouvernance de l’Amoco Cadiz et qu'elle l’a tout de même pris la décision de le laisser partir.");
                                $(".explications").removeClass('opacity0');
                            }, 300);

                        });
                        break;
                    case 4:
                        $('.histoire').css({
                            'background-image': 'url(images/ancre.jpg)'
                        });
                        $('.titreH').text("Qu'en reste t-il aujourd'hui ?");


                        $('.laZone3').css({
                            'visibility': 'hidden'
                        });
                        $('.laZone1').css({
                            'top': '38vh',
                            'left': '39vw'
                        });
                        $('.laZone2').css({
                            'top': '50vh',
                            'left': '70vw'
                        });

                        $('.leTexte').css({
                            'top': '82vh',
                            'left': '3vw'
                        });
                        $('.explications').css({
                            'width': '45vw',
                            'text-align': 'left'
                        });

                        $('#zone3').click(function () {
                            $('.explications').text('');
                        });

                        $('#zone2').click(function () {
                            $(".explications").addClass('opacity0');
                            setTimeout(function () {
                                $('.explications').text("Plus de 40 ans après, on ne trouve presque aucune trace de la marée noire qu’a subi le nord-ouest de la Bretagne. Seul reste l’ancre du bateau sur le port de Portsall. Elle rappelle par sa présence et sa taille l’ampleur de la catastrophe. ");
                                $(".explications").removeClass('opacity0');
                            }, 300);

                        });

                        $('#zone1').click(function () {
                            $(".explications").addClass('opacity0');
                            setTimeout(function () {
                                $('.explications').text("L’épave de l’Amoco Cadiz se trouve toujours au fond de l’eau, à près de 30 mètres de profondeur. Elle a été investi par la faune et la flore marine, et est devenu le terrain de jeu des plongeurs confirmés. ");
                                $(".explications").removeClass('opacity0');
                            }, 300);

                        });
                }
            }

        }




        /* -------------------------------- VIDEOS ------------------------------- */

        if ($("body").hasClass("video")) {

            var player = $('.player');
            var togglePause = false;

            $('#okV1').click(function () {
                player.YTPChangeMovie({
                    videoURL: 'http://youtu.be/IOFFGRkLo6k'
                });
            });
            $('#okV2').click(function () {
                player.YTPChangeMovie({
                    videoURL: 'http://youtu.be/AQqfd9DVMBM'
                });
            });
            $('#okV3').click(function () {
                player.YTPChangeMovie({
                    videoURL: 'http://youtu.be/xqPgqyh84As'
                });
            });

            player.YTPlayer();


            $('#pause').click(function () {
                if (togglePause) {
                    player.YTPPlay();
                    togglePause = false;
                } else {
                    lplayer.YTPPause();
                    togglePause = true;
                }

            });

            $('#mute').click(function () {
                player.YTPToggleVolume();
            });


        }

        /* ---------------------------------- VS --------------------------------- */


        if ($("body").hasClass("vs")) {
            Draggable.create(".item", {
                type: "x,y",
                onRelease: dropItem,
            });


            function dropItem() {
                var boundsBefore, boundsAfter;
                if (this.hitTest(".drop")) {
                    boundsBefore = this.target.getBoundingClientRect();
                    $(this.target).appendTo('.drop');
                    boundsAfter = this.target.getBoundingClientRect();
                    TweenMax.fromTo(this.target, 0.3, {
                        x: "+=" + (boundsBefore.left - boundsAfter.left),
                        y: "+=" + (boundsBefore.top - boundsAfter.top)
                    }, {
                        x: 0,
                        y: 0,
                    });
                } else {
                    TweenMax.to(this.target, 0.5, {
                        x: 0,
                        y: 0,
                    });
                }
                if (this.hitTest(".drop2")) {
                    boundsBefore = this.target.getBoundingClientRect();
                    $(this.target).appendTo('.drop2');
                    boundsAfter = this.target.getBoundingClientRect();
                    TweenMax.fromTo(this.target, 0.3, {
                        x: "+=" + (boundsBefore.left - boundsAfter.left),
                        y: "+=" + (boundsBefore.top - boundsAfter.top)
                    }, {
                        x: 0,
                        y: 0,
                    });
                } else {
                    TweenMax.to(this.target, 0.5, {
                        x: 0,
                        y: 0,
                    });
                }
                if (this.hitTest(".drag")) {
                    boundsBefore = this.target.getBoundingClientRect();
                    $(this.target).appendTo('.drag');
                    boundsAfter = this.target.getBoundingClientRect();
                    TweenMax.fromTo(this.target, 0.3, {
                        x: "+=" + (boundsBefore.left - boundsAfter.left),
                        y: "+=" + (boundsBefore.top - boundsAfter.top)
                    }, {
                        x: 0,
                        y: 0,
                        onComplete: changeInfos
                    });
                } else {
                    TweenMax.to(this.target, 0.5, {
                        x: 0,
                        y: 0,
                        onComplete: changeInfos
                    });
                }
            }

            function changeInfos() {
                let pl = $(".plaqueL");
                let pr = $(".plaqueR");
                let item = $(".drop .item");
                let item2 = $(".drop2 .item");

                if (item.data("item") == 1) {
                    pl.attr('src', 'images/plaqueTC.svg');
                } else if (item.data("item") == 2) {
                    pl.attr('src', 'images/plaqueAC.svg');
                } else if (item.data("item") == 3) {
                    pl.attr('src', 'images/plaqueE.svg');
                } else if (item.data("item") == 4) {
                    pl.attr('src', 'images/plaqueP.svg');
                } else if (item.data("item") == 5) {
                    pl.attr('src', 'images/plaqueWaka.svg');
                } else {
                    pl.attr('src', 'images/PLAQUE.svg');
                }

                if (item2.data("item") == 1) {
                    pr.attr('src', 'images/plaqueTC.svg');
                } else if (item2.data("item") == 2) {
                    pr.attr('src', 'images/plaqueAC.svg');
                } else if (item2.data("item") == 3) {
                    pr.attr('src', 'images/plaqueE.svg');
                } else if (item2.data("item") == 4) {
                    pr.attr('src', 'images/plaqueP.svg');
                } else if (item2.data("item") == 5) {
                    pr.attr('src', 'images/plaqueWaka.svg');
                } else {
                    pr.attr('src', 'images/PLAQUE.svg');
                }
            }
        }

        /* -------------------------------- ALBUM ------------------------------- */

        if ($("body").hasClass("album")) {

            var audio2 = new Audio('son/piano.mp3');
            var joue = localStorage.getItem("soundstate");
                 console.log(joue);
             if (joue == "true" || joue == null) {
                audio2.play();
            } else {
                $('#okSon').attr('src', 'images/sonC.svg');
            }
            
            if (joue == "true") {
                audio2.pause();
                localStorage.setItem("soundstate", "false");
                $('#okSon').attr('src', 'images/sonC.svg');
            } else {
                audio2.play();
                localStorage.setItem("soundstate", "true");
                $('#okSon').attr('src', 'images/son.svg');
            };



            $('.revoir').click(function () {
                $('.souvenirs').trigger('play');
                $(".fin").addClass('opacity0');
                setTimeout(function () {
                    $('.fin').css('display', 'none');
                }, 2000);

            });

            $('.retour').click(function () {
                window.location.replace("index.html");
            });

            var video = document.querySelector(".souvenirs");

            video.addEventListener('ended', (event) => {
                $('.fin').css('display', 'block');
                $('.texteDebut').css('display', 'none');
                $(".fin").addClass('opacity0');
                setTimeout(function () {
                    $(".fin").removeClass('opacity0');
                }, 300);
            });

        }


    });
}());
