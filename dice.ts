export class DiceRoll{
    public static random(minimo: number, maximo: number) {
        return minimo + Math.random() * (maximo - minimo)
     }
}