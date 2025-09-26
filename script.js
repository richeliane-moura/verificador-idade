function verificar(){
    var data = new Date()
    var ano = data.getFullYear() // pega ano atual com 4 digitos
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    // Verifica se o ano está vazio ou maior que o ano atual
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Selecione o sexo!')
    } else {
        var fsex = document.getElementsByName('radsex') //seleciona os radio
        var idade = ano - Number(fano.value) // calcula idade
        var genero = ''
        var img = document.createElement('img') //cria elemento img
        img.setAttribute('id', 'foto') //define o id da imagem

        //Verifica o sexo selecionado
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 12){
                img.setAttribute('src','foto-bebe-mas.png')
            }else if(idade < 25){
                img.setAttribute('src', 'foto-jovem-mas.png')
            }else if(idade < 59){
                img.setAttribute('src', 'foto-adulto-mas.png')
            }else {
                img.setAttribute('src', 'foto-idoso-mas.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 12){
                img.setAttribute('src','foto-bebe-fem.png')
            }else if(idade >= 10 && idade < 25){
                img.setAttribute('src', 'foto-jovem-fem.png')
            }else if(idade < 59){
                img.setAttribute('src', 'foto-adulto-fem.png')
            }else {
                img.setAttribute('src', 'foto-idoso-fem.png')
            }
        }

        res.style.textAlign = 'center' //centralizar o texto da div de resultado
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
        res.appendChild(img) // adiciona a imagem depois do texto
    }
}
