var Num_alunos  = 1;
var Num_notas   = 1;
var mediaClasse = 0;
var arrayNums = []

// Função responsável por receber notas e calcular a média individual
function MediaAluno(){
    for(let y=1 ; y <= Num_alunos; y = y + 1){

        let media       = 0;
        let resultado   = 0;

        for(let x = 1; x <= Num_notas; x = x + 1){
            let nota = parseFloat(document.getElementById(`nota${y}${x}`).value)
            resultado = nota + resultado
        }
        media = resultado/Num_notas
        arrayNums.push(media)
        document.getElementById(`media${y}`).innerText = media
        mediaClasse = mediaClasse + media

        if(media >= 50){
            document.getElementById(`media${y}`).style.color = "Green"
            document.getElementById(`situacao${y}`).innerText = "Aprovado"
        }
        else if(media >= 40 && media < 50){
            document.getElementById(`media${y}`).style.color = "Orange"
            document.getElementById(`situacao${y}`).innerText = "Recuperação"
        }
        else if(media < 40){
            document.getElementById(`media${y}`).style.color = "Red"
            document.getElementById(`situacao${y}`).innerText = "Reprovado"
        }
    }
}

// Função responsável por adicionar a linha de alunos na tabela.
function ADCaluno(){
    if(Num_alunos < 10){
        Num_alunos += 1
        
        let row
        let row_data
        let row_data_input
        let row_data_output

        row = document.createElement('tr');
        row.setAttribute("id", `linha${Num_alunos}`);

        row_data = document.createElement('td');
        row_data_input = document.createElement('output');
        row_data_input.setAttribute("id", `index${Num_alunos}`);
        row_data_input.innerHTML = Num_alunos;
        row_data.appendChild(row_data_input);
        row.appendChild(row_data);

        row_data = document.createElement('td');
        row_data_input = document.createElement('input');
        row_data_input.setAttribute("id", `nome${Num_alunos}`);
        row_data_input.type = "text"
        row_data.appendChild(row_data_input);
        row.appendChild(row_data);
        
        for(let x = 1; x <= Num_notas; x++){
            row_data = document.createElement('td');
            row_data.setAttribute("id", `coluna${Num_alunos}${x}`);
            row_data_input = document.createElement('input');
            row_data_input.setAttribute("id", `nota${Num_alunos}${x}`);
            row_data_input.type = "number"
            row_data_input.min = 0
            row_data_input.max = 100
            row_data.appendChild(row_data_input);
            row.appendChild(row_data);
        }

        row_data = document.createElement('td');
        row_data.setAttribute("id", `coluna_media${Num_alunos}`);
        row_data_output = document.createElement('output');
        row_data_output.setAttribute("id", `media${Num_alunos}`);
        row_data.appendChild(row_data_output);
        row.appendChild(row_data);

        row_data = document.createElement('td');
        row_data_output = document.createElement('output');
        row_data_output.setAttribute("id", `situacao${Num_alunos}`);
        row_data.appendChild(row_data_output);
        row.appendChild(row_data);
        document.getElementById('tbody').appendChild(row);

        row_data = document.createElement('td');
        row_data_input = document.createElement('output');
        row_data_input.setAttribute("id", `botao_linha${Num_alunos}`);
        row_data.appendChild(row_data_input);
        row.appendChild(row_data);
        let column_media = document.getElementById(`coluna_media${Num_alunos}`);
        document.getElementById(`linha${Num_alunos}`).insertBefore(row, column_media)

    }
}

// Função responsável por remover a linha de alunos na tabela.
function REMaluno(){
    if(Num_alunos > 1){
        let child = document.getElementById(`linha${Num_alunos}`)
        document.getElementById('tbody').removeChild(child);
        Num_alunos -= 1
        
    }
}

// Função responsável por adicionar a coluna de notas para cada aluno.  
function ADCnota(){
    if(Num_notas < 6){
        Num_notas += 1
        
        let column
        let column_media
        
        let row_data
        let row_data_input

        column = document.createElement('th');
        column.setAttribute("id", `coluna0${Num_notas}`);
        column.innerHTML = `Nota ${Num_notas}`;

        column_media = document.getElementById('result0');
        document.getElementById('linha0').insertBefore(column, column_media)

        for(let x = 1; x <= Num_alunos; x++){
            
            row_data = document.createElement('td');
            row_data.setAttribute("id", `coluna${x}${Num_notas}`);
            row_data_input = document.createElement('input');
            row_data_input.setAttribute("id", `nota${x}${Num_notas}`);
            row_data_input.type = "number"
            row_data_input.min = 0
            row_data_input.max = 100
            row_data.appendChild(row_data_input);
            media = document.getElementById(`coluna_media${x}`);
            console.log(media)
            console.log(row_data)
            document.getElementById(`linha${x}`).insertBefore(row_data, media)
        }
    }
}

// Função responsável por remover a coluna de notas para cada aluno. 
function REMnota(){
    if(Num_notas > 1){

        for(let x = 0; x <= Num_alunos; x++){
            let child = document.getElementById(`coluna${x}${Num_notas}`)
            console.log(child)
            document.getElementById(`linha${x}`).removeChild(child);
        }
        Num_notas -= 1
    }
}

// Função responsável por calcular a média de toda classe.
function MediaClasse(){
    document.getElementById('legendaMediaClasse').innerText = mediaClasse/(Num_alunos);
    console.log("opa")
}


/*function OrdemAlfabetica(){
    let nomes = [];
    let nome  =[];
    for(let y=1 ; y <= Num_alunos; y = y + 1){
        nome = document.getElementById(`aluno${Num_alunos}`)
        nomes.push(nome);
        console.log(nomes)
    }
}
function Crescente(){
    function sortfunction(a,b){
        return (a - b)
    }
    arrayNums.sort(sortfunction);
    console.log(arrayNums)
    for(let x = 1; x <=10; x++){

    }
}
function Decrescente(){
    function sortfunction(b,a){
        return (b - a)
    }
    arrayNums.sort(sortfunction);
    console.log(arrayNums)
}*/