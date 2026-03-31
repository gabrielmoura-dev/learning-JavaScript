/*
Você receberá um comando do usuário.
Use uma instrução switch para definir o valor da variável message com base no comando.

Defina message para:

"System starting" → se o comando for "start"
"System stopping" → se o comando for "stop"
"System paused" → se o comando for "pause"
"System resuming" → se o comando for "resume"
Se o comando não corresponder a nenhuma opção conhecida, defina:

"Unknown command"
No final, o programa imprimirá o valor de message.
Sua tarefa é definir corretamente o valor de message usando uma instrução switch. */

let command = inp;
let message;

switch (command) {
    case "start":
        message = "System starting";
        break;
    case "stop":
        message = "System stopping";
        break;
    case "pause":
        message = "System paused";
        break;
    case "resume":
        message = "System resuming";
        break;
    default:
        message = "Unknown command";
}
console.log(message);