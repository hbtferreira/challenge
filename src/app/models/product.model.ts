import { Deserializable } from './deserializable.model';
import { Image } from './image.model';

export class Product implements Deserializable {
    name: string;
    images: Image[];
    Value: number;

    deserialize(input: any): this {
        Object.assign(this, input);
        this.images = input.images.map((image: any) => new Image().deserialize(image));
        return this;
    }
}
