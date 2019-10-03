import { Deserializable } from './deserializable.model';

export class Image implements Deserializable {

    public imageUrl: string;

    deserialize(input: any): this {
        return Object.assign(this, input);
    }
}
