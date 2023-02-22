export class Prestation {
    constructor(
        public id: number,
        public prix: number,
        public nb_sessions: number,
        public name: string,
        public description: string,
        public isVisible:boolean,
    ){}
}
