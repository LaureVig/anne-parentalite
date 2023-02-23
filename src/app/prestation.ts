export class Prestation {
    constructor(
        public id: number,
        public prix: number,
        public duree_session: string,
        public name: string,
        public description: string,
        public isVisible:boolean,
    ){}
}
