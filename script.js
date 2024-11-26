const $ = (x) => document.getElementById(x);
let turn = '@';
//the game is on its side, top -> bottom is left -> right
let game = [
    ['','','','','',''],
    ['','','','','',''],
    ['','','','','',''],
    ['','','','','',''],
    ['','','','','',''],
    ['','','','','',''],
    ['','','','','','']
];
function newGame(){
    game = [
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','','']
    ];
    update();
}
function changeTurn(){
    if(turn === '@'){turn = 'O';}
    else{turn = '@';}
}
function move(x){
    if(game[x][5] == 0){
        game[x][5] = turn;
    }
    else if(game[x][4] == 0){
        game[x][4] = turn;
    }
    else if(game[x][3] == 0){
        game[x][3] = turn;
    }
    else if(game[x][2] == 0){
        game[x][2] = turn;
    }
    else if(game[x][1] == 0){
        game[x][1] = turn;
    }
    else if(game[x][0] == 0){
        game[x][0] = turn;
    }
    update();
    changeTurn();
}
function update(){
    for(let i = 0; i < 7; i++){
        const z = i.toString();
        $(z).textContent = game[i][0];
    }
    for(let i = 0; i < 7; i++){
        const z = i.toString() +'a';
        $(z).textContent = game[i][1];
    }
    for(let i = 0; i < 7; i++){
        const z = i.toString() +'b';
        $(z).textContent = game[i][2];
    }
    for(let i = 0; i < 7; i++){
        const z = i.toString() +'c';
        $(z).textContent = game[i][3];
    }
    for(let i = 0; i < 7; i++){
        const z = i.toString() +'d';
        $(z).textContent = game[i][4];
    }
    for(let i = 0; i < 7; i++){
        const z = i.toString() +'e';
        $(z).textContent = game[i][5];
    }
}