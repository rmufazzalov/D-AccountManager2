const fs = require('fs');

// fs.readFile('passwords/passwords.txt', 'utf-8', (err, data) => {
//     fs.writeFile('passwords/passwords.txt', data + '\nSome password', (err, data) => {
//         console.log('text writed');
//     })
// })

// fs.mkdir('text-files', () => {
//     fs.writeFile('text-files/some.txt', 'Hello', () => { }) //почему-то без callback функции не работает
// })

fs.readFile('text-files/some.txt', 'utf-8', (err, data) => {
    console.log("Асинхронное чтение файла");
    if (err) throw err; // если возникла ошибка
    console.log(data);  // выводим считанные данные
})



// fs.lstat('text-files/', (err, data) => { console.log(data); })
// fs.rm('text-files/*', () => { })
// fs.rmdir('text-files', () => { })