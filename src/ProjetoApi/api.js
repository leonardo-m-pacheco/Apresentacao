
        let tela = document.getElementById("sars")

        let arr = []

        Envia = () => {
            const PegaNomes = document.getElementById("nome")

            const value = PegaNomes.value

            tela.innerHTML = arr.push(value)
        } //o valor do ID tem que ficar dentro da função que envia (onsubmit)

        Exibir = () => {
            return (
                tela.innerHTML = arr

            )
        }
        Excluir = () => {
            return (
                tela.innerHTML = arr.pop()
            )
        }
        MostraTudo = () => {
            let text ='';
            for (let i = 0; i < arr.length; i++) {
                text += arr[i] + "<br>";
            }
            return (
                tela.innerHTML = text
            )
        }//o loop for percorre todo o array. uma excelente forma para exibir os elementos.
        
        let tik = document.getElementById("Tik")
        let texto = '{"Funcionarios": ['+
        '{"PrimeiroNome":"Leonardo","SobreNome":"Pacheco"},'+
        '{"PrimeiroNome":"Ercilane","SobreNome":"Lima"},'+
        '{"PrimeiroNome":"Ragnar","SobreNome":"Pacheco"}]}'
        const obj = JSON.parse(texto);
        tik.innerHTML = obj.Funcionarios[0].PrimeiroNome + " " + obj.Funcionarios[0].SobreNome;
