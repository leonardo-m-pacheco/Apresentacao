
    var canvas, ctx, ALTURA, LARGURA, frames = 0, contador =0, vida =3, record = 0

var MaxPoints = {
        x: 700,
        y: 550,
        largura: 100,
        altura: 25,
        cor: "#ffffff",
        desenha: function () {
            ctx.fillStyle = this.cor;
            ctx.fillText(record, 850, 550)
            ctx.fillText("Record:", this.x, this.y)
            ctx.font = '35px arial'
            // ctx.fillRect(this.x, this.y, this.largura, this.altura)

        },
        atualiza: function () {
            
           if(contador > record){

            record++
           }
            
        }
}
    var VidaJogador = {
        x: 400,
        y: 550,
        largura: 100,
        altura: 25,
        cor: "#ffffff",
        vida: 3,
        desenha: function () {
            ctx.fillStyle = this.cor;
            ctx.fillText(vida, 510, 550)
            ctx.fillText("Vidas:", this.x, this.y)
            ctx.font = '35px arial'
            // ctx.fillRect(this.x, this.y, this.largura, this.altura)

        },
        atualiza: function () {
           vida

        }
    }

    var placar = {
        x: 30,
        y: 550,
        largura: 100,
        altura: 25,
        cor: "#ffffff",
        contador: 0,
        desenha: function () {
            ctx.fillStyle = this.cor;
            ctx.fillText(contador, 110, 550)
            ctx.fillText("Pts:", this.x, this.y)
            ctx.font = '35px arial'
            // ctx.fillRect(this.x, this.y, this.largura, this.altura)

        },
        atualiza: function () {
            contador

        }
    }
    var bloco = {
        x: 50,
        y: 250,
        largura: 50,
        altura: 30,
        cor: "#495558",
        gravidade: 1.5,
        velocidade: 0,
        forcadopulo: 25,
        quique: 0,
        desenha: function () {
        var naveheroi = new Image()
        naveheroi.src = "Public/nave-heroi.png";
        ctx.drawImage(naveheroi, this.x, this.y, 100, 60);
           
            // ctx.fillStyle = this.cor;
            //ctx.fillRect(this.x, this.y, this.largura, this.altura)
        },
        atualiza: function () {
            // this.velocidade += this.gravidade;
            this.y += this.velocidade

            if (this.y > chao.y - this.altura) {
                this.y = chao.y - this.altura
                this.velocidade = 0;

            }
            if (this.x < parede.x) {
                this.x += 3
            }
            if (this.y < 0) {
                this.y = 0
            }
        },

    }



    var bala = {
        x: 30,
        y: 250,
        largura: 5,
        altura: 5,
        forca: 15,
        gravidade: 0.01,
        velocidade: 20,
        cor: "#e6d4d8",
        desenha: function () {

            ctx.beginPath(); // substitui completamente o fillRect. faz um circulo ao invés de retângulo
            ctx.arc(this.x, this.y, 5, 5, 5 * Math.PI);
            ctx.fillStyle = this.cor
            ctx.fill()


            // ctx.fillRect(this.x, this.y, this.largura, this.altura)

        },
        atualiza: function () {
            this.velocidade += this.gravidade;
            this.x += this.velocidade

            if (this.x < 1000) {
                this.x++

            }
            if (this.x > 1000) {
                this.x = 30;
                this.velocidade = 20
                this.y = bloco.y + bloco.altura - 5
                this.x = bloco.x + bloco.largura +30
            }



        }
    }

    var chao = {
        y: 500,
        altura: 100,
        cor: "black",
        desenha: function () {
            ctx.fillStyle = this.cor
            ctx.fillRect(0, this.y, LARGURA, this.altura)
        },

    }


     var inimigo = {
        x: 1000,
        y: 190,
        largura: 50,
        altura: 50,
        cor: "red",
        gravidade: 0.01,
        velocidade: 0,
        desenha: function () {
            var asteroid = new Image()
        asteroid.src = "Public/asteroid.png";
        ctx.drawImage(asteroid, this.x, this.y, 100, 60);
            
            //ctx.fillStyle = this.cor;
            //ctx.fillRect(this.x, this.y, this.largura, this.altura)

        },
        atualiza: function () {
            this.velocidade += this.gravidade;
            this.x -= this.velocidade


            if (this.x < parede.x - 50) {
                this.x = 1000
                this.y = Math.floor(Math.random() * (450 - 1) + 1)
                this.velocidade = 0;
                vida--
                if(vida == 0){
                   
                   if(confirm("Game Over! \n\n Record: "+record+" \n\n Aperte 'OK' para jogar mais!")){
                    roda()
                    var txt;  
                    inimigo2.x = 1000;
                      contador = 0;
                      vida = 3;
                      
                   }else{
                       txt = alert("Pressione 'F5' para continuar!")
                   }
                    stop.requestAnimationFrame(roda)
                }
                contador -= 2;
                if (contador < 0) {
                    contador = 0;
                }
            }
        },

        colisao: function () {
            if (bala.x > inimigo.x + inimigo.largura &&
                bala.x + bala.largura > inimigo.x &&
                bala.y < inimigo.y + inimigo.altura &&
                bala.y + bala.altura > inimigo.y) {
                this.y = Math.floor(Math.random() * (450 - 1) + 1)
                this.x = 1020;
                contador++
                this.velocidade += 1;
            }
           
            if (this.velocidade >= 6) {
                this.velocidade--;
            }
            if (this.velocidade < 3) {
                this.velocidade++;
            }
            if (inimigo.x < bloco.x + bloco.largura &&
                inimigo.x + inimigo.largura > bloco.x &&
                inimigo.y < bloco.y + bloco.altura &&
                inimigo.y + inimigo.altura > bloco.y) {
                    vida--
                   
                this.y = Math.floor(Math.random() * (450 - 1) + 1)
                this.x = 1020;
                this.velocidade = 0;
                bloco.y = 0;
                bloco.x = -100;
                contador -= 4;
               
                if (contador < 0) {
                    contador = 0;
                }
                if(vida == 0){
                   
                   if(confirm("Game Over! \n\n Record: "+record+" \n\n Aperte 'OK' para jogar mais!")){
                    roda()
                    var txt;
                    inimigo2.x = 1000;
                      contador = 0;
                      vida = 3;
                      
                   }else{
                       txt = alert("Pressione 'F5' para continuar!")
                   }
                    stop.requestAnimationFrame(roda)
                }
              
            }



        },

    }
    

    var inimigo2 = {
        x: 1000,
        y: 190,
        largura: 50,
        altura: 50,
        cor: "red",
        gravidade: 0.01,
        velocidade: 0,
        desenha: function () {
            var asteroid = new Image()
        asteroid.src = "Public/asteroid.png";
        ctx.drawImage(asteroid, this.x, this.y, 100, 60);
            
            //ctx.fillStyle = this.cor;
            //ctx.fillRect(this.x, this.y, this.largura, this.altura)

        },
        atualiza: function () {
            this.velocidade += this.gravidade;
            this.x -= this.velocidade


            if (this.x < parede.x - 50) {
                this.x = 1000
                this.y = Math.floor(Math.random() * (450 - 1) + 1)
                this.velocidade = 0;
                vida--
                if(vida == 0){
                   
                   if(confirm("Game Over! \n\n Record: "+record+" \n\n Aperte 'OK' para jogar mais!")){
                    roda()
                    var txt;  
                    inimigo.x = 1000;
                      contador = 0;
                      vida = 3;
                      
                   }else{
                       txt = alert("Pressione 'F5' para continuar!")
                   }
                    stop.requestAnimationFrame(roda)
                }
                contador -= 2;
                if (contador < 0) {
                    contador = 0;
                }
            }
        },

        colisao: function () {
            if (bala.x > inimigo2.x + inimigo2.largura &&
                bala.x + bala.largura > inimigo2.x &&
                bala.y < inimigo2.y + inimigo2.altura &&
                bala.y + bala.altura > inimigo2.y) {
                this.y = Math.floor(Math.random() * (450 - 1) + 1)
                this.x = 1020;
                contador++
                this.velocidade += 1;
            }
           
            if (this.velocidade >= 6) {
                this.velocidade--;
            }
            if (this.velocidade < 3) {
                this.velocidade++;
            }
            if (inimigo2.x < bloco.x + bloco.largura &&
                inimigo2.x + inimigo2.largura > bloco.x &&
                inimigo2.y < bloco.y + bloco.altura &&
                inimigo2.y + inimigo2.altura > bloco.y) {
                    vida--
                   
                this.y = Math.floor(Math.random() * (450 - 1) + 1)
                this.x = 1020;
                this.velocidade = 0;
                bloco.y = 0;
                bloco.x = -100;
                contador -= 4;
               
                if (contador < 0) {
                    contador = 0;
                }
                if(vida == 0){
                   
                   if(confirm("Game Over! \n\n Record: "+record+" \n\n Aperte 'OK' para jogar mais!")){
                    roda()
                       var txt;
                       inimigo.x = 1000;
                      contador = 0;
                      vida = 3;
                     
                   }else{
                       txt = alert("Pressione 'F5' para continuar!")
                   }
                    stop.requestAnimationFrame(roda)
                }
              
            }



        },

    }


    var parede = {
        x: 0,
        y: 0,
        largura: 10,
        altura: 500,
        cor: "black",
        desenha: function () {
            ctx.fillStyle = this.cor
            ctx.fillRect(this.x, this.y, this.largura, this.altura)
        }
    }


    function main() {

        ALTURA = window.innerHeight;
        LARGURA = window.innerWidth;

        if (LARGURA >= 500) {
            LARGURA = 1000;
            ALTURA = 600;
        }

        canvas = document.createElement("canvas");
        canvas.width = LARGURA;
        canvas.height = ALTURA;
        canvas.style.border = "1px solid #000"


        ctx = canvas.getContext("2d");

        document.body.appendChild(canvas);
        document.addEventListener("keydown", tecla);
        




        roda();

    }


    function roda() {
        atualiza();
        desenha();
        window.requestAnimationFrame(roda)
    }

    function tecla() {
        var x = event.key
        if (x == "a" || x =='A') {

            bloco.x -= 30
        }
        if (x == "d" || x =="D") {

            bloco.x += 30;
        }

        if (x == "w" || x =="W") {
            bloco.y -= 35;
            
        }
        if (x == "s" || x =="S") {
            bloco.y += 35;
            
        }
        if (x == "p" || x == "P") {
            alert(">>>Pause<<<\nPara voltar aperte 'OK'.")

        }

    }

    function atualiza() {
        frames++
        bloco.atualiza();
        inimigo.atualiza()
        inimigo.colisao()
        inimigo2.atualiza()
        inimigo2.colisao()
        bala.atualiza()
        placar.atualiza()
        VidaJogador.atualiza()
        MaxPoints.atualiza()


    }
    function desenha() {
        var img = new Image()
        img.src = "public/space-photo.png"
        ctx.drawImage(img, 0, 0, 1000, 600);

        //ctx.fillStyle = "black";
        //ctx.fillRect(0, 0, LARGURA, ALTURA)
        

        chao.desenha()
        bloco.desenha()
        inimigo.desenha()
        inimigo2.desenha()
        parede.desenha()
        bala.desenha()
        VidaJogador.desenha()
        placar.desenha()
        MaxPoints.desenha()

    }

    main();


