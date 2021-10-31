import { openDb } from '../configDB.js';

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Pessoa ( id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER )')
    })
}

export async function insertPessoa(pessoa){
    openDb().then(db=>{
        db.run('INSERT INTO Pessoa (nome, idade) VALUES (?,?)', [pessoa.nome, pessoa.idade]);
    });
}

export async function updatePessoa(pessoa){
    openDb().then(db=>{
        db.run('UPDATE Pessoa SET nome=?, idade=? WHERE id=?', [pessoa.nome, pessoa.idade, pessoa.id]);
    });
}

export async function selectPessoas(){
    return openDb().then(db=>{
        return db.all('SELECT * FROM Pessoa')
        .then(res=>res)
    });
}

export async function selectPessoa(id){
    return openDb().then(db=>{
        return db.get('SELECT * FROM Pessoa WHERE id=?', [id])
        .then(res=>res)
    });
}

export async function deletePessoa(id){
    return openDb().then(db=>{
        return db.get('DELETE FROM Pessoa WHERE id=?', [id])
        .then(res=>res)
    });
}