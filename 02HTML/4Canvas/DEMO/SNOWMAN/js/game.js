

// scene opening
window.Splash = function () {
    this.banner = new Image();
    this.banner.src = "images/splash.png";

    this.init = function () {
        FB.entities = [];
        FB.score.taps = FB.score.coins = 0;

        for (var i = 0; i < FB.entities.length; i += 1) {
            FB.entities[i].init();
        }
    }

    this.update = function () {
        for (i = 0; i < FB.entities.length; i += 1) {
            FB.entities[i].update();
        }
        if (FB.Input.tapped) {
            FB.changeState('Play');
            FB.Input.trapped = false;
        }
    }

    this.render = function () {
        FB.Draw.Image(this.banner, 66, 100);
    }
}


// scene play
window.Play = function () {
    this.init = function () {
        FB.sled = new FB.Sled();

        // Add entities
        FB.entities.push(new FB.Cloud(30, ~~(Math.random() * FB.HEIGHT / 2)));
        FB.entities.push(new FB.Cloud(~~(Math.random() * (FB.WIDTH * 2)), ~~(Math.random() * FB.HEIGHT / 2)));
        FB.entities.push(new FB.Cloud(~~(Math.random() * (FB.WIDTH * 3)), ~~(Math.random() * FB.HEIGHT / 2)));
        FB.entities.push(new FB.Snow());
        for (i = 0; i < 2; i += 1) {
            FB.entities.push(new FB.Route(FB.WIDTH * i, FB.HEIGHT - 60, FB.WIDTH + 3));
        }

        FB.entities.push(new FB.Tree(~~(Math.random() * FB.WIDTH), FB.HEIGHT - 120));
        FB.entities.push(new FB.Tree(~~(Math.random() * FB.WIDTH + 50), FB.HEIGHT - 120));
        FB.entities.push(new FB.Tree(~~(Math.random() * FB.WIDTH + 100), FB.HEIGHT - 120));

        FB.entities.push(FB.sled);

        FB.entities.push(new FB.Stone(FB.WIDTH, 20));

        FB.entities.push(new FB.Diamond(FB.WIDTH / 2, FB.HEIGHT - 120));

        for (var i = 0; i < FB.entities.length; i += 1) {
            FB.entities[i].init();
        }
    }


    this.update = function () {
        FB.distance += 1;
        var level = Math.floor(FB.distance / 2048);
        var levelUp = ((FB.distance % 2048) === 0 ? true : false);

        if (levelUp) {
            var bg = "day";
            var gradients = ["day", "dust", "neight", "dawn"];
            if (level < gradients.length) {
                bg = gradients[level];
            } else if (level === gradients.length) {
                bg = "day";
            }
            FB.bg_grad = bg;
            // console.log("levelUp. FB.bg_grad=" + bg);
        }

        //check for a collision if the user tapped on this game tick;
        var checkCollision = false;
        if (FB.Input.tapped) {
            FB.score.taps += 1;
            checkCollision = true;
        }

        for (var i = 0; i < FB.entities.length; i += 1) {
            FB.entities[i].update();

            if (FB.entities[i].type === 'stone') {
                var hit = FB.Collides(FB.sled, FB.entities[i]);
                if (hit) {
                    FB.changeState('GameOver');
                    break;
                }
            }
        }
    }

    this.render = function () {

    }
}


window.GameOver = function () {
    this.getMedal = function () {
        var score = FB.score.coins;
        console.log(score);
    }

    this.init = function () {

    }

    this.update = function () {

    }

    this.render = function () {

    }
}