            const resultado = document.getElementById('resultado')
            let peso = document.getElementById('peso')
            let altura = document.getElementById('altura')
            
        Calcular = () => {
            let weight = Number(peso.value)
            let height = Number(altura.value)
            let result = (weight/ height ** 2).toFixed(2)

            if (result < 18.00) {
                resultado.innerHTML = `${result} <br> IMC menor que 18,5 <br> Classificação: Magreza`;
            }
             if(result > 18.00 && result < 24.99){
                resultado.innerHTML = `${result} <br> IMC entre 18,5 e 24,9 <br> Classificação: Normal`;
            }
             if(result > 25.00 && result < 29.99){
                resultado.innerHTML = `${result} <br> IMC entre 25,0 e 29,9 <br> Classificação: Sobrepeso`;
            }
             if(result > 30.00 && result < 39.99){
                resultado.innerHTML =`${result} <br>  IMC entre 30,0 e 39,9 <br> Classificação: Obesidade`;
            }
            if(result > 40.00 ){
                resultado.innerHTML =`${result} <br> IMC maior que 40,0 <br> Classificação: Obesidade Grave`;
            }
        
           
            
        }