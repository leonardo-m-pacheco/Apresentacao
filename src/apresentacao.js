
let ExperienciaProfissional = {
    Exp: function () {
        return (
            main.innerHTML = Rcpn.Experiencia1() + "<br>" + "<br>" + "<br>" + Kontik.Experiencia2()
            + "<br>" + "<br>" + "<br>" + Tesis.Experiencia3() + "<br>" + "<br>" + "<br>" + Avipam.Experiencia4()
            + "<br>" + "<br>" + "<br>" + Flytour.Experiencia5()
        )
    }
}
let Rcpn = {
    empresa: "Empresa: RCPN DO 1º DISTRITO DE SÃO GONÇALO RJ",
    cargo: "Cargo: Escrevente / Aux. De TI.",
    periodo: "Período: 10/2020 até 09/2021",
    atribuicoes: "(Realizava e autentficava a emissão de certidões.)",
    Experiencia1: function () {

        return main.innerHTML = this.empresa + "<br>" + this.cargo + "<br>" + this.periodo + "<br>" + this.atribuicoes
    }

}

let Kontik = {
    empresa: "Empresa: KONTIK FRANSTUR",
    cargo: "Cargo: Consultor de viagens",
    periodo: "Período: 02/2020 a 08/2020",
    atribuicoes: "(Realizava cotação, reservas de voos, carros e emissão de passagem aérea.)",
    Experiencia2: function () {
        return main.innerHTML = this.empresa + "<br>" + this.cargo + "<br>" + this.periodo + "<br>" + this.atribuicoes
    }
}

let Tesis = {
    empresa: "TESIS TECNOLOGIA",
    cargo: "Cargo: Assistente administrativo",
    periodo: "Período: 03/2015 a 07/2019",
    atribuicoes: "(Era responsável pela revisão dos cálculos de reembolso de passagens aéreas internacionais.Realizava o atendimento e suporte aos clientes.)",
    Experiencia3: function () {
        return main.innerHTML = this.empresa + "<br>" + this.cargo + "<br>" + this.periodo + "<br>" + this.atribuicoes
    }
}

let Avipam = {
    empresa: "AVIPAM TURISMO E TECNOLOGIA",
    cargo: "Cargo: Consultor PL1 N1",
    periodo: "Período:07/2014 a 12/14",
    atribuicoes: "(Realizava cotação, reservas de voos, carros e emissão de passagem aérea.)",
    Experiencia4: function () {
        return main.innerHTML = this.empresa + "<br>" + this.cargo + "<br>" + this.periodo + "<br>" + this.atribuicoes
    }
}

let Flytour = {
    empresa: "FLYTOUR AMERICAN EXPRESS",
    cargo: "Cargo: Consultor de viagens Jr.",
    periodo: "Período: 07/2011 a 07/2014",
    atribuicoes: "(Realizava cotação, reservas de voos, carros e emissão de passagem aérea.)",
    Experiencia5: function () {
        return main.innerHTML = this.empresa + "<br>" + this.cargo + "<br>" + this.periodo + "<br>" + this.atribuicoes
    }
}

let Informacoes = {
    nasc: "Nascido em 09/11/1989",
    idade: "Idade: 32 anos",
    end: "Endereço: Rua Maria Nazaret nº 154 - Centro - São Gonçalo - Rj",
    contato: "Contato (21) 9 8638-0086",
    email1: "E-mail:Pacheco.LeonardoMarques@gmail.com",
    email2: "Leonardo.M.Pacheco@hotmail.com",
    info: function () {

        return (
            main.innerHTML = this.nasc + "<br>" + "<br>" + this.idade + "<br>" + "<br>" + this.end + "<br>" + "<br>" + this.contato + "<br>" + "<br>" + this.email1 + "<br>" + "<br>" + this.email2
        )
    }
}

let Formacoes = {
    ensino: "Ensino superior na universidade Cândido Mendes",
    cursando: "Cursando - Análise e desenvolvimento de sistemas (4ºPeríodo)",
    FormacaoInfo: function () {
        return main.innerHTML = this.ensino + "<br>" + "<br>" + this.cursando
    }
}

let MeusCursos = {
    cursos1: "Frontend: (HTML, CSS, JavaScript, React.js, jQuery)",
    cursos2: "Backend: (PHP, mySQL)",
    cursos: function () {
        return (
            main.innerHTML = this.cursos1 + "<br>" + "<br>" + this.cursos2
        )
    }
}

let Linguas = {
    ingles: "Inglês: Fluente",
    Espanhol: "Espanhol: Fluente",
    LinguasInfo: function () {
        return (
            main.innerHTML = this.ingles + "<br>" + "<br>" + this.Espanhol
        )
    },
}


function Carta() {
    return main.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu convallis eros. Donec tristique sodales tortor ac euismod. Aenean hendrerit quam eu urna fringilla malesuada. Etiam faucibus tincidunt ornare. Etiam tincidunt, mi nec rutrum convallis, turpis tortor dapibus odio, vel varius purus neque vitae elit. Nunc mattis sagittis semper. Duis malesuada leo nec nisl ornare, sit amet vulputate ex convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut placerat odio. Etiam porttitor vulputate enim, ut tempor nulla imperdiet ut. Curabitur fringilla nulla eget nunc vulputate tristique. Nunc metus metus, lacinia ut ipsum et, hendrerit suscipit leo."
}

function Curriculo() {

    Informacoes.info()
}

function Formacao() {

    Formacoes.FormacaoInfo()

}

function Cursos() {

    MeusCursos.cursos()
}

function Experiencia() {
    ExperienciaProfissional.Exp()
}

function Linguagem() {
    Linguas.LinguasInfo()



}

let main = document.getElementById("saida")
