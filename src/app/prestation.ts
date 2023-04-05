export class Prestation {
    constructor(
        public id: number,
        public prix: string,
        public duree_session: string,
        public name: string,
        public description: string,
        public isVisible:boolean,
        public image:string,
    ){}
}
