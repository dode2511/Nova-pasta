import { personagem } from "./personagem";
import { DiceRoll } from "./dice";

export class Guerreiro extends personagem{
    constructor(nome:string){
        super( 

        nome + " Warrior",
        DiceRoll.random(1,1000),
        0,
        0,
        DiceRoll.random(0,50),
        DiceRoll.random(0,90),
        0,
        DiceRoll.random(1,40000),
        );
        this.ataque= this.forca *10;
        this.vidaAtual = this.vidaMaxima;

        this.regeneracao();{
            if(this.vidaAtual = this.vidaMaxima){
                console.log("Sua vida ja esta cheia");
                return
            }else{
                this.vidaAtual = this.vidaAtual *0.05
            }

            
        }
        this.aprimorarHabilidade();{
            this.forca = this.forca *0.10
            
        }


    }
}
